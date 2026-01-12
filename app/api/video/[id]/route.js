import { NextResponse } from 'next/server';
import { getUpload } from '@/lib/store';
import fs from 'fs';
import { stat } from 'fs/promises';

export async function GET(request, { params }) {
    const { id } = await params;
    const upload = getUpload(id);

    if (!upload || !upload.tempPath) {
        return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }

    try {
        const filePath = upload.tempPath;
        const stats = await stat(filePath);
        const fileSize = stats.size;

        // Simple full content delivery
        // For better video seeking, Range header support would be needed, 
        // but for a simple preview, this often works in modern browsers.

        const stream = fs.createReadStream(filePath);

        return new NextResponse(stream, {
            headers: {
                'Content-Type': 'video/mp4', // Assuming MP4 for simplicity, or detect mime type
                'Content-Length': fileSize.toString(),
            },
        });
    } catch (error) {
        console.error('Error serving video:', error);
        return NextResponse.json({ error: 'Error serving video' }, { status: 500 });
    }
}
