import TodoItem from './TodoItem.jsx';

export default function TodoList({ todos, loading, error, onToggle, onEdit, onDelete, onRetry }) {
  const pending = todos.filter((t) => !t.done);
  const done = todos.filter((t) => t.done);
  const total = todos.length;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="size-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="text-slate-400 text-sm font-medium">Loading your tasks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <div className="size-16 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl text-red-400">wifi_off</span>
        </div>
        <div>
          <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg">Connection error</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{error}</p>
        </div>
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all"
        >
          <span className="material-symbols-outlined text-xl">refresh</span>
          Retry
        </button>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-900/30">
        <div className="size-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-slate-400">inventory_2</span>
        </div>
        <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg">All clear!</h3>
        <p className="text-slate-500 dark:text-slate-400 text-center max-w-xs mt-2 text-sm leading-relaxed">
          No tasks yet. Use the form above to add your first task.
        </p>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-4">
      {/* Stats bar */}
      <div className="flex items-center justify-between px-1">
        <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold">Tasks</h2>
        <div className="flex gap-2">
          <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
            {pending.length} Pending
          </span>
          <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-bold px-3 py-1 rounded-full">
            {total} Total
          </span>
        </div>
      </div>

      {/* Pending tasks */}
      {pending.length > 0 && (
        <div className="flex flex-col gap-3">
          {pending.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}

      {/* Completed tasks */}
      {done.length > 0 && (
        <>
          <div className="flex items-center gap-3 mt-2">
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Completed ({done.length})
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="flex flex-col gap-3">
            {done.map((todo) => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onToggle={onToggle}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
