import Todo from '../models/Todo.js';

export const getAllTodos = () =>
  Todo.find().sort({ createdAt: -1 });

export const getTodoById = (id) =>
  Todo.findById(id);

export const createTodo = (data) =>
  Todo.create(data);

export const updateTodo = (id, data) =>
  Todo.findByIdAndUpdate(id, data, { new: true, runValidators: true });

export const toggleDone = async (id) => {
  const todo = await Todo.findById(id);
  if (!todo) return null;
  todo.done = !todo.done;
  return todo.save();
};

export const deleteTodo = (id) =>
  Todo.findByIdAndDelete(id);
