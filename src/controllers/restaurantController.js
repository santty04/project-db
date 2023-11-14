require('express');
const Restaurant = require('../models/restaurant');

async function createRestaurant(req,res){
    try{
        await Restaurant.create({
            nameRestaurant: req.body.nameRestaurant,
            locationOnBoard: req.body.locationOnBoard,
            foodPreferences: req.body.foodPreferences
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

async function listRestaurants(req, res) {
    try {
        await Restaurant.findAll({
            attributes: [
                'idRestaurant',
                'nameRestaurant',
                'locationOnBoard',
                'foodPreferences',
                'createdAt',
                'updatedAt',
                'destroyTime'
            ],
            order:['nameRestaurant']
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

async function updateRestaurant(req, res) {
    try {
        await Restaurant.update({
            nameRestaurant: req.body.nameRestaurant,
            locationOnBoard: req.body.locationOnBoard,
            foodPreferences: req.body.foodPreferences
        }, {
            where: {
                idRestaurant: req.params.idRestaurant
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

async function disableRestaurant(req, res){
    try{
        await Restaurant.destroy({
            where: {idRestaurant: req.params.idRestaurant}
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

async function enableRestaurant(req, res){
    try{
        await Restaurant.restore({
            where: {idRestaurant: req.params.idRestaurant}
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
    listRestaurants,
    createRestaurant,
    updateRestaurant,
    disableRestaurant,
    enableRestaurant
}