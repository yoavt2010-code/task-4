const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

// מאפשר קריאת JSON מהבקשות
app.use(bodyParser.json());

// מאפשר CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// GET endpoint
app.get("/get", (req, res) => {
    console.log("GET request data:", req.query);

    res.json({
        success: true,
        message: "GET request התקבל!"
    });
});

// POST endpoint
app.post("/post", (req, res) => {
    console.log("POST request data:", req.body);

    res.json({
        success: true,
        message: "POST request התקבל!"
    });
});

// CONTACT endpoint
app.post("/contact", (req, res) => {
    console.log("Contact form data:", req.body);

    res.json({
        success: true,
        message: "הטופס נשלח בהצלחה!"
    });
});

// Start server
app.listen(port, () => {
    console.log(`השרת רץ: http://localhost:${port}`);
});const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);