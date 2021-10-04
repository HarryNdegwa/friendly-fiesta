const express = require("express");
const cors = require("cors");
const app = express();

// app.use(cors(corsOptions));
// In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Db");
//   initial();
// });

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
