"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, ArrowRight } from 'lucide-react';
import { AdSpace } from '@/components/AdSpace';
import { InfoModal } from '@/components/InfoModal';
import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';
import { Wizard } from '@/components/Wizard';

import Image from 'next/image';

export default function Home() {
    const [isDark, setIsDark] = useState(true);
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    // We keep the generic layout wrapper here or we could move Navbar to Layout.
    // For simplicity, keeping Nav here but the functionality is reduced.

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'}`}>
            {/* Navigation */}
            <nav className={`p-6 flex justify-between items-center border-b ${isDark ? 'border-gray-800' : 'border-gray-300'}`}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 relative">
                        <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" priority />
                    </div>
                    <h1 className="text-xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        YOUTUBE-AIGO
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
                    <button
                        onClick={() => setIsInfoOpen(true)}
                        className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`}
                    >
                        <Info size={24} />
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12 flex flex-col items-center">

                {/* Ads Top */}
                <AdSpace className="w-full max-w-4xl h-24 mb-12" />

                {/* Hero */}
                {/* Hero & Wizard */}
                <div className="flex flex-col items-center w-full mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12 max-w-3xl"
                    >
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Create Audio <br />
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent inline-block pb-1">Like Never Before</span>
                        </h2>
                        <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            The ultimate AI-powered platform. Upload your content below to start the agentic workflow.
                        </p>
                    </motion.div>

                    <Wizard />
                </div>


                {/* Feature Grid / More Content for Intro */}
                <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mt-8">
                    {[
                        { title: 'Smart Analysis', desc: 'AI scans your video for optimal audio breakpoints.' },
                        { title: 'High Fidelity', desc: 'Crystal clear audio output compatible with all platforms.' },
                        { title: 'Lightning Fast', desc: 'Process 100MB+ files in seconds using our cloud clusters.' }
                    ].map((feature, i) => (
                        <div key={i} className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} text-center`}>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-500">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Ads Bottom */}
                <AdSpace className="w-full max-w-4xl h-32 mt-20" />

            </main>

            {/* Info Modal */}
            <InfoModal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />
        </div>
    );
}
