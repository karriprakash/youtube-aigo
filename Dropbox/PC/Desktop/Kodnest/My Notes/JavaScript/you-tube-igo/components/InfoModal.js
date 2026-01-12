"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info } from 'lucide-react';

export function InfoModal({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-gray-900 border border-gray-700 p-6 rounded-2xl max-w-md w-full relative shadow-2xl shadow-purple-500/20"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 text-purple-400">
                                <Info size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Details</h2>
                            <div className="space-y-4 text-gray-300 w-full">
                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <p className="text-sm text-gray-500 uppercase">Name</p>
                                    <p className="font-semibold text-white">Karri Prakash</p>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <p className="text-sm text-gray-500 uppercase">Ownership</p>
                                    <p className="font-semibold text-white">Whole Owner</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
