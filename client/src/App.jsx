import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import EditModal from './components/EditModal.jsx';
import { useTodos } from './hooks/useTodos.js';

export default function App() {
  const { todos, loading, error, addTodo, editTodo, toggleTodo, removeTodo, reload } = useTodos();
  const [editingTodo, setEditingTodo] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-slate-900 dark:text-slate-100 flex flex-col">
      <Header
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((d) => !d)}
      />

      <main className="flex-1 flex justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-black tracking-tight">
              Daily Focus
            </h1>

          </div>

          <TodoForm onAdd={addTodo} />

          <TodoList
            todos={todos}
            loading={loading}
            error={error}
            onToggle={toggleTodo}
            onEdit={setEditingTodo}
            onDelete={removeTodo}
            onRetry={reload}
          />
        </div>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-5 px-10">
        <div className="flex justify-center items-center max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="size-6 bg-primary/20 rounded-md flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-sm">task_alt</span>
            </div>
            <span className="text-slate-500 dark:text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Todo App
            </span>
          </div>
        </div>
      </footer>

      {/* Edit modal */}
      {editingTodo && (
        <EditModal
          todo={editingTodo}
          onSave={editTodo}
          onClose={() => setEditingTodo(null)}
        />
      )}
    </div>
  );
}
