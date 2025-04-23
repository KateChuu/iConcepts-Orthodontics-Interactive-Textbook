'use client';

import Link from 'next/link';

export default function VideoTab() {
    const videos = [
        {
            title: 'Video 1: Tip Torque Biomechanics',
            description: 'Chapter 1',
            thumbnail: '/video1.jpg',
            href: '/chapters/chapter1/video1',
        },
        {
            title: 'Video 2: Anterior Open Bite Simulation',
            description: 'Chapter 1',
            thumbnail: '/video2.jpg',
            href: '/chapters/chapter1/video2',
        },
        {
            title: 'Video 3: Class II/2',
            description: 'Chapter 2',
            thumbnail: '/video3.jpg',
            href: '/chapters/chapter2/intro',
        },
        {
            title: 'Video 4: Depp Traumatic Bite',
            description: 'Chapter 2',
            thumbnail: '/video4.jpg',
            href: '/chapters/chapter2/section4',
        },
        {
            title: 'Video 5: Class II Div 1',
            description: 'Chapter 2',
            thumbnail: '/video5.jpg',
            href: '/chapters/chapter2/section4',
        },
        {
            title: 'Video 6: Itero Cross Bite',
            description: 'Chapter 3',
            thumbnail: '/video6.jpg',
            href: '/chapters/chapter3/section5',
        },
    ];

    return (
        <div className="p-4">

            <div className="flex flex-col gap-4">
                {videos.map((item, index) => (
                    <Link key={index} href={item.href}>
                        <div className="flex items-center p-4 min-h-[96px] bg-zinc-100 dark:bg-zinc-800 rounded-2xl shadow-sm hover:bg-gray-200 dark:hover:bg-zinc-700 transition">
                            <img
                                src={item.thumbnail}
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
