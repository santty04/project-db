const connection = require('./connection')

const typeUser = require('../models/typeUser')
const user = require('../models/user')
const table = require('../models/table')
const booking = require('../models/booking')
const restaurant = require('../models/restaurant')

const typeUserjson = require('./jsonfiles/typeUserjson')
const userjson = require('./jsonfiles/userjson')
const restaurantjson = require('./jsonfiles/restaurantjson')
const tablejson = require('./jsonfiles/tablejson')
const bookingjson = require('./jsonfiles/bookingjson')

async function sync() {
    typeUser - user
    typeUser.hasMany(user, {
        foreignKey: 'idTypeUser',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    });
    user.belongsTo(typeUser, {
        foreignKey: 'idTypeUser',
    });
    // restaurant - table
    restaurant.hasMany(table, {
        foreignKey: 'idRestaurant',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    });
    table.belongsTo(restaurant, {
        foreignKey: 'idRestaurant',
    });
    // user - booking
    user.hasMany(booking, {
        foreignKey: 'idUser',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    });
    booking.belongsTo(user, {
        foreignKey: 'idUser'
    });
    // table - booking
    table.hasMany(booking, {
        foreignKey: 'idTable',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    })
    booking.belongsTo(table, {
        foreignKey: 'idTable'
    })

    
    
    await connection.sync({force: false});
    await connection.authenticate().then(() => {
        console.log("La conexión fue exitosa")
    }).catch((e) => {
        console.log("Error: " + e)
    })
    // typeUserjson.createTypeUsers();
    // userjson.createTypeUsers();
    // restaurantjson.createTypeUsers();
    // tablejson.createTypeUsers();
    // bookingjson.createTypeUsers();
}

sync();