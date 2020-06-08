const worker = require('./worker');
const server = require('./server');
const io = require('./io');
const Tail = require('tail').Tail;
const browser = require('opn');

const serverPort = 3001;
const logFile = 'log';

worker.run();

server.listen(serverPort, () => {
  console.log(`listening on *:${serverPort}`);
});

tail = new Tail(logFile);
tail.on('line', (progress) => {
  console.log(`progress updated ${progress}`)
  io.emit('progressUpdated', progress);
});

browser(`http://localhost:${serverPort}`);
