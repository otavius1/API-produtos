const connection = require('./conexao');
const sequelize = require('./sequelize');
const Produto = require('../models/Produto');

function testarConexao() {
    connection.connect((err) => {
        if (err) {
            console.error(err, 'Erro ao conectar ao MySQL');
        } else {
            console.log('Conexão com o MySQL funcionando!');

            sequelize.sync()
                .then(() => {
                    console.log('Modelo sincronizado com o banco de dados');
                })
                .catch((err) => {
                    console.error('Erro ao sincronizar modelo:', err);
                });
        }
    });
}

module.exports = testarConexao;
