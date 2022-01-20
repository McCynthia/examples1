const app = require('express');
const pets = require('./index');
//const store = require('./index');
//const app = express();

const appRouter =  app.Router()

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
//
// app.get('/', function(req, res) {
//     const menu = ['Pets', 'Services', 'Accesories'];
//     res.status(200).json(menu);
// });

appRouter.use('/pets', pets);


// appRouter.get('*', function(req, res){
//     res.status(400).json({ error: 'Endpoint not found'});
// });

module.exports = appRouter;

function petApi(req, res) {
	return res.status(200).json({ cats: 3, dogs: 5, bunnies: 20});
}