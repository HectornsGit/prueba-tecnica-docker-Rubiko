const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

// Endpoint donde recibirá las peticiones.
const getGreetings = require("./controllers/getGreetings");

app.get("/health", getGreetings);

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

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening at PORT: ${process.env.PORT || 5000}`);
});
