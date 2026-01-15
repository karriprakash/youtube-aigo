# Learning Roadmap: YouTube-Aigo 2.0 (Agentic AI)

Since you are a Java developer with Python (Spark/Pandas) experience, this roadmap is designed to bridge your existing knowledge into this **Modern AI Stack**.

## 1. The Big Picture
Your project is now a **Multi-Service Architecture**:
*   **Frontend (Next.js/React)**: The "Display Layer". Similar to a modern web portal. Runs on Port 3000.
*   **Backend (FastAPI/Python)**: The "Intelligence Layer". This is where the AI Agents live. Runs on Port 8000.
*   **Agents (Gemini 3 Flash)**: The "Workers". These are specialized LLM prompts and scripts that do the actual work.

---

## 2. Where to Look in Your project

### 📂 Backend (Your Service Layer)
*   **Where**: `backend/app/api/routes.py`
*   **Java Analogy**: These are your **REST Controllers**. 
*   **Concept**: FastAPI uses `async def` (asynchronous programming). Since you've done Spark, think of this as "non-blocking" data pipelines.
*   **Next Step**: Look at `backend/app/agents/`. These are your **Business Logic Classes** (Perception, Creative, Action).

### 📂 Frontend (Your View Layer)
*   **Where**: `frontend/app/page.js` and `frontend/components/Wizard.jsx`
*   **Java Analogy**: This is like a very dynamic **Thymeleaf or JSP** setup.
*   **Concept**: **State Management**. Notice `useState` in `Wizard.jsx`. This is how the UI remembers which step you are on.

---

## 3. Recommended Learning Path for You

### Phase 1: Python & FastAPI (1-2 Days)
*   **Focus**: Pydantic models (data validation/POJOs) and API routing.
*   **Resource**: [FastAPI Tutorial](https://fastapi.tiangolo.com/tutorial/)
*   **Exercise**: Add a new simple GET endpoint in `routes.py` and call it from your browser at `localhost:8000`.

### Phase 2: Agentic AI & Gemini (3-4 Days)
*   **Focus**: How to "prompt" an agent to behave like a worker.
*   **Concept**: **Perception vs Action**. 
    *   *Perception*: Analyzing the video (Gemini).
    *   *Action*: Uploading to YouTube (Data API).
*   **Exercise**: Open `backend/app/agents/perception.py` and think about how you would pass a Spark results DataFrame to it if you needed to analyze data.

### Phase 3: Next.js & UI Logic (3-4 Days)
*   **Focus**: React Components and "Hooks" (`useState`, `useEffect`).
*   **Exercise**: Try to change the colors of the Progress Bar in `Wizard.jsx`.

### Phase 4: The "Glue" (Ongoing)
*   **Focus**: OAuth2 (Authentication) and Background Tasks (Redis/Celery).
*   **Concept**: Handling long-running tasks. Just like a batch job in Spark, video processing takes time. We use background workers so the user doesn't wait on a frozen screen.

---

## Summary for the "Spark/Java Techie"
1.  **FastAPI** = High-performance Microservice (like Spring Boot).
2.  **Next.js** = Functional UI (like a more powerful version of Vaadin or React).
3.  **Agents** = Decoupled workers that use LLMs as their "logic engine" instead of hardcoded IF/ELSE loops.

**Target**: By the end of this project, you will not just be a "Java Dev", but an **AI Solutions Architect**.
