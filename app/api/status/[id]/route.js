import { NextResponse } from 'next/server';
import { getUpload } from '@/lib/store';

export async function GET(request, { params }) {
    // Await the params object before destructuring
    const { id } = await params;

    const upload = getUpload(id);

    if (!upload) {
        return NextResponse.json({ error: 'Upload not found' }, { status: 404 });
    }

    return NextResponse.json(upload);
}
