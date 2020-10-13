const express = require('express');
const app = express();

//Middlewares definidos
app.use(express.json());
app.use(express.urlencoded(({extended: false })));

//Rotas definidas
app.use(require('./routes/index'));


app.listen(3000);
console.log('Servidor online na porta 3000');