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
      routeName: "",
      name: "NAME",
      phone: "PHONE",
      email: "EMAIL.COM",
      ID: "ID#"
    }];

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
      });
      
      app.get("/addTable", function(req, res) {
        res.sendFile(path.join(__dirname, "addTable.html"));
      });
      
      // Displays all characters
      app.get("/api/tables", function(req, res) {
        return res.json(tables);
      });
      
      // Displays a single character, or returns false
      app.get("/api/tables/:table", function(req, res) {
        var chosen = req.params.tables;
      
        console.log(chosen);
      
        for (var i = 0; i < tables.length; i++) {
          if (chosen === tables[i].routeName) {
            return res.json(tables[i]);
          }
        }
      
        return res.json(false);
      });
      





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
