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

const ROOM = "GroupChat";
// Websocket
io.on("connection", (socket) => {
  console.log("socket connection established!", socket.id);

  // JOIN ROOM
  socket.on("joinRoom", async (userName) => {
    await socket.join(ROOM);
    console.log(`${userName} joined the chat`);

    // send to all in the room including the one who joined
    // io.to(ROOM).emit("notifyUserAddition", userName);

    // (Broadcast) send to all except the one who joined
    socket.to(ROOM).emit("notifyUserAddition", userName);
  });

  // CHAT MESSAGE
  socket.on("chatMessage", (msg) => {
    // Broadcast
    socket.to(ROOM).emit("newMessage", msg);
  });

  // TYPING
  socket.on("typing", (userName) => {
    // Broadcast
    socket.to(ROOM).emit("typing", userName);
  });

  // STOP TYPING
  socket.on("stopTyping", (userName) => {
    // Broadcast
    socket.to(ROOM).emit("stopTyping", userName);
  });
});

server.listen(4600, () => {
  console.log(`server running on port 4600`);
});
