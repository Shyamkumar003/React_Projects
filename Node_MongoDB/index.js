const connectionDB = require("./util/database");
const express = require("express");
const cors = require("cors");
const task_routes = require("./routers/router_task");
const person_router = require("./routers/person_task");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const start = async () => {
  try {
    await connectionDB(process.env.MONGO_LOCAL_URL);
    console.log("connected");
    app.listen(8080, () => {
      console.log("server is running on port no 8080");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
app.use("/task", task_routes);
app.use("/person", person_router);
