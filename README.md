# CodeSync - Real-time Collaborative Code Editor

A full-stack web application that enables multiple developers to write and edit code simultaneously in real-time. Built with React, Express, Socket.io, and Yjs for seamless collaborative editing.

## 🎯 Overview

CodeSync is a modern collaborative code editor that allows multiple users to work on the same code document simultaneously. Changes are synchronized in real-time across all connected clients using operational transformation and CRDT (Conflict-free Replicated Data Type) technologies.

## ✨ Features

- **Real-time Collaboration**: Multiple users can edit code simultaneously with instant synchronization
- **Monaco Editor**: Professional code editor with syntax highlighting and IntelliSense
- **Live Sync**: Changes propagate to all connected clients in milliseconds
- **CRDT Technology**: Uses Yjs for conflict-free data synchronization
- **WebSocket Support**: Socket.io for efficient real-time communication
- **Responsive Design**: Tailwind CSS for a modern, responsive UI
- **ES Modules**: Modern JavaScript with full ESM support

## 🏗️ Project Structure

```
Docker-AWS/
├── backend/                 # Express server with Socket.io
│   ├── server.js          # Main server entry point
│   ├── public/            # Static files (built frontend)
│   │   ├── index.html
│   │   └── assets/        # Compiled frontend assets
│   └── package.json
│
├── frontend/              # React + Vite application
│   ├── src/
│   │   ├── main.jsx      # App entry point
│   │   ├── app/
│   │   │   ├── App.jsx   # Main app component
│   │   │   └── App.css
│   │   └── assets/
│   ├── index.html        # HTML template
│   ├── vite.config.js    # Vite configuration
│   ├── eslint.config.js  # ESLint configuration
│   └── package.json
│
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Docker-AWS
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Development

Run both the backend and frontend in development mode:

**Terminal 1 - Backend Server:**
```bash
cd backend
npm run dev
```
The backend will run on `http://localhost:3000`

**Terminal 2 - Frontend Development:**
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

### Production Build

1. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```

The built frontend will be served from the backend's `public` directory.

## 📦 Dependencies

### Backend
- **express** (^5.2.1) - Web framework
- **socket.io** (^4.8.3) - Real-time communication
- **y-socket.io** (^1.1.3) - Yjs provider for Socket.io

### Frontend
- **react** (^19.1.1) - UI library
- **vite** - Fast build tool and dev server
- **@monaco-editor/react** (^4.7.0) - Monaco editor React wrapper
- **yjs** (^13.6.30) - CRDT library
- **y-monaco** (^0.1.6) - Yjs binding for Monaco editor
- **y-socket.io** (^1.1.3) - Yjs provider for Socket.io
- **tailwindcss** - Utility-first CSS framework

## 🛠️ Available Scripts

### Backend
```bash
npm run dev      # Run with nodemon (auto-reload on changes)
npm start        # Run production server
npm test         # Run tests
```

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Create optimized production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## 🔗 How It Works

1. **Frontend** connects to the backend via WebSocket (Socket.io)
2. **Yjs** maintains a shared document state on both client and server
3. **Monaco Editor** bindings sync editor changes to the Yjs document
4. **y-socket.io provider** broadcasts changes to all connected clients
5. **CRDT algorithm** automatically resolves conflicts without manual intervention

## 🌐 API Endpoints

### Health Check
- `GET /` - Check if server is running

## 📝 Configuration

### Vite Configuration
Edit `frontend/vite.config.js` to customize the build process.

### ESLint
Lint rules are configured in `frontend/eslint.config.js`.

## 🐛 Troubleshooting

**Port Already in Use:**
- Backend (3000): `lsof -i :3000`
- Frontend (5173): `lsof -i :5173`

**Dependencies Not Installing:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Frontend Not Building:**
Make sure you're in the frontend directory and Vite is properly configured.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

ISC License

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Document persistence (database integration)
- [ ] Presence awareness (see other users' cursors)
- [ ] Comment and annotation system
- [ ] Code execution/REPL integration
- [ ] Export to various formats

---

**Happy Coding! 🚀**
