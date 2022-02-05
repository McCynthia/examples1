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
appRouter.post('/pets/:type', petsController.pet_put_type);
appRouter.put('/pets', petsController.pet_put_type);

appRouter.get('/store', storeController.store_get);
appRouter.get('/store/:type', storeController.store_list_type);
appRouter.post('/store', storeController.store_post);
appRouter.post('/store/:type', storeController.store_put_type);
appRouter.put('/store', storeController.store_put_type);

module.exports = appRouter;
