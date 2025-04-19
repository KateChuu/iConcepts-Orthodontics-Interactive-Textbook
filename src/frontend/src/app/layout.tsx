// src/app/layout.tsx
'use client';

import { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
                {/* 상단 고정 헤더 */}
                <Header
                    onToggleSidebar={toggleSidebar}
                    onToggleDarkMode={toggleDarkMode}
                    isSidebarOpen={sidebarOpen}
                    isDarkMode={darkMode}
                />

                {/* 전체 레이아웃 */}
                <div className="flex min-h-screen pt-8">
                    <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
                    <main className="flex-1 p-6 lg:pl-64 flex flex-col">
                        {children}
                        <Footer />
                    </main>
                </div>

            </body>
        </html>
    );
}
