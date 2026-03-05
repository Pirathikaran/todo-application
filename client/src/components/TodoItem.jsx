import { useState } from 'react';
import { formatRelative } from '../utils/commonUtils';

export default function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await onDelete(todo._id);
    } finally {
      setDeleting(false);
    }
  };

  const timeLabel = todo.done
    ? `Completed ${formatRelative(todo.updatedAt)}`
    : `Added ${formatRelative(todo.createdAt)}`;

  return (
    <div
      className={`group flex items-start justify-between gap-3 p-4 rounded-xl border transition-all animate-fade-in
        ${todo.done
          ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60'
          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-md border-l-4 border-l-primary'
        }
      `}
    >
      <div className="flex items-start gap-4 flex-1 min-w-0">
        <div className="pt-0.5">
          <button
            onClick={() => onToggle(todo._id)}
            className={`size-6 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all
              ${todo.done
                ? 'bg-primary border-primary text-white'
                : 'border-slate-300 dark:border-slate-600 hover:border-primary'
              }`}
            title={todo.done ? 'Mark as pending' : 'Mark as done'}
          >
            {todo.done && <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>}
          </button>
        </div>

        <div className="flex flex-col min-w-0">
          <h3
            className={`font-semibold text-base leading-tight truncate ${
              todo.done ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-slate-100'
            }`}
          >
            {todo.title}
          </h3>
          {todo.description && (
            <p
              className={`text-sm mt-1 line-clamp-2 ${
                todo.done ? 'line-through text-slate-400 dark:text-slate-500 italic' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {todo.description}
            </p>
          )}
          <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">{todo.done ? 'check_circle' : 'schedule'}</span>
            {timeLabel}
          </p>
        </div>
      </div>

      <div className={`flex gap-1.5 flex-shrink-0 transition-opacity ${todo.done ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        {!todo.done && (
          <button
            onClick={() => onEdit(todo)}
            className="size-9 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-primary/10 transition-all"
            title="Edit task"
          >
            <span className="material-symbols-outlined text-xl">edit</span>
          </button>
        )}
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="size-9 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all disabled:opacity-40"
          title="Delete task"
        >
          {deleting
            ? <span className="size-4 border-2 border-slate-300 border-t-red-400 rounded-full animate-spin" />
            : <span className="material-symbols-outlined text-xl">delete</span>
          }
        </button>
      </div>
    </div>
  );
}
