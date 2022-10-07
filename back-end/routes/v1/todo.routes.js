const express = require("express");
const router = express.Router();
const todoController = require("../../modules/todo");

router.get("/", todoController.getTodoList);
router.post("/create", todoController.createTodo);

module.exports = router;
