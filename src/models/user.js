const { Model, DataTypes } = require('sequelize');
const connection = require('../database/connection');

class User extends Model {}

User.init({
    // Attributes
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    nameUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastNameUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addressUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identifierUser: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    // Options
    sequelize: connection,
    modelName: 'user',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = User;