"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, FileVideo, Download, Minimize2, Maximize2 } from 'lucide-react';
import { ProcessFlow } from '@/components/ProcessFlow';
import { AdSpace } from '@/components/AdSpace';

export default function UploadPage() {
    const [uploadId, setUploadId] = useState(null);
    const [status, setStatus] = useState(null);
    const [file, setFile] = useState(null);
    const [isVideoMinimized, setIsVideoMinimized] = useState(false);

    useEffect(() => {
        if (!uploadId) return;
        if (status?.stage === 'Completion') return;

        const interval = setInterval(async () => {
            try {
                const res = await fetch(`/api/status/${uploadId}`);
                if (res.ok) {
                    const data = await res.json();
                    setStatus(data);
                }
            } catch (e) {
                console.error("Polling error", e);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [uploadId, status?.stage]);

    const handleUpload = async (e) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) return;

        setFile(selectedFile);
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            if (data.id) {
                setUploadId(data.id);
                setStatus({ stage: 'Uploading', progress: 0 });
            }
        } catch (err) {
            console.error(err);
            alert('Upload failed');
        }
    };

    return (
        <div className="flex flex-col items-center w-full">
            {/* Ads Top */}
            <AdSpace className="w-full max-w-4xl h-24 mb-8" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h1 className="text-3xl font-bold text-white mb-2">Creative Studio</h1>
                <p className="text-gray-400">Upload your content and watch the AI magic happen.</p>
            </motion.div>

            {/* Upload Area */}
            <div className="w-full max-w-4xl">
                {!uploadId ? (
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="border-3 border-dashed border-gray-700 bg-gray-900/50 hover:border-cyan-400 hover:bg-gray-800 rounded-3xl p-12 text-center cursor-pointer transition-all"
                    >
                        <label className="cursor-pointer flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                                <UploadCloud size={40} className="text-white" />
                            </div>
                            <div>
                                <span className="text-xl font-semibold block mb-2 text-white">Click to browse</span>
                                <span className="text-sm text-gray-400">Supports MP4, MOV, MP3 (Max 100MB)</span>
                            </div>
                            <input type="file" className="hidden" onChange={handleUpload} accept="video/*,audio/*" />
                        </label>
                    </motion.div>
                ) : (
                    <div className="bg-gray-900/30 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
                        <div className="flex flex-col gap-6 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gray-800 rounded-lg">
                                    <FileVideo size={24} className="text-purple-400" />
                                </div>
                                <div>
                                    <p className="font-medium text-lg text-white">{file?.name}</p>
                                    <p className="text-sm text-gray-500">
                                        {status?.stage === 'Completion' ? 'Ready to download' : 'Processing in progress...'}
                                    </p>
                                </div>
                                {status?.stage === 'Completion' && (
                                    <button className="ml-auto flex items-center gap-2 bg-green-500 text-black px-6 py-2 rounded-full font-bold hover:bg-green-400 transition-colors">
                                        <Download size={18} /> Download
                                    </button>
                                )}
                            </div>

                            {/* Video Preview */}
                            {/* Video Preview Section */}
                            <div className={`transition-all duration-500 ease-in-out border border-gray-700/50 rounded-xl overflow-hidden backdrop-blur-md ${isVideoMinimized ? 'bg-gray-900/40' : 'bg-black/40 shadow-2xl'}`}>
                                {/* Header */}
                                <div
                                    className="flex items-center justify-between px-4 py-3 bg-gray-800/40 cursor-pointer hover:bg-gray-800/60 transition-colors"
                                    onClick={() => setIsVideoMinimized(!isVideoMinimized)}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${status?.stage === 'Completion' ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`} />
                                        <span className="font-medium text-gray-300 text-sm">Live Preview</span>
                                    </div>
                                    <button
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {isVideoMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                                    </button>
                                </div>

                                {/* Video Content */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: isVideoMinimized ? 0 : 'auto',
                                        opacity: isVideoMinimized ? 0 : 1
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="overflow-hidden"
                                >
                                    <div className="aspect-video w-full bg-black relative group">
                                        <video
                                            src={`/api/video/${uploadId}`}
                                            controls
                                            autoPlay
                                            muted
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <ProcessFlow currentStage={status?.stage} progress={status?.progress} />
                    </div>
                )}
            </div>

            {/* Ads Bottom */}
            <AdSpace className="w-full max-w-4xl h-32 mt-12" />
        </div>
    );
}
