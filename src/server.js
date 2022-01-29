const express = require('express');
const appRouter = require('./routes')

const app = express();

let port;
app.use('/', appRouter);
const server = app.listen(3000, () => {
	port = server.address().port;
	console.log('Server ready at port %s', port);
});
app.use(appRouter);

process.on('SIGINT', () => {
    console.log('Closing services....');
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

