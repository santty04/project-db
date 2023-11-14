require('express');
const Restaurant = require('../models/restaurant');
const table = require('../models/table');

async function createTable(req,res){
    try{
        await table.create({
            numberPeople: req.body.numberPeople,
            descriptionTable: req.body.descriptionTable,
            tableAvailability: req.body.tableAvailability,
            tableReservationTime: req.body.tableReservationTime,
            tableReservationDate: req.body.tableReservationDate,
            idRestaurant: req.body.idRestaurant
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function listTables(req, res) {
    try {
        await table.findAll({
            attributes: [
                'idTable',
                'numberPeople',
                'descriptionTable',
                'tableAvailability',
                'tableReservationTime',
                'tableReservationDate',
                'createdAt',
                'updatedAt',
                'destroyTime',
                'idRestaurant'
            ],
            order:['idTable'],
            include: {
                model: Restaurant,
                attributes: ['nameRestaurant']
            }
        }).then(function(data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
    } catch(e) {
        console.log(e);
    }
}

async function updateTable(req, res) {
    try {
        await table.update({
            numberPeople: req.body.numberPeople,
            descriptionTable: req.body.descriptionTable,
            tableAvailability: req.body.tableAvailability,
            tableReservationTime: req.body.tableReservationTime,
            tableReservationDate: req.body.tableReservationDate,
            idRestaurant: req.body.idRestaurant
        }, {
            where: {
                idTable: req.params.idTable
            }
        }).then(function(data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e) {
        console.log(e);
    }
}

async function disableTable(req, res){
    try{
        await table.destroy({
            where: {idTable: req.params.idTable}
        }).then(function(data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e) {
        console.log(e);
    }
}

async function enableTable(req, res){
    try{
        await table.restore({
            where: {idTable: req.params.idTable}
        }).then(function(data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e) {
        console.log(e);
    }
}

module.exports = {
    createTable,
    listTables,
    updateTable,
    disableTable,
    enableTable
}