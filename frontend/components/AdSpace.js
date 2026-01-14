import React from 'react';

export function AdSpace({ className }) {
    return (
        <div className={`border-2 border-dashed border-gray-700/30 bg-gray-800/20 rounded-lg p-4 flex items-center justify-center text-gray-600 text-xs tracking-widest uppercase ${className}`}>
            AD SPACE - Google Ads Placeholder
        </div>
    );
}
