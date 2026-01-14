# Post-Development Testing Guide

## 1. Local Verification
- Run `npm run dev` to start the development server.
- Navigate to `http://localhost:3000`.
- **Upload Test**:
    1. Select a dummy video file.
    2. Verify the 5-stage progress bar updates (Uploading -> Processing -> Analyzing -> Audio Creation -> Completion).
    3. Ensure the process completes within realistic timing (simulated).
- **Idle Timeout Test**:
    1. Upload a file but do not download it.
    2. Wait 15 minutes.
    3. Check console logs or database/file system to ensure the file was deleted/cleaned up.

## 2. API Testing
- use Postman or curl to test endpoints:
    - POST `/api/upload`
    - GET `/api/status/[id]`

## 3. UI/UX Checks
- **Theme**: Toggle the light/dark mode dongle. Ensure text contrast is accessible.
- **Responsiveness**: Resize browser to mobile view. Check layout of the upload stages.
- **Info Tab**: Verify owner details "Karri Prakash" are displayed correctly.
