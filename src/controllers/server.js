const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());

//Middelware de error.
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    status: "error",
    message: err.message,
  });
});

//Middelware de ruta no encontrada.
app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: "Ruta no encontrada",
  });
});
