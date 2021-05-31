const express = require('express');

const router = express.Router();

const controller = require('../controllers/room.controller');

module.exports = function()
{
    router.post('/add',controller.addRoom);
    router.get('/',controller.getAllRooms)
    return router;
}
