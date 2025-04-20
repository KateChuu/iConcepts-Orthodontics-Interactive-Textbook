'use client';

import Link from 'next/link';

export default function ChapterTab() {
    const chapters = [
        {
            title: 'Preface',
            description: 'Before everything begins...',
            image: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114784/butterfly-world-map-mark-ashkenazi-21_y7gc6j.jpg',
            href: '/chapters/preface',
        },
        {
            title: 'Chapter 1',
            description: 'Introduction Orthodontics NOW!',
            image: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114795/GrassRollerHD-30_eupxdh.jpg',
            href: '/chapters/chapter1',
        },
        {
            title: 'Chapter 2',
            description: 'Class I Malocclusion',
            image: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114814/IMG_1790-179_alhphp.jpg',
            href: '/chapters/chapter2',
        },
    ];
    
    

    return (
        <div className="p-4">

            <div className="flex flex-col gap-4">
            {chapters.map((item, index) => (
                <Link key={index} href={item.href}>
                    <div
                        className="flex items-center p-4 min-h-[96px] bg-zinc-100 dark:bg-zinc-800 rounded-2xl shadow-sm hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-16 h-16 rounded-xl object-cover mr-4"
                        />
                        <div className="flex-1">
                            <p className="text-base font-semibold text-zinc-900 dark:text-white">
                                {item.title}
                            </p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                {item.description}
                            </p>
                        </div>
                        <span className="text-zinc-400 dark:text-zinc-300 text-2xl ml-2">
                            &gt;
                        </span>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    );
}
