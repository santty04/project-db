const Sequelize = require('sequelize');
const table = require('../models/table'); 
const Restaurant = require('../models/restaurant');

const fechaEspecifica = '2023-12-16';


async function countTable() {
    try{
        table.count({
            where: {
              fechaReserva: fechaEspecifica,
            },
            include: [
              {
                model: Restaurant,
                where: { id: Sequelize.col('table.idRestaurant') },
              },
            ],
          }).then((cantidadMesasReservadas) => {
            console.log(`En el crucero hay ${cantidadMesasReservadas} mesas reservadas en la fecha ${fechaEspecifica}`);
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