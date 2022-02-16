const express = require('express');
const appRouter = require('./routes')
const mongoose = require('mongoose');

const app = express();

const petstoreDbUri = 'mongodb://127.0.0.1/pet-store';
mongoose.connect(petstoreDbUri, {});
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

let port;
app.use('/', appRouter);

const server = app.listen(3000, () => {
	port = server.address().port;
	console.log('Server ready at port %s', port);
});
app.use(appRouter);

process.on('SIGINT', () => {
    console.log('Closing services....');
    db.close().then(()=> { console.log('db has been closed')}).catch((err)=>{console.log(err)});
    server.close(() => {
      console.log('Server closed')
    });
});

process.on('SIGTERM', () => {
    console.log('Closing services for term....')
    db.close().then(()=> { console.log('db has been closed')}).catch((err)=>{console.log(err)});
    server.close(() => {
      console.log('Server closed')
    });
});

