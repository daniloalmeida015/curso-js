const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

// Middleware do CORS
app.use(cors());


const PORT = 3000;
const HOST = '192.168.0.232';



// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/flappy.html');
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor está ouvindo em http://${HOST}:${PORT}`);
});