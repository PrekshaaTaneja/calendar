## Google Calendar Clone

[![Frontend](https://img.shields.io/badge/frontend-React-blue)](./frontend)
[![Backend](https://img.shields.io/badge/backend-Express-green)](./backend)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](#who-maintains-and-contributes)

A lightweight Google Calendar inspired clone built with React, Tailwind and react-big-calendar on the frontend and Express + MongoDB on the backend. This repo is focused on developer onboarding and is a good starting point for experimenting with calendar UI, event models, and a simple REST API.

## What the project does

- Provides a responsive calendar UI using `react-big-calendar` and Tailwind CSS.
- Includes an Express backend exposing a simple REST API for events at `/api/events` (create, read, update, delete).
- Demo event form/modal components and a sidebar/navigation layout similar to popular calendar apps.

## Why this is useful

- Learning project for building full-stack React apps with a focus on calendar UIs.
- Demonstrates integration points between a modern React frontend (Vite) and an Express + MongoDB backend.
- Provides reusable UI components (Event modal, Sidebar, Navbar) and an events Mongoose model to build on.

## Project structure

- `backend/` — Express server, Mongoose models and event routes (`/api/events`).
- `frontend/` — Vite + React app, Tailwind styles, `react-big-calendar` integration.

Key files:

- `backend/server.js` — app entry, connects to MongoDB and mounts event routes.
- `backend/config/db.js` — MongoDB connection helper (reads `process.env.MONGO_URI`).
- `backend/models/Event.js` — Mongoose schema for events (title, start, end, description, allDay, color).
- `backend/routes/eventRoutes.js` — CRUD endpoints for events.
- `frontend/src/App.jsx` — app shell wiring `Navbar`, `Sidebar`, and `CalendarPage`.
- `frontend/src/components/CalendarPage.jsx` — calendar UI using `react-big-calendar`.

## Getting started (developer)

Prerequisites

- Node.js (16+ recommended)
- npm (or yarn)
- MongoDB instance (local or Atlas)

1) Clone the repo

```powershell
git clone <your-repo-url> calendar
cd calendar
```

2) Start the backend

```powershell
cd backend
npm install
# Create a .env file with MONGO_URI pointing to your MongoDB instance
# Example .env:
# MONGO_URI=mongodb+srv://<user>:<pw>@cluster0.mongodb.net/mydb?retryWrites=true&w=majority
node server.js
```

The backend will listen on port 5000 by default (see `backend/server.js`). It exposes REST endpoints under `/api/events`:

- GET /api/events — list events
- POST /api/events — create event
- PUT /api/events/:id — update event
- DELETE /api/events/:id — delete event

3) Start the frontend

```powershell
cd frontend
npm install
npm run dev
```

Vite typically serves the frontend at http://localhost:5173 (check CLI output). Open the app in your browser and use the UI to add events. Note: the current `CalendarPage` component uses local React state for demo events; axios is already installed in the frontend deps, so you can wire API calls to `/api/events` to persist events to the backend.

## Quick API example (curl)

Create an event via the backend API:

```powershell
curl -X POST http://localhost:5000/api/events -H "Content-Type: application/json" -d "{
  \"title\": \"Meeting\", 
  \"start\": \"2025-11-02T10:00:00.000Z\", 
  \"end\": \"2025-11-02T11:00:00.000Z\" 
}"
```

Fetch events:

```powershell
curl http://localhost:5000/api/events
```

## Where to get help

- Open an issue in this repository with a clear title and reproduction steps.
- Scan the code in `backend/` and `frontend/` for implementation details and open a PR with suggested fixes.

## Who maintains and contributes

This project is maintained in this repository. Contributors are welcome — please open issues for feature requests or bug reports and submit pull requests for fixes and improvements.

If you want to contribute, a minimal contribution flow:

1. Fork the repo
2. Create a feature branch
3. Open a PR describing your change

## Next steps / Ideas

- Wire frontend to backend using `axios` (persistence of events).
- Add authentication to support personal calendars.
- Add tests and CI (GitHub Actions) with a `start` script for the backend.

---

If you'd like, I can also add a basic README badge workflow, a small CONTRIBUTING.md, or wire axios calls in the frontend as a follow-up. What would you like me to do next?
