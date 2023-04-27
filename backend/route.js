const express = require("express");
const { saveNewUser } = require("./userC");
const Route = express.Router();
Route.post("/user", saveNewUser);
module.exports = Route;
