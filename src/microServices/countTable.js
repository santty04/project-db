const Sequelize = require('sequelize');
const table = require('../models/table'); 
const Restaurant = require('../models/restaurant');

const fechaEspecifica = '2024-01-05 19:00:00-05';


async function countTable(req, res) {
    try{
        table.count({
            where: {
              tableReservationDate: fechaEspecifica,
            },
            include: {
              model: Restaurant
            }
            
          }).then((data) => {
            return res.status(200).json({
              data: data,
            });
          }).catch((error) => {
            console.error('Error al contar mesas reservadas:', error);
          });
    } catch(e) {
        console.log(e);
    }
    
}

module.exports = {
    countTable
}