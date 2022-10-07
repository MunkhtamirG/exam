const todoServices = require("./todo.services");

const getTodoList = async (req, res) => {
  const todo = await todoServices.getTodoList();
  res.json({ data: todo });
};

const createTodo = async (req, res) => {
  try {
    const todo = await todoServices.createTodo(req);
    res.json({ data: todo });
  } catch (error) {
    res.json({ error: error });
  }
};

module.exports = { getTodoList, createTodo };
