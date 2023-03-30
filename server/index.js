const express = require('express');
const app = express();
const http = require("http");
const {
    Server
} = require("socket.io");
const cors = require("cors")
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "localhost:3000",
        methods: ["GET", "POST"]
    }
})

app.use(cors())

app.get("/api", (req, res) => {
    res.send({"users":["essa"]})
})
server.listen(3001, () => {
    console.log("Server started on port 3001")
})