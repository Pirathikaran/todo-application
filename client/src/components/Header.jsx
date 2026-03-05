export default function Header({ darkMode, onToggleDark }) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-10 py-3 shadow-sm">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3 text-primary">
          <div className="size-9 bg-primary rounded-lg flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-white text-xl">task_alt</span>
          </div>
          <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold tracking-tight">
            TODO App
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onToggleDark}
          className="size-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-primary/10 transition-all"
          title="Toggle dark mode"
        >
          <span className="material-symbols-outlined text-xl">
            {darkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </div>
    </header>
  );
}
