const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Configura middleware, rutas y lógica del backend aquí

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
