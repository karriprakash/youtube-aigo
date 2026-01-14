"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileAudio, FileVideo, ArrowRight, CheckCircle, Info } from 'lucide-react';

export const Wizard = () => {
    const [step, setStep] = useState(1);
    const [mediaType, setMediaType] = useState(null); // 'video' | 'audio'
    const [file, setFile] = useState(null);
    const [prompt, setPrompt] = useState('');

    const handleNext = () => {
        if (step === 1 && mediaType) setStep(2);
        else if (step === 2 && file && prompt) setStep(3);
        // Submit logic would go here
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const variants = {
        enter: { opacity: 0, x: 20 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    return (
        <div className="w-full max-w-2xl bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-600" />

            {/* Progress Indicator */}
            <div className="flex justify-between mb-8 px-4">
                {[1, 2, 3].map((s) => (
                    <div key={s} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white' : 'bg-gray-700 text-gray-400'
                            }`}>
                            {step > s ? <CheckCircle size={16} /> : s}
                        </div>
                        <span className="text-xs mt-2 text-gray-400">
                            {s === 1 ? 'Type' : s === 2 ? 'Upload' : 'Review'}
                        </span>
                    </div>
                ))}
            </div>

            <div className="min-h-[300px]">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-6"
                        >
                            <h3 className="text-2xl font-bold text-center text-white">Choose your Input</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setMediaType('video')}
                                    className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 group ${mediaType === 'video' ? 'border-cyan-500 bg-cyan-500/10' : 'border-gray-700 hover:border-gray-500 hover:bg-white/5'
                                        }`}
                                >
                                    <FileVideo className={`w-12 h-12 ${mediaType === 'video' ? 'text-cyan-400' : 'text-gray-500 group-hover:text-gray-300'}`} />
                                    <span className="font-semibold text-white">Video</span>
                                </button>

                                <button
                                    onClick={() => setMediaType('audio')}
                                    className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 group ${mediaType === 'audio' ? 'border-purple-500 bg-purple-500/10' : 'border-gray-700 hover:border-gray-500 hover:bg-white/5'
                                        }`}
                                >
                                    <FileAudio className={`w-12 h-12 ${mediaType === 'audio' ? 'text-purple-400' : 'text-gray-500 group-hover:text-gray-300'}`} />
                                    <span className="font-semibold text-white">Audio</span>
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-6"
                        >
                            <h3 className="text-2xl font-bold text-center text-white">Upload & Context</h3>

                            {/* File Upload Area */}
                            <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-cyan-400 transition-colors cursor-pointer bg-white/5 relative">
                                <input
                                    type="file"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    accept={mediaType === 'video' ? "video/*" : "audio/*"}
                                />
                                <Upload className="w-10 h-10 text-gray-400 mb-4" />
                                {file ? (
                                    <p className="text-cyan-400 font-medium truncate max-w-xs">{file.name}</p>
                                ) : (
                                    <p className="text-gray-400">Drag & drop or Click to Upload {mediaType}</p>
                                )}
                            </div>

                            {/* Prompt Input */}
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 flex items-center gap-2">
                                    <Info size={14} />
                                    instructions for the AI
                                </label>
                                <textarea
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder={`E.g., "Focus on the ${mediaType === 'video' ? 'visuals of the landscape' : 'dialogue clarity'}..."`}
                                    className="w-full bg-black/20 border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none h-24 resize-none placeholder:text-gray-600"
                                />
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center text-center gap-6"
                        >
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle className="w-10 h-10 text-green-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-white">Ready to Process</h3>
                            <div className="bg-white/5 p-6 rounded-xl w-full text-left space-y-3">
                                <div className="flex justify-between border-b border-gray-700 pb-2">
                                    <span className="text-gray-400">Type</span>
                                    <span className="text-white capitalize">{mediaType}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-700 pb-2">
                                    <span className="text-gray-400">File</span>
                                    <span className="text-white truncate max-w-[200px]">{file?.name}</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 block mb-1">Prompt</span>
                                    <p className="text-sm text-gray-300 italic">"{prompt}"</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
                <button
                    onClick={handleBack}
                    disabled={step === 1}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${step === 1 ? 'opacity-0 cursor-default' : 'text-gray-400 hover:text-white'}`}
                >
                    Back
                </button>

                <button
                    onClick={handleNext}
                    disabled={(step === 1 && !mediaType) || (step === 2 && (!file || !prompt))}
                    className={`px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${((step === 1 && !mediaType) || (step === 2 && (!file || !prompt)))
                            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                            : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                        }`}
                >
                    {step === 3 ? 'Start Magic' : 'Next'}
                    {step !== 3 && <ArrowRight size={18} />}
                </button>
            </div>
        </div>
    );
};
