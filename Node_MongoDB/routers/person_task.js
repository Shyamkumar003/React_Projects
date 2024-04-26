const express = require("express");
const {
  createPersonDetails,
  getPersonDetails,
  getDetailsById,
  deleteDetailsById
} = require("../controllers/personController");
const person_router = express.Router();

person_router.post("/", createPersonDetails);
person_router.get("/", getPersonDetails);
person_router.get("/:id", getDetailsById);
person_router.delete("/:id", deleteDetailsById);

module.exports = person_router;
