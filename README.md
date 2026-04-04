# 💬 Realtime Group Chat App

A lightweight, real-time group chat application built with React and Node.js, powered by WebSockets via Socket.IO. Multiple users can join a shared chat room, send messages, and see live typing indicators — all in real time.

---

## Features

- **Real-time messaging** — Messages are instantly delivered to all connected users via WebSockets
- **Typing indicators** — Shows who is currently typing, with automatic stop detection after inactivity
- **Group room** — All users join a single shared room automatically on login
- **User identity** — Users enter a display name before joining; all messages are attributed to the sender
- **Join notifications** — Other users are notified when someone new joins the chat
- **WhatsApp-inspired UI** — Clean chat interface with sent/received message bubbles and timestamps

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite](https://vite.dev/) | Build tool and dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Socket.IO Client](https://socket.io/docs/v4/client-api/) | WebSocket connection to the server |

### Backend
| Technology | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) | Runtime |
| [Express 5](https://expressjs.com/) | HTTP server |
| [Socket.IO](https://socket.io/) | WebSocket server |
| [Nodemon](https://nodemon.io/) | Dev auto-restart |

---

## Project Structure

```
chat-app/
├── frontend/               # React + Vite client
│   ├── src/
│   │   ├── App.jsx         # Main app component (chat UI)
│   │   ├── ws.js           # Socket.IO client connection
│   │   ├── index.css       # Global styles + Tailwind import
│   │   └── main.jsx        # React entry point
│   ├── index.html
│   └── package.json
│
└── backend/                # Node.js + Express server
    ├── server.js           # Express + Socket.IO server
    └── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/chat-app.git
cd chat-app
```

### 2. Start the backend

```bash
cd backend
npm install
npm run dev
```

The server runs on `http://localhost:4600`.

### 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

The app runs on `http://localhost:5173`.

### 4. Open multiple tabs

Open the app in two or more browser tabs, enter different names in each, and start chatting.

---

## Socket.IO Events

| Event | Direction | Payload | Description |
|---|---|---|---|
| `joinRoom` | Client → Server | `userName: string` | User joins the group room |
| `notifyUserAddition` | Server → Clients | `userName: string` | Broadcast when a new user joins |
| `chatMessage` | Client → Server | `{ id, sender, text, ts }` | User sends a message |
| `newMessage` | Server → Clients | `{ id, sender, text, ts }` | Broadcast new message to room |
| `typing` | Client → Server | `userName: string` | User started typing |
| `typing` | Server → Clients | `userName: string` | Broadcast typing status |
| `stopTyping` | Client → Server | `userName: string` | User stopped typing |
| `stopTyping` | Server → Clients | `userName: string` | Broadcast stop typing |

---

## Screenshots

> _Add screenshots here once the UI is complete._

---

## License

MIT
