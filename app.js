const express = require("express");
const cors = require("cors");
const http = require("http");
const socketio = require("socket.io");

const userRoutes = require("./routes/users");
const carRoutes = require("./routes/cars");
const db = require("./models/index");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

const server = http.createServer(app);

const io = socketio(server);

// db.sequelize.sync({ force: true });
db.sequelize.sync();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/v1", userRoutes);
app.use("/v1", carRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
