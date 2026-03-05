# TODO App — Frontend

React + Vite frontend for the TODO application.

## Architecture

```
client/
├── index.html
├── vite.config.js             # Dev server with API proxy
├── tailwind.config.js
└── src/
    ├── api/
    │   └── todoApi.js         # Axios HTTP calls
    ├── hooks/
    │   └── useTodos.js        # State management + optimistic updates
    ├── components/
    │   ├── Header.jsx         # Top nav with search & dark mode
    │   ├── TodoForm.jsx       # Create task form with validation
    │   ├── TodoItem.jsx       # Single task card
    │   ├── TodoList.jsx       # Pending + completed task lists
    │   └── EditModal.jsx      # Edit task modal
    ├── App.jsx                # Root component
    ├── main.jsx               # Entry point
    └── index.css              # Tailwind base styles
```

## Setup & Run

### 1. Install dependencies
```bash
cd client
npm install
```

### 2. Start the dev server
```bash
npm run dev
```

The app opens at `http://localhost:3000`.

> The Vite dev server proxies `/api/*` requests to `http://localhost:5001`, so the backend must be running at the same time.

### 3. Build for production
```bash
npm run build
```
Output is placed in `dist/`.

## Features

- Create tasks with title (required) and description (optional)
- Inline form validation with user-friendly error messages
- Mark tasks as done/undone with a single click
- Edit task title and description via a modal
- Delete tasks with instant feedback
- Optimistic UI updates (changes appear instantly, rolled back on error)
- Search/filter tasks in real-time
- Dark mode toggle (persisted to localStorage)
- Loading and error states with retry
- Toast notifications for all actions

## Assumptions & Limitations

- Requires the backend server to be running at `http://localhost:5001`.
