'use client';

import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
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

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body className="w-full min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                    <SignedIn>
                        <Header
                            onToggleSidebar={toggleSidebar}
                            onToggleDarkMode={toggleDarkMode}
                            isSidebarOpen={sidebarOpen}
                            isDarkMode={darkMode}
                        />
                        <div className="flex min-h-screen pt-8">
                            <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
                            <main className="flex-1 p-6 lg:pl-64 flex flex-col">
                                {children}
                                <Footer />
                            </main>
                        </div>
                    </SignedIn>

                    <SignedOut>
                        <RedirectToSignIn />
                    </SignedOut>
                </body>
            </html>
        </ClerkProvider>
    );
}
