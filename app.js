const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const userRoutes = require("./routes/users");
const carRoutes = require("./routes/cars");
const db = require("./models/index");
const {
  getActiveUser,
  exitRoom,
  newUser,
  getIndividualRoomUsers,
} = require("./helpers/userHelpers");
const formatMessage = require("./helpers/formatDate");

const app = express();

const server = http.createServer(app);

const io = socketio(server);

app.use(express.static(path.join(__dirname, "public")));

db.sequelize.sync({ force: true });

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/cars", carRoutes);

// io.on("connection", (socket) => {
//   console.log(`socket`, socket);

//   socket.on("joinRoom", (data) => {
//     console.log(`data`, data);
//   });
// });

// this block will run when the client connects
io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = newUser(socket.id, username, room);

    socket.join(user.room);

    // General welcome
    socket.emit(
      "message",
      formatMessage("WebCage", "Messages are limited to this room! ")
    );

    // Broadcast everytime users connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage("WebCage", `${user.username} has joined the room`)
      );

    // Current active users and room name
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getIndividualRoomUsers(user.room),
    });
  });

  // Listen for client message
  socket.on("chatMessage", (msg) => {
    const user = getActiveUser(socket.id);

    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = exitRoom(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage("WebCage", `${user.username} has left the room`)
      );

      // Current active users and room name
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getIndividualRoomUsers(user.room),
      });
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
