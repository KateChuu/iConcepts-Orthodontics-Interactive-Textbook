import Link from 'next/link';

type HeaderProps = {
    onToggleSidebar: () => void;
    onToggleDarkMode: () => void;
    isSidebarOpen: boolean;
    isDarkMode: boolean;
};

export default function Header({ onToggleSidebar, onToggleDarkMode, isSidebarOpen, isDarkMode }: HeaderProps) {
    return (
        <header className="w-full flex justify-between items-center px-4 py-2 
            bg-white/90 dark:bg-zinc-800/90 
            backdrop-blur 
            fixed top-0 left-0 z-50">
            
            <button onClick={onToggleSidebar} className="text-zinc-900 dark:text-white lg:hidden text-xl">
                {isSidebarOpen ? '✕' : '☰'}
            </button>

            <Link href="/" className="font-semibold text-zinc-900 dark:text-white text-lg">
                iConcepts
            </Link>

            <button onClick={onToggleDarkMode} className="text-xl text-zinc-900 dark:text-white">
                {isDarkMode ? '☀️' : '🌙'}
            </button>
        </header>
    );
}
