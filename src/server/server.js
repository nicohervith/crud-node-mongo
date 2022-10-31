const express = require("express");
const path = require("path");

//Initializations
const app = express();

//Settings

// Hace referencia a una variable del sistema operativo

app.set("port", process.env.PORT || 4000);
// __dirname me da la ruta entera de donde está determinado archivo o carpeta
app.set("views", path.join(__dirname, "views"));

// Middlewares
// Este método me permite que cuando se carguen datos los conviera en json
app.use(express.urlencoded({ extended: false }));

// Global Variables

//Routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
