const { Model, DataTypes } = require('sequelize');
const connection = require('../database/connection');

class Restaurant extends Model {}

Restaurant.init({
    // Attributes
    idRestaurant: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    nameRestaurant: {
        type: DataTypes.STRING,
        allowNull: false
    },
    locationOnBoard: {
        type: DataTypes.STRING,
        allowNull: false
    },
    foodPreferences: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Options
    sequelize: connection,
    modelName: 'restaurant',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = Restaurant;