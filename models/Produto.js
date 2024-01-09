const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection/sequelize'); // Importe a configuração do Sequelize

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false, // Adiciona essa linha no segundo parâmetro
});

module.exports = Produto;
