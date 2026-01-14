# YouTube-Aigo 2.0 - Agentic Platform

Welcome to the YouTube-Aigo project! This is a **Monorepo** containing two distinct parts:
1.  **Frontend (UI)**: Built with Next.js (React). Think of this like your JSP/Thymeleaf layer but running as a separate service.
2.  **Backend (API)**: Built with FastAPI (Python). This handles the AI logic, similar to a Spring Boot service but using Python for better AI ecosystem support.

## 🚀 Quick Start (Windows)

The easiest way to run everything is to use the helper script:

1.  Double-click **`start_services.bat`** in this folder.
2.  It will open two command windows (one for UI, one for API) and launch your browser.

---

## 🛠 Manual Setup & Run

If you want to run them separately (like running separate jar files), follow these steps:

### 1. Backend (Python/FastAPI)
*This is where the AI Agents live. It runs on port `8000`.*

**Prerequisites**: Python 3.11+ installed.

Open a terminal in the `backend` folder:
```powershell
cd backend
```

**One-time Setup** (Create Virtual Env - similar to a local CLASSPATH):
```powershell
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
```

**Run Server**:
```powershell
# Activates the env and starts the server (like java -jar app.jar)
.\venv\Scripts\activate
uvicorn app.main:app --reload --port 8000
```
*Note: `--reload` means it auto-restarts when you save code changes.*

### 2. Frontend (Node/Next.js)
*This is the User Interface. It runs on port `3000`.*

**Prerequisites**: Node.js (LTS) installed.

Open a new terminal in the `frontend` folder:
```powershell
cd frontend
```

**One-time Setup** (Download dependencies - like Maven/Gradle build):
```powershell
npm install
```

**Run UI**:
```powershell
# Starts the dev server
npm run dev
```

---

## 📂 Project Structure for Java Devs

- **`/backend`** (The "Service" Layer)
    - `app/main.py`: Entry point (like your `Application.java`).
    - `app/api/`: REST Controllers.
    - `app/agents/`: Business Logic / Service Classes.
    - `requirements.txt`: Dependency list (like `pom.xml` or `requirements.txt` in PySpark).

- **`/frontend`** (The "View" Layer)
    - `app/`: Pages and Routes.
    - `components/`: Reusable UI widgets.
    - `package.json`: Dependency list (like `pom.xml` for JS).

## ❓ Troubleshooting

- **"npm is not recognized"**: Install Node.js from nodejs.org.
- **"uvicorn is not recognized"**: Ensure you ran `.\venv\Scripts\activate` first.
- **Port 3000/8000 already in use**: Check if another instance is running and close it.
