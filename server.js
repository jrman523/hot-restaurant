var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
  {
    routeName: "table1",
    name: "NAME1",
    phone: "PHONE1",
    email: "EMAIL.COM1",
    ID: "ID#1"
  }, {
    routeName: "john",
    name: "john smith",
    phone: "647373273",
    email: "test@email.com",
    ID: "JOHN"

  }
];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function (req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/viewTables", function (req, res) {
  res.sendFile(path.join(__dirname, "viewTables.html"));
});

// Displays all tables
app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

// Displays a single character, or returns false
app.get("/api/tables/:table", function (req, res) {
  var chosen = req.params.table;

  console.log(chosen);

  for (var i = 0; i < tables.length; i++) {
    if (chosen === tables[i].routeName) {
      return res.json(tables[i]);
    }
  }

  return res.json(false);
});

// Create New tables - takes in JSON input
app.post("/api/tables", function (req, res) {
  var newtable = req.body;

  newtable.routeName = newtable.routeName.replace(/\s+/g, "").toLowerCase();

  console.log(newtable);

  tables.push(newtable);

  res.json(newtable);
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

