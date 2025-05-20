'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ChapterTab from '../components/chapterTab';
import VideoTab from '../components/videoTab';
import QuizTab from '../components/quizTab';

import { Carousel } from 'flowbite';
import type { CarouselItem, CarouselOptions, CarouselInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

export default function ChapterCarousel() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Get the initial tab from the URL search params or default to 'chapters'
    // If the tab is not valid, default to 'chapters'
    const tabParam = searchParams.get('tab');

    const validTabs = ['chapters', 'videos', 'quizzes'] as const;
    type TabType = typeof validTabs[number];

    const initialTab: TabType = validTabs.includes(tabParam as TabType)
        ? (tabParam as TabType)
        : 'chapters';

    const [activeTab, setActiveTab] = useState<TabType>(initialTab);

    useEffect(() => {
        setActiveTab(initialTab);
    }, [initialTab]);

    const changeTab = (tab: 'chapters' | 'videos' | 'quizzes') => {
        router.push(`/?tab=${tab}`);
        setActiveTab(tab);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'chapters': return <ChapterTab />;
            case 'videos': return <VideoTab />;
            case 'quizzes': return <QuizTab />;
        }
    };

    useEffect(() => {
        const el = document.getElementById('carousel-example');
        if (!el) return;

        const items: CarouselItem[] = Array.from(
            document.querySelectorAll('[data-carousel-item]')
        ).map((el, idx) => ({
            position: idx,
            el: el as HTMLElement,
        }));

        const options: CarouselOptions = {
            defaultPosition: 0,
            interval: 3000,
            indicators: {
                activeClasses: 'bg-blue-600',
                inactiveClasses: 'bg-gray-300 hover:bg-gray-400',
                items: Array.from(document.querySelectorAll('[data-carousel-indicator]')).map((el, idx) => ({
                    position: idx,
                    el: el as HTMLElement,
                })),
            },
            onNext: () => console.log('➡️ next'),
            onPrev: () => console.log('⬅️ prev'),
            onChange: () => console.log('🔄 changed'),
        };

        const instanceOptions: InstanceOptions = {
            id: 'carousel-example',
            override: true,
        };

        const carousel: CarouselInterface = new Carousel(el, items, options, instanceOptions);
        carousel.cycle();

        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');
        prevBtn?.addEventListener('click', () => carousel.prev());
        nextBtn?.addEventListener('click', () => carousel.next());
    }, []);

    const images = [
        'butterfly-world-map-mark-ashkenazi-21_y7gc6j',
        'GrassRollerHD-30_eupxdh',
        'IMG_1790-179_alhphp',
        'IMG_8015-94_o7tbmn',
        'chapter4_frontpage_1_joun81',
        'paint_zot9yc',
        'Ch6_thumbnail_xudlkn',
        'Ch7_thumbnail_puvkqa',
    ];

    return (
        <div className="flex flex-col items-center">
            {/* Carousel */}
            <div id="carousel-example" className="relative w-full max-w-5xl mx-auto px-4 md:px-8 py-6" data-carousel="slide">
                {/* Slide images */}
                <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
                    {images.map((id, idx) => (
                        <div
                            key={idx}
                            className="hidden duration-700 ease-in-out"
                            data-carousel-item={idx === 0 ? 'active' : ''}
                            id={`carousel-item-${idx}`}
                        >
                            <img
                                src={`https://res.cloudinary.com/difs4tswt/image/upload/v1745114784/${id}.jpg`}
                                alt={`Slide ${idx + 1}`}
                                className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                    ))}

                </div>

                {/* Indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            data-carousel-indicator
                            aria-label={`Slide ${idx + 1}`}
                            className="w-3 h-3 rounded-full"
                        />
                    ))}
                </div>

                {/* Button */}
                <button id="carousel-prev" type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/60">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </span>
                </button>
                <button id="carousel-next" type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/60">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </span>
                </button>

                {/* Centered Title */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40 px-4">
                    <h2
                        className="bg-white/80 text-black dark:bg-black/70 dark:text-white text-3xl md:text-4xl font-extrabold text-center px-3 py-2 rounded shadow-md max-w-full"
                    >
                        iConcepts in Orthodontics
                    </h2>
                </div>
            </div>

            {/* Tabs and Content Area */}
            <div className="w-full px-4 mb-8">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex rounded-t-xl overflow-hidden">
                        {['chapters', 'videos', 'quizzes'].map((tab) => {
                            const isActive = activeTab === tab;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => changeTab(tab as 'chapters' | 'videos' | 'quizzes')}
                                    className={`flex-1 py-3 text-center text-sm font-semibold transition-colors border border-zinc-300 dark:border-zinc-700 rounded-t-xl ${
                                        isActive
                                            ? 'bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 border-b-0'
                                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
                                    }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            );
                        })}
                    </div>

                    <div className="w-full bg-white dark:bg-zinc-900 rounded-b-xl p-6 border border-t-0 border-zinc-300 dark:border-zinc-700">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}
