# Docker-AWS

A full-stack collaborative editor project with a Node/Express backend and a React + Vite frontend. The backend uses Socket.io and Yjs for real-time synchronization, and the frontend provides the editor UI.

## 🚀 Project Summary

This repository contains two separate applications:

- `backend/`: Express server with Socket.io and Yjs integration
- `frontend/`: React + Vite client that connects to the backend

The backend serves the production build of the frontend through `backend/public` and supports real-time collaboration using `y-socket.io`.

## 📁 Repository Structure

```
Docker-AWS/
├── backend/
│   ├── public/            # Built frontend assets for production
│   ├── server.js          # Express + Socket.io server
│   └── package.json       # Backend dependencies and scripts
├── frontend/
│   ├── src/               # React application source code
│   ├── index.html         # Vite HTML template
│   ├── vite.config.js     # Vite configuration
│   ├── eslint.config.js   # ESLint configuration
│   └── package.json       # Frontend dependencies and scripts
└── README.md              # Project documentation
```

## 🧩 Main Technologies

- Backend: `express`, `socket.io`, `y-socket.io`
- Frontend: `react`, `vite`, `@monaco-editor/react`, `yjs`, `y-monaco`
- Build tools: `vite`, `eslint`, `tailwindcss`

## 🔧 Prerequisites

- Node.js 18 or higher
- npm or yarn

## 📦 Installation

```bash
cd backend
npm install
cd ../frontend
npm install
```

## 🧪 Local Development

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend:

```bash
cd frontend
npm run dev
```

- Backend: `http://localhost:3000`
- Frontend: `http://localhost:5173`

## 🚀 Production Build

1. Build the frontend:

```bash
cd frontend
npm run build
```

2. Start the backend:

```bash
cd backend
npm start
```

The backend serves the compiled frontend from `backend/public`.

## 🌐 API

- `GET /` — health check endpoint

## ⚙️ How It Works

1. Frontend connects to the backend using Socket.io.
2. `y-socket.io` synchronizes shared document state among connected clients.
3. Monaco editor changes flow through Yjs and broadcast updates to all users.
4. CRDT-based sync resolves concurrent changes automatically.

## 📌 Available Scripts

### Backend

```bash
npm run dev      # run backend with nodemon
npm start        # run backend in production mode
```

### Frontend

```bash
npm run dev      # start Vite development server
npm run build    # build production assets
npm run preview  # preview built production files
npm run lint     # run ESLint
```

## 🛠️ Troubleshooting

- If port 3000 is busy: `lsof -i :3000`
- If port 5173 is busy: `lsof -i :5173`
- If install fails: remove `node_modules` and lockfile, then reinstall
- Make sure the frontend build completes before starting production backend

## 🌱 Future Improvements

- Persistent storage for saved documents
- User authentication and session management
- Cursor presence / collaborator indicators
- Document versioning and restore
- Support for multiple rooms or projects

## 📄 License

ISC

