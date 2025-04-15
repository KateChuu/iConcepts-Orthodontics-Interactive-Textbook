// src/app/layout.tsx
'use client';

import { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) 
{
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleSidebar = () => setSidebarOpen((prev) => !prev);
    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    // 다크모드 클래스 <html>에 적용
    useEffect(() => {
        if (darkMode) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <html lang="en" suppressHydrationWarning>
            <body className="w-full min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                <div className="flex min-h-screen">
                {/* 햄버거 버튼 */}
                <button
                    onClick={toggleSidebar}
                    className="fixed top-4 left-4 z-50 p-2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-md rounded-md lg:hidden"
                >
                    {sidebarOpen ? '✕' : '☰'}
                </button>

                {/* 다크모드 버튼 */}
                <button
                    onClick={toggleDarkMode}
                    className="fixed top-4 right-4 z-50 p-2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-md rounded-md"
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>

                {/* 사이드바 */}
                <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

                {/* 콘텐츠 영역 */}
                <main className="flex-1 p-6">{children}</main>
                </div>
            </body>
        </html>
    );
}
