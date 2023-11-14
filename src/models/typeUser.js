const { Model, DataTypes } = require('sequelize');
const connection = require('../database/connection');

class TypeUser extends Model {}

TypeUser.init({
    // Attributes
    idTypeUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    typeUser: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Options
    sequelize: connection,
    modelName: 'typeUser',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = TypeUser;