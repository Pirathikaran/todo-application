import { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';
import * as api from '../api/todoApi.js';

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTodos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.performGetAllTodos();
      setTodos(res.data.data || []);
    } catch {
      setError('Failed to load tasks. Please check your connection.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const addTodo = async (payload) => {
    const res = await api.performCreateTodo(payload);
    const newTodo = res.data.data;
    setTodos((prev) => [newTodo, ...prev]);
    toast.success('Task created!');
    return newTodo;
  };

  const editTodo = async (id, payload) => {
    setTodos((prev) =>
      prev.map((t) => (t._id === id ? { ...t, ...payload } : t))
    );
    try {
      const res = await api.performUpdateTodo(id, payload);
      setTodos((prev) =>
        prev.map((t) => (t._id === id ? res.data.data : t))
      );
      toast.success('Task updated!');
    } catch (e) {
      await loadTodos();
      toast.error(e.response?.data?.message || 'Update failed');
      throw e;
    }
  };

  const toggleTodo = async (id) => {
    setTodos((prev) =>
      prev.map((t) => (t._id === id ? { ...t, done: !t.done } : t))
    );
    try {
      const res = await api.performToggleDone(id);
      setTodos((prev) =>
        prev.map((t) => (t._id === id ? res.data.data : t))
      );
    } catch {
      await loadTodos();
      toast.error('Could not update status');
    }
  };

  const removeTodo = async (id) => {
    setTodos((prev) => prev.filter((t) => t._id !== id));
    try {
      await api.performDeleteTodo(id);
      toast.success('Task deleted');
    } catch {
      await loadTodos();
      toast.error('Could not delete task');
    }
  };

  return { todos, loading, error, addTodo, editTodo, toggleTodo, removeTodo, reload: loadTodos };
}
