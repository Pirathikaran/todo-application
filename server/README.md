# TODO App — Backend

Express.js REST API backed by MongoDB (Mongoose).

## Architecture

```
server/
├── server.js                  # App entry point
└── src/
    ├── config/
    │   └── db.js              # MongoDB connection
    ├── models/
    │   └── Todo.js            # Mongoose schema
    ├── repositories/
    │   └── todoRepository.js  # Raw DB queries
    ├── services/
    │   └── todoService.js     # Business logic & validation
    ├── controllers/
    │   └── todoController.js  # HTTP request/response
    ├── routes/
    │   └── todoRoutes.js      # Route definitions
    └── utils/
        └── response.js        # Unified JSON responses
```

## Setup & Run

### 1. Install dependencies
```bash
cd server
npm install
```

### 2. Configure environment
```bash
cp .env.example .env
```
Edit `.env` and fill in:
```
PORT=5001
MONGO_URI=<your MongoDB Atlas connection string>
FRONTEND_URL=http://localhost:3000
```

### 3. Start the server
```bash
# Development (auto-restart on change)
npm run dev

# Production
npm start
```

The API will be available at `http://localhost:5001`.

## MongoDB Connection

This app uses **MongoDB Atlas** (cloud-hosted). To get a connection string:
1. Sign up at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free M0 cluster
3. Under **Database Access**, create a user with read/write permissions
4. Under **Network Access**, allow your IP (or `0.0.0.0/0` for any)
5. Click **Connect → Drivers** and copy the connection string
6. Replace `<username>` and `<password>` in the string, then paste into `MONGO_URI`

**Local MongoDB:** You can also use `mongodb://localhost:27017/todo-app` for a local instance.

## API Endpoints

| Method | Endpoint              | Description               |
|--------|-----------------------|---------------------------|
| GET    | /api/todos            | Get all TODO items         |
| POST   | /api/todos            | Create a new TODO          |
| PUT    | /api/todos/:id        | Update title/description   |
| PATCH  | /api/todos/:id/done   | Toggle done status         |
| DELETE | /api/todos/:id        | Delete a TODO              |

### Response format
```json
{ "success": true, "message": "...", "data": { ... } }
```

## Assumptions & Limitations

- No authentication — all todos are globally shared.
- Title is required; description is optional.
- Title max length: 200 characters. Description max: 1000 characters.
- Timestamps (`createdAt`, `updatedAt`) are managed by Mongoose.
