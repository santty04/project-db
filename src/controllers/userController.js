require('express');
const user = require('../models/user');
const typeUser = require('../models/typeUser')


async function createUser(req,res){
    try{
        await user.create({
            nameUser: req.body.nameUser,
            lastNameUser: req.body.lastNameUser,
            emailUser: req.body.emailUser,
            phoneUser: req.body.phoneUser,
            addressUser: req.body.addressUser,
            identifierUser: req.body.identifierUser,
            idTypeUser: req.body.idTypeUser
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

async function listUsers(req, res) {
    try {
        await user.findAll({
            attributes: [
                'idUser',
                'nameUser',
                'lastNameUser',
                'emailUser',
                'phoneUser',
                'addressUser',
                'identifierUser',
                'createdAt',
                'updatedAt',
                'destroyTime',
                'idTypeUser'
            ],
            order:['nameUser'],
            include: {
                model: typeUser,
                attributes: ['typeUser']
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

async function updateUser(req, res) {
    try {
        await user.update({
            nameUser: req.body.nameUser,
            lastNameUser: req.body.lastNameUser,
            emailUser: req.body.emailUser,
            phoneUser: req.body.phoneUser,
            addressUser: req.body.addressUser,
            identifierUser: req.body.identifierUser,
            idTypeUser: req.body.idTypeUser
        }, {
            where: {
                idUser: req.params.idUser
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

async function disableUser(req, res){
    try{
        await user.destroy({
            where: {idUser: req.params.idUser}
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

async function enableUser(req, res){
    try{
        await user.restore({
            where: {idUser: req.params.idUser}
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
    createUser,
    listUsers,
    updateUser,
    disableUser,
    enableUser
}