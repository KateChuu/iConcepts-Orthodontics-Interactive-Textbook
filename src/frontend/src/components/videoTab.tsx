'use client';

import Link from 'next/link';

export default function VideoTab() {
    const videos = [
        {
            title: 'Video 1: Prof G Anka Nippon 2025',
            description: 'Chapter 1',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745503312/TipTorqueBio_xsnidv.png',
            href: '/chapters/chapter1/section3',
        },
        {
            title: 'Video 2: Tip Torque Biomechanics',
            description: 'Chapter 1',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745503312/TipTorqueBio_xsnidv.png',
            href: '/chapters/chapter1/video1',
        },
        {
            title: 'Video 3: Anterior Open Bite Simulation',
            description: 'Chapter 1',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745503310/Anterior-video_abwjde.png',
            href: '/chapters/chapter1/video2',
        },
        {
            title: 'Video 4: Class II/2',
            description: 'Chapter 2',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745503311/class-ii-2_cau2lv.png',
            href: '/chapters/chapter2/intro',
        },
        {
            title: 'Video 5: Depp Traumatic Bite',
            description: 'Chapter 2',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745503310/DeepTraumaticBite_vgdczo.png',
            href: '/chapters/chapter2/section4',
        },
        {
            title: 'Video 6: Class II Div 1',
            description: 'Chapter 2',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745503310/ClassIIDiv1_ayrlbc.png',
            href: '/chapters/chapter2/section4',
        },
        {
            title: 'Video 7: Itero Cross Bite',
            description: 'Chapter 3',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745503311/IteroPosteriorCrossbite_l7ze6b.png',
            href: '/chapters/chapter3/section5',
        },
        {
            title: 'Video 8: Part 1DDS1 Growth & Development DrSND2023',
            description: 'Chapter 6',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1747189121/12be0ca1-13ff-4ef2-9824-8caf7ee559de.png',
            href: '/chapters/chapter6/video1',
        },
        {
            title: 'Video 9: Part 2 Growth and Development of Maxillary and Mandibular',
            description: 'Chapter 6',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1747189643/93afb754-3427-442d-9b60-61d94aa8b369.png',
            href: '/chapters/chapter6/video2',
        },
        {
            title: 'Video 10: Part 3 Growth and Development of Maxillary and Mandibular',
            description: 'Chapter 6',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1747189801/2fc509a5-067c-477a-8670-3c40b2db5f62.png',
            href: '/chapters/chapter6/video3',
        },
        {
            title: 'Video 11: EProf R Meithke Dec 2024 (1)',
            description: 'Chapter 7',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1747189934/79cf38fa-e1eb-4d55-9e5a-3ded163f6dd9.png',
            href: '/chapters/chapter7/video1',
        },
        {
            title: 'Video 12: EProf R Meithke Dec 2024 (2)',
            description: 'Chapter 7',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1747190070/76ff1fc2-9a92-4cc6-b385-a77677e9339e.png',
            href: '/chapters/chapter7/video2',
        },
        {
            title: 'Video 13: Fireside Discussion EPMiethke Dec 2024 2',
            description: 'Chapter 7',
            thumbnail: 'https://res.cloudinary.com/difs4tswt/image/upload/v1747190218/71b82c75-6451-49e6-88da-d7227f45191b.png',
            href: '/chapters/chapter7/video3',
        },
    ];

    return (
        <div className="p-4">

            <div className="flex flex-col gap-4">
                {videos.map((item, index) => (
                    <Link key={index} href={`${item.href}?tab=videos`}>
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
