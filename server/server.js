const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4001;
var db = require("./db.json");

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/users": "/users",
  })
);

server.use(router);

server.listen(port);
