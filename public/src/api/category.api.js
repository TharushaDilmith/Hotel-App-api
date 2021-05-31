const express = require('express');

const router = express.Router();

const controller = require('../controllers/category.controller');

module.exports = function()
{
    router.post('/add',controller.addCategory);
    router.get('/',controller.getAllCategory);
    router.get('/:id',controller.getRoomsInCategory);
    return router;
}