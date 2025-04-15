'use client';
import { useState } from 'react';
import Sidebar from '../components/sidebar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen((prev) => !prev);

    return (
        <html lang="en">
            <body className="min-h-screen bg-zinc-100 text-zinc-900">
                <div className="flex min-h-screen">
                    {/* Hamburger toggle for Sidebar */}
                    <button
                        onClick={toggleSidebar}
                        className="fixed top-4 left-4 z-50 p-2 bg-white text-zinc-900 shadow-md rounded-md lg:hidden"
                    >
                        {sidebarOpen ? '✕' : '☰'}
                    </button>

                    {/* Sidebar */}
                    <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

                    {/* Main contents */}
                    <main className="flex-1 p-6">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
