const { Model, DataTypes } = require('sequelize');
const connection = require('../database/connection');

class Table extends Model {}

Table.init({
    // Attributes
    idTable: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    numberPeople: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descriptionTable: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tableAvailability: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    tableReservationTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    tableReservationDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    // Options
    sequelize: connection,
    modelName: 'table',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = Table;