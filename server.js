const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "https://final-frontend-group7.herokuapp.com"||"http://localhost:8081" // change to heroku
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// drop the table if it already exists
 //db.sequelize.sync({ force: true }).then(() => {
 //  console.log("Drop and re-sync db.");
//});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Group 7 backend" });
});

require("./app/routes/employee.routes")(app);
require("./app/routes/task.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
