const app = require('./index')
// const express = require('express');
// const router = express.Router();
// const app = express();

let port;

const server = app.listen(3000, () => {
	port = server.address().port;
	console.log('Server ready at port %s', port);
});

process.on('SIGINT', () => {
    console.log('Closing services....')
    server.close(() => {
      console.log('Server closed')
    });
});

process.on('SIGTERM', () => {
    console.log('Closing services for term....')
    server.close(() => {
      console.log('Server closed')
    });
});

