'use client';

import Link from 'next/link';

export default function VideoTab() {
    const videos = [
        {
            title: 'Video 1: Tip Torque Biomechanics',
            description: 'Chapter 1',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745503312/TipTorqueBio_xsnidv.png',
            href: '/chapters/chapter1/video1',
        },
        {
            title: 'Video 2: Anterior Open Bite Simulation',
            description: 'Chapter 1',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745503310/Anterior-video_abwjde.png',
            href: '/chapters/chapter1/video2',
        },
        {
            title: 'Video 3: Class II/2',
            description: 'Chapter 2',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745503311/class-ii-2_cau2lv.png',
            href: '/chapters/chapter2/intro',
        },
        {
            title: 'Video 4: Deep Traumatic Bite',
            description: 'Chapter 2',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745503310/DeepTraumaticBite_vgdczo.png',
            href: '/chapters/chapter2/section4',
        },
        {
            title: 'Video 5: Class II Div 1',
            description: 'Chapter 2',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745503310/ClassIIDiv1_ayrlbc.png',
            href: '/chapters/chapter2/section4',
        },
        {
            title: 'Video 6: Itero Cross Bite',
            description: 'Chapter 3',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745503311/IteroPosteriorCrossbite_l7ze6b.png',
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
