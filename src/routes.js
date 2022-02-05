const express = require('express');
const petsController = require('./controller/petsController');
const storeController = require('./controller/storeController');

const appRouter =  express.Router()
appRouter.use(express.urlencoded({ extended: true }));
appRouter.use(express.json());

appRouter.get('/', function(req, res) {
    const menu = ['Pets', 'Services', 'Accesories'];
    res.status(200).json(menu);
});
appRouter.get('/pets', petsController.pets_get);
appRouter.get('/pets/:type', petsController.pets_list_type);
appRouter.post('/pets', petsController.pets_post);
appRouter.post('/pets/:type', petsController.pets_post_type);
appRouter.put('/pets/:type', petsController.pet_put_type);
appRouter.put('/pets/:type/:name', petsController.pet_put_type_name);

appRouter.get('/store', storeController.store_get);

module.exports = appRouter;
