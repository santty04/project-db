const { Sequelize } = require('sequelize'); 

var dataBase = 'cruisedb'; 
var userName = 'postgres'; 
var password = '12345678'; 

const connection = new Sequelize(dataBase, userName, password, { 
    host: 'localhost', 
    dialect: 'postgres' 
}); 

 

module.exports = connection;