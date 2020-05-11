require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const usersRouter = require("./users/usersRouter");
const listsRouter = require("./lists/listsRouter");

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use("/api/users", usersRouter);
server.use("/api/users/lists", listsRouter);

server.get("/", (req, res) => {
  res.send("Server is up and running! :)");
});

module.exports = server;
