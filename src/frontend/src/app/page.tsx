'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ChapterTab from '../components/chapterTab';
import VideoTab from '../components/videoTab';
import QuizTab from '../components/quizTab';

// List of slides for the horizontal scrolling carousel
const slides = [
    {
        title: 'Preface',
        image: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114784/butterfly-world-map-mark-ashkenazi-21_y7gc6j.jpg',
    },
    {
        title: 'Chapter 1',
        image: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114795/GrassRollerHD-30_eupxdh.jpg',
    },
    {
        title: 'Chapter 2',
        image: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114814/IMG_1790-179_alhphp.jpg',
    },
    {
        title: 'Chapter 3',
        image: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114847/IMG_8015-94_o7tbmn.jpg',
    },
    {
        title: 'Chapter 4',
        image: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114944/chapter4_frontpage_1_joun81.jpg',
    },
    {
        title: 'Chapter 5',
        image: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114944/paint_zot9yc.jpg',
    },
];

export default function Home() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Read the 'tab' query parameter from the URL or default to 'chapters'
    const initialTab = (searchParams.get('tab') as 'chapters' | 'videos' | 'quizzes') || 'chapters';
    const [activeTab, setActiveTab] = useState<'chapters' | 'videos' | 'quizzes'>(initialTab);

    // Update the active tab state when the query param changes
    useEffect(() => {
        setActiveTab(initialTab);
    }, [initialTab]);

    // Handle tab changes and update the URL
    const changeTab = (tab: 'chapters' | 'videos' | 'quizzes') => {
        router.push(`/?tab=${tab}`);
        setActiveTab(tab);
    };

    // Render the appropriate tab content
    const renderTabContent = () => {
        switch (activeTab) {
            case 'chapters': return <ChapterTab />;
            case 'videos': return <VideoTab />;
            case 'quizzes': return <QuizTab />;
        }
    };

    return (
        <div className="flex flex-col items-center">
            {/* Image Carousel Section (Header) */}
            <div className="relative w-full overflow-hidden mb-6 px-4">
                <div className="flex gap-4 animate-slide whitespace-nowrap">
                    {/* Duplicate slides for seamless looping effect */}
                    {slides.concat(slides).map((slide, i) => (
                        <img
                            key={i}
                            src={slide.image}
                            alt={slide.title}
                            className="w-[240px] md:w-[280px] lg:w-[300px] aspect-[16/9] flex-shrink-0 rounded-xl object-cover opacity-60"
                        />
                    ))}
                </div>

                {/* Centered fixed title over the carousel */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h2
                        className="text-black text-5xl font-extrabold text-center tracking-wide
                                   drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]
                                   dark:text-white dark:drop-shadow-[2px_2px_2px_rgba(255,255,255,0.2)]"
                    >
                        iConcepts in Orthodontics
                    </h2>
                </div>
            </div>

            {/* Tab Navigation and Content Section */}
            <div className="w-full px-4 mb-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* Tab Buttons */}
                    <div className="flex rounded-t-xl overflow-hidden">
                        {['chapters', 'videos', 'quizzes'].map((tab) => {
                            const isActive = activeTab === tab;

                            return (
                                <button
                                    key={tab}
                                    onClick={() => changeTab(tab as 'chapters' | 'videos' | 'quizzes')}
                                    className={`
                                        flex-1 py-3 text-center text-sm font-semibold transition-colors
                                        border border-zinc-300 dark:border-zinc-700
                                        rounded-t-xl
                                        ${isActive
                                            ? 'bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 border-b-0'
                                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'}
                                    `}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Content Area */}
                    <div className="w-full bg-white dark:bg-zinc-900 rounded-b-xl p-6 border border-t-0 border-zinc-300 dark:border-zinc-700">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}
