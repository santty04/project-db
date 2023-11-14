require('express');
const typeUser = require('../models/typeUser');

async function createTypeUser(req,res){
    try{
        await typeUser.create({
            typeUser: req.body.typeUser,
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

async function listTypeUsers(req, res) {
    try {
        await typeUser.findAll({
            attributes: [
                'idTypeUser',
                'typeUser'
            ],
            order:['typeUser']
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

async function updateTypeUser(req, res) {
    try {
        await typeUser.update({
            typeUser: req.body.typeUser
        }, {
            where: {
                idTypeUser: req.params.idTypeUser
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

async function disableTypeUser(req, res){
    try{
        await typeUser.destroy({
            where: {idTypeUser: req.params.idTypeUser}
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

async function enableTypeUser(req, res){
    try{
        await typeUser.restore({
            where: {idTypeUser: req.params.idTypeUser}
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
    createTypeUser,
    listTypeUsers,
    updateTypeUser,
    disableTypeUser,
    enableTypeUser
}