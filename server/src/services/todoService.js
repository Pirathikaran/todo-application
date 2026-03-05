import * as repo from '../repositories/todoRepository.js';

export const getAllTodos = () => repo.getAllTodos();

export const getTodoById = async (id) => {
  const todo = await repo.getTodoById(id);
  if (!todo) throw { statusCode: 404, message: 'Todo not found' };
  return todo;
};

export const createTodo = ({ title, description }) => {
  if (!title || !title.trim()) {
    throw { statusCode: 400, message: 'Title is required' };
  }
  return repo.createTodo({ title: title.trim(), description: description?.trim() || '' });
};

export const updateTodo = async (id, { title, description }) => {
  if (!title || !title.trim()) {
    throw { statusCode: 400, message: 'Title is required' };
  }
  const todo = await repo.updateTodo(id, { title: title.trim(), description: description?.trim() || '' });
  if (!todo) throw { statusCode: 404, message: 'Todo not found' };
  return todo;
};

export const toggleDone = async (id) => {
  const todo = await repo.toggleDone(id);
  if (!todo) throw { statusCode: 404, message: 'Todo not found' };
  return todo;
};

export const deleteTodo = async (id) => {
  const todo = await repo.deleteTodo(id);
  if (!todo) throw { statusCode: 404, message: 'Todo not found' };
  return todo;
};
