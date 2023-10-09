const express = require('express');
const cors = require("cors");
const db = require('./database/db');

const controllers = require('./controllers');

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get('/user/:userId', controllers.getUserById);
app.post('/register', controllers.register);
app.post('/login', controllers.login);

const PORT = 4000;

app.listen(PORT, () => {
    console.log('Servidor funcionando en el puerto', PORT);
    db();
});

module.exports = app;