const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(morgan("dev"));

// Endpoint donde recibirá las peticiones.
app.get("/health", (req, res, next) => {
  res.status(200).send({
    status: "ok",
  });
});

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

app.listen(5000, () => {
  console.log(`Server listening at PORT: ${5000}`);
});
