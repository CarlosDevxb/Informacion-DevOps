'use strict';

const { createApp } = require('./app');

const PORT = process.env.PORT || 3000;

const server = createApp().listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Cierre ordenado ante terminaciones (importante en App Service / contenedores)
function shutdown(signal) {
  console.log(`${signal} recibido, cerrando servidor...`);
  server.close(() => process.exit(0));
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
