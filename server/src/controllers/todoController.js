import * as todoService from '../services/todoService.js';
import { successResponse, errorResponse } from '../utils/response.js';

export const getAllTodos = async (req, res) => {
  try {
    const data = await todoService.getAllTodos();
    return successResponse(res, 200, 'Todos fetched', data);
  } catch (error) {
    return errorResponse(res, error.statusCode || 500, error.message);
  }
};

export const createTodo = async (req, res) => {
  try {
    const data = await todoService.createTodo(req.body);
    return successResponse(res, 201, 'Todo created', data);
  } catch (error) {
    return errorResponse(res, error.statusCode || 500, error.message);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const data = await todoService.updateTodo(req.params.id, req.body);
    return successResponse(res, 200, 'Todo updated', data);
  } catch (error) {
    return errorResponse(res, error.statusCode || 500, error.message);
  }
};

export const toggleDone = async (req, res) => {
  try {
    const data = await todoService.toggleDone(req.params.id);
    return successResponse(res, 200, 'Todo status toggled', data);
  } catch (error) {
    return errorResponse(res, error.statusCode || 500, error.message);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await todoService.deleteTodo(req.params.id);
    return successResponse(res, 200, 'Todo deleted');
  } catch (error) {
    return errorResponse(res, error.statusCode || 500, error.message);
  }
};
