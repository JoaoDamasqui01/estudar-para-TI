const { DataTypes } = require("sequelize");
const sequelize = require("../dataBase.js");//arq de conexão

const Servicos = sequelize.define("Servicos", {
    nome:{
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    descricao:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    imagem:{
        type: DataTypes.STRING,
        allowNull: false,
    },
})
module.exports = Servicos