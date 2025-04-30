'use client';

import Link from 'next/link';

export default function VideoTab() {
    const videos = [
        {
            title: 'H5P 1: Removable Orthodontic',
            description: 'Chapter 4',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745504228/blue_red_enuj04.png',
            href: '/chapters/chapter4/section4',
        },
        {
            title: 'H5P 2: Class II Elastics',
            description: 'Chapter 4',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745504228/Class_II_Elastics_cdjqnr.png',
            href: '/chapters/chapter4/section5',
        },
        {
            title: 'H5P 3: Tooth Wear',
            description: 'Chapter 4',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745504229/dental_chip_nejjmp.png',
            href: '/chapters/chapter4/section5',
        },
        {
            title: 'H5P 4: Frontal Anterior Occlusal',
            description: 'Chapter 4',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745504229/before_and_after_xy8lye.png',
            href: '/chapters/chapter4/section5',
        },
        {
            title: 'H5P 5: Impacted Dental Units',
            description: 'Chapter 4',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745504228/xray_s3e9ge.png',
            href: '/chapters/chapter4/section5',
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
