"use client";
import React from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle({ isDark, toggle }) {
    return (
        <button
            onClick={toggle}
            className="relative w-16 h-8 rounded-full bg-gray-700 p-1 transition-colors hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Toggle Theme"
        >
            <div
                className={`absolute top-1 transform transition-transform duration-300 w-6 h-6 rounded-full flex items-center justify-center shadow-md ${isDark ? 'translate-x-8 bg-gray-900 text-cyan-400' : 'translate-x-0 bg-white text-yellow-500'
                    }`}
            >
                {isDark ? <Moon size={14} /> : <Sun size={14} />}
            </div>
        </button>
    );
}
