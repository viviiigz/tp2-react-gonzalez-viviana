const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let donaciones = [
  { id: 1, producto: "Cajones de manzanas", cantidad: 5, estado: "disponible" },
  { id: 2, producto: "Panificados varios", cantidad: 20, estado: "reservado" }
];

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});