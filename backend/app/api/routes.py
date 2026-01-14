from fastapi import APIRouter, HTTPException, BackgroundTasks
from pydantic import BaseModel
from typing import Optional, Dict
import uuid

router = APIRouter()

# Data Models
class WorkflowStartRequest(BaseModel):
    video_url: str
    preferences: Optional[Dict] = {}

class MetadataReview(BaseModel):
    title: str
    description: str
    tags: str
    thumbnail_url: str

class WorkflowApproveRequest(BaseModel):
    approved_metadata: MetadataReview
    proceed_to_upload: bool

# In-memory mock storage for now
jobs = {}

@router.post("/workflow/start")
async def start_workflow(request: WorkflowStartRequest, background_tasks: BackgroundTasks):
    job_id = str(uuid.uuid4())
    jobs[job_id] = {
        "status": "processing",
        "progress": 0,
        "steps": {
            "perception": "pending",
            "creative": "pending",
            "upload": "pending"
        }
    }
    # TODO: Trigger Perception Agent in background
    return {"job_id": job_id, "status": "processing"}

@router.get("/workflow/{job_id}/status")
async def get_workflow_status(job_id: str):
    if job_id not in jobs:
        raise HTTPException(status_code=404, detail="Job not found")
    return jobs[job_id]

@router.get("/workflow/{job_id}/metadata")
async def get_workflow_metadata(job_id: str):
    if job_id not in jobs:
        raise HTTPException(status_code=404, detail="Job not found")
    
    # Mock data for now until agents are connected
    if jobs[job_id]["status"] == "processing":
         return {"message": " Metadata generation in progress"}

    return {
        "title": "Generated Title",
        "description": "Generated Description",
        "tags": "tag1, tag2",
        "thumbnail_candidates": ["http://example.com/thumb1.jpg"]
    }

@router.post("/workflow/{job_id}/approve")
async def approve_workflow(job_id: str, request: WorkflowApproveRequest):
    if job_id not in jobs:
        raise HTTPException(status_code=404, detail="Job not found")
    
    jobs[job_id]["status"] = "uploading"
    # TODO: Trigger Action Agent to upload
    return {"status": "upload_started"}

# Auth Routes (Placeholders)
@router.get("/auth/youtube/login")
async def youtube_login():
    return {"auth_url": "https://accounts.google.com/o/oauth2/auth..."}

@router.get("/auth/youtube/callback")
async def youtube_callback(code: str):
    return {"message": "Authenticated successfully"}
