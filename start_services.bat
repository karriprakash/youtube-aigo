@echo off
start "YouTube-Aigo Frontend" cmd /k "cd frontend && npm run dev"
start "YouTube-Aigo Backend" cmd /k "cd backend && call venv\Scripts\activate && uvicorn app.main:app --reload --port 8000"
echo Services starting...
start http://localhost:3000
