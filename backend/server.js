import { createServer } from "http";
import express from "express";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.send("<p>Server is running...</p>");
});

// Websocket
io.on("connection", (socket) => {
  console.log("User connected!", socket.id);
});

server.listen(4600, () => {
  console.log(`server running on port 4600`);
});
