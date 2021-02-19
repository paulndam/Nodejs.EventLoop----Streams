const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on(`newSales`, () => {
  console.log(`there is a new sale`);
});

myEmitter.on(`newSales`, () => {
  console.log(`customer name is :---> Rico`);
});

myEmitter.on(`newSales`, (stock) => {
  console.log(`there are ${stock} item left`);
});

myEmitter.emit(`newSales`, 9);

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(`Request Recieved`);
  res.end(`Request roger that`);
});

server.on("request", (req, res) => {
  console.log(`Another One`);
});

server.on("close", () => {
  console.log(`server is closed`);
});

server.listen(5000, `127.0.0.1`, () => {
  console.log(`waiting for request`);
});
