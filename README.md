# You-Tube-Igo

A premium, AI-powered YouTube video/audio creator platform built with Next.js.
This application simulates a 5-stage AI processing pipeline for uploading, analyzing, and transforming content.

## 🚀 Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
3.  **Open in browser:**
    Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

Here is a detailed breakdown of the codebase:

### `/app`
The core of the Next.js App Router.
-   **`page.js`**: The main Landing Page. Contains the logic for file uploads, polling the status, and rendering the UI.
-   **`layout.js`**: The root layout wrapper including global fonts and metadata.
-   **`globals.css`**: Global styles and Tailwind CSS directives.
-   **`/api`**: Backend API Routes.
    -   **`/upload/route.js`**: Handles file upload requests and initiates the simulated processing.
    -   **`/status/[id]/route.js`**: Returns the current processing stage (Uploading -> Completion) for a given ID.

### `/components`
Reusable React UI components.
-   **`ProcessFlow.js`**: Visualizes the 5-stage pipeline with icons and progress bars.
-   **`AdSpace.js`**: Placeholder component for Google Ads (future monetization).
-   **`InfoModal.js`**: A modal displaying owner details (Karri Prakash).
-   **`ThemeToggle.js`**: A toggle switch for Dark/Light mode.

### `/lib`
Helper functions and logic.
-   **`store.js`**: An in-memory storage simulation. In a real app, this would be replaced by database queries. It stores the state of uploads.
-   **`cron.js`**: (Concept) Logic for cleaning up files after 15 minutes of inactivity.

### `/database`
Database related files.
-   **`schema.sql`**: SQL scripts to create the `users`, `uploads`, and `processing_jobs` tables.

### `/docs`
Detailed documentation for deployment and testing.
-   **`post_development_testing.md`**: Checklist for verifying the app's functionality.
-   **`db_connection_cloud_details.md`**: Guide on connecting to Cloud SQL and standardizing environment variables.
-   **`deployment_domain_guide.md`**: Step-by-step instructions for deploying to Vercel and purchasing a domain.

### `/public`
Static assets.
-   **`logo.png`**: The project logo.

---

## 🛠 Tech Stack
-   **Framework**: Next.js 16 (App Router)
-   **Styling**: Tailwind CSS v4
-   **Animations**: Framer Motion
-   **Icons**: Lucide React
