const express = require("express");
const cors = require("cors");
const SocketService = require("./SocketService");
const app = express();
const server = require("http").Server(app);
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Terminal running");
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  const socketService = new SocketService();
  socketService.attachServer(server);
});
