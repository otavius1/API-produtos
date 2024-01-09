const express = require('express');
const PORT = 3001;
const app = express();
const connection = require('./connection/teste')

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
)

const routes = require('./src/app')

app.use('/app', routes)

app.get('/', (req, res) => {
    res.json({ message: 'Bem vindo ao site' })
})

app.listen(PORT, () => {
    console.log(`Servidor está em funcionamento. Acesse: http://localhost:${PORT}`);
});

connection();
