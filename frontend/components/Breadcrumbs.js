"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { clsx } from 'clsx';

export function Breadcrumbs() {
    const pathname = usePathname();

    // Simple map for readable names. In a larger app, generate this dynamically.
    const pathNames = {
        '/': 'Home',
        '/upload': 'Upload Studio',
        '/pricing': 'Pricing', // Future proofing
        '/about': 'About'
    };

    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs = [
        { href: '/', label: 'Home', icon: Home },
        ...paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join('/')}`;
            return {
                href,
                label: pathNames[href] || path.charAt(0).toUpperCase() + path.slice(1),
                icon: null
            };
        })
    ];

    if (pathname === '/') return null; // Don't show on home page if desired, or keep it. User said "Include breadcrum to have multiple options"

    return (
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8 w-full max-w-6xl px-4 mx-auto">
            {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                const Icon = crumb.icon;

                return (
                    <React.Fragment key={crumb.href}>
                        {index > 0 && <ChevronRight size={16} className="text-gray-600" />}
                        <Link
                            href={crumb.href}
                            className={clsx(
                                "flex items-center gap-1 transition-colors hover:text-cyan-400",
                                isLast ? "text-cyan-400 font-semibold pointer-events-none" : "text-gray-400"
                            )}
                        >
                            {Icon && <Icon size={14} />}
                            <span>{crumb.label}</span>
                        </Link>
                    </React.Fragment>
                );
            })}
        </nav>
    );
}
