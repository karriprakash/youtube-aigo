import { NextResponse } from 'next/server';
import { saveUpload, updateUploadStage } from '@/lib/store';
import { tmpdir } from 'os';
import path from 'path';
import fs from 'fs/promises';

export async function POST(request) {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const id = Math.random().toString(36).substring(7);
    const startTime = Date.now();

    // Initial State: Uploading
    // Create unique filename
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const tempFilePath = path.join(tmpdir(), `upload-${id}-${file.name}`);

    await fs.writeFile(tempFilePath, buffer);

    saveUpload(id, {
        id,
        filename: file.name,
        stage: 'Uploading',
        progress: 0,
        tempPath: tempFilePath, // Save the path
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    // Simulator for the 5 stages
    simulateProcessing(id);

    return NextResponse.json({ id, message: 'Upload started' });
}

async function simulateProcessing(id) {
    // Stage 1: Uploading (Simulated delay)
    updateUploadStage(id, 'Uploading', 50);
    await delay(2000);
    updateUploadStage(id, 'Uploading', 100);

    // Stage 2: Processing
    updateUploadStage(id, 'Processing', 0);
    await delay(3000);
    updateUploadStage(id, 'Processing', 100);

    // Stage 3: Analyzing
    updateUploadStage(id, 'Analyzing', 0);
    await delay(4000); // AI Analysis simulation
    updateUploadStage(id, 'Analyzing', 100);

    // Stage 4: Audio Creation
    updateUploadStage(id, 'Audio Creation', 0);
    await delay(3000);
    updateUploadStage(id, 'Audio Creation', 100);

    // Stage 5: Completion
    updateUploadStage(id, 'Completion', 100);
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
