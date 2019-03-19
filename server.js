const jsonServer = require('json-server');
const server = jsonServer.create();
const dbPath = './api/database.json'
const dbRoutes = Object.keys(require(dbPath)).map(r => '/' + r);
const jsonServer = require('json-server');
const server = jsonServer.create(dbRoutes);
const router = jsonServer.router(dbPath);const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
