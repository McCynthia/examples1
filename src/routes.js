const express = require('express');
const router = express.Router();


router.get('/', petApi);


router.get('*', function(req, res){
    res.status(400).json({ error: 'Endpoint not found'});
});

module.exports = router;

function petApi(req, res) {
	return res.status(200).json({ cats: 3, dogs: 5, bunnies: 20});
}