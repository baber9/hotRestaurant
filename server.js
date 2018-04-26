// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var hungryPeople = [
  {
    customerName: "Bryan",
    phoneNumber: "999.999.9999",
    customerEmail: "a@a.com",
    customerID: "ba"
  },
  {
    customerName: "AJ",
    phoneNumber: "888.888.8888",
    customerEmail: "b@b.com",
    customerID: "aj"
  },
  {
    customerName: "Aaron",
    phoneNumber: "777.777.7777",
    customerEmail: "c@c.com",
    customerID: "aa"
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

// Displays all tables
app.get("/api/tables", function(req, res) {
  return res.json(hungryPeople);
});

// Displays hungry people waiting
app.get("/api/waitlist", function(req, res) {
    var waiting = [];

    if (waiting) {
        for (i = 5; i < hungryPeople.length; i++) {
            waiting.push(hungryPeople);
        }
        return json(waiting);
    } else {
        return [];
    }
  });


// Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newHungryPerson = req.body;

  console.log(newHungryPerson);

  hungryPeople.push(newHungryPerson);

  res.json(newHungryPerson);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

