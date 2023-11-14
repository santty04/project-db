const { Model, DataTypes } = require('sequelize');
const connection = require('../database/connection');

class Booking extends Model {}

Booking.init({
    // Attributes
    idBooking: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    bookingDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    bookingStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    // Options
    sequelize: connection,
    modelName: 'booking',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = Booking;