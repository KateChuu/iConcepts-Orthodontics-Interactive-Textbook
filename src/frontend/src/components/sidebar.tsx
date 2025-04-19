'use client';
import Link from 'next/link';

type SidebarProps = {
    isOpen: boolean;
    onToggle: () => void;
};

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
    return (
        <aside
            className={`z-40 w-64 min-h-screen  bg-white text-zinc-900 dark:bg-zinc-800 dark:text-white
                transition-transform duration-300
                fixed top-0 left-0 transform pt-8
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:translate-x-0`}
        >
            <div className="p-5 border-b border-zinc-200 dark:border-zinc-700 text-center">
                <span className="text-lg font-semibold">Menu</span>
            </div>

            <nav className="flex flex-col gap-4 px-6 py-4 text-sm font-medium">
                <Link href="/" onClick={onToggle} className="hover:text-zinc-600">Home</Link>
                <Link href="/contact" onClick={onToggle} className="hover:text-zinc-600">Contact</Link>
                <button onClick={onToggle} className="text-red-700 hover:text-zinc-600 text-left">Sign out</button>
            </nav>
        </aside>

    );
}
