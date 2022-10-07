const Todo = require("./todo.model");

const getTodoList = () => {
  return Todo.find();
};

const createTodo = async (req) => {
  const todo = new Todo(req.body);
  return await todo.save();
};


module.exports = { getTodoList, createTodo};
