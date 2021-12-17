const app = require('./index');


let port;

const server = app.listen(3000, () => {
  port = server.address().port;
  console.log('Server ready at port %s', port);
});


process.on('SIGNINT', () => {
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




