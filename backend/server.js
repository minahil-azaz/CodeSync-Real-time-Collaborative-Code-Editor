import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { YSocketIO } from "y-socket.io/dist/server";

const app = express();
const httpServer = createServer(app);

app.use(express.static("public"));

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const ySocketIO = new YSocketIO(io);
ySocketIO.initialize();

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is working fine",
    success: true,
  });
});

// IMPORTANT for AWS ECS
httpServer.listen(3000, "0.0.0.0", () => {
  console.log("server is running on 3000");
});