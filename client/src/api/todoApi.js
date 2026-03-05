import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

export const performGetAllTodos = () => api.get('/todos');
export const performCreateTodo = (payload) => api.post('/todos', payload);
export const performUpdateTodo = (id, payload) => api.put(`/todos/${id}`, payload);
export const performToggleDone = (id) => api.patch(`/todos/${id}/done`);
export const performDeleteTodo = (id) => api.delete(`/todos/${id}`);
