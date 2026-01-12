"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2, Upload, FileAudio, BarChart } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const stages = [
    { id: 'Uploading', icon: Upload, label: 'Uploading' },
    { id: 'Processing', icon: Loader2, label: 'Processing' },
    { id: 'Analyzing', icon: BarChart, label: 'Analyzing' },
    { id: 'Audio Creation', icon: FileAudio, label: 'Audio Creation' },
    { id: 'Completion', icon: CheckCircle, label: 'Completion' },
];

export function ProcessFlow({ currentStage, progress }) {
    const currentStageIndex = stages.findIndex(s => s.id === currentStage);

    return (
        <div className="w-full max-w-4xl mx-auto py-8">
            <div className="flex flex-col md:flex-row justify-between items-center relative gap-6 md:gap-0">
                {/* Progress Line Background */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 -z-10 hidden md:block" />

                {stages.map((stage, index) => {
                    const isActive = index === currentStageIndex;
                    const isCompleted = index < currentStageIndex;
                    const Icon = stage.icon;

                    return (
                        <motion.div
                            key={stage.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center gap-2 bg-gray-900 md:bg-transparent p-2 rounded-lg"
                        >
                            <div className={twMerge(
                                "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500",
                                isActive ? "border-cyan-400 bg-gray-800 text-cyan-400 shadow-lg shadow-cyan-500/50" :
                                    isCompleted ? "border-green-500 bg-green-500/10 text-green-500" :
                                        "border-gray-600 bg-gray-800 text-gray-500"
                            )}>
                                <Icon size={24} className={isActive ? "animate-pulse" : ""} />
                            </div>
                            <span className={clsx(
                                "text-sm font-medium",
                                isActive ? "text-cyan-400" : isCompleted ? "text-green-500" : "text-gray-500"
                            )}>
                                {stage.label}
                            </span>

                            {isActive && (
                                <div className="w-16 h-1 bg-gray-700 rounded-full mt-1 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-cyan-400"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                    />
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
