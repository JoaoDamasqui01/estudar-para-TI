const {Sequelize} = require ("sequelize");
//npm install mysql2
const sequelize = new Sequelize(
    'projetoAdvocacia', 'root','Senac@123',{
        host:'localhost',
        dialect: 'mysql',
        port: 3307
    }
);
module.exports = sequelize;

/*const sequelize = new Sequelize({
    dialect: "sqlite", 
    storage:"./database.sqlite",
})

module.exports = sequelize;*/