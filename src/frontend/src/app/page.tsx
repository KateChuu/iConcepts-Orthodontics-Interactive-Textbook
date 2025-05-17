'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ChapterTab from '../components/chapterTab';
import VideoTab from '../components/videoTab';
import QuizTab from '../components/quizTab';

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

    const initialTab = (searchParams.get('tab') as 'chapters' | 'videos' | 'quizzes') || 'chapters';
    const [activeTab, setActiveTab] = useState<'chapters' | 'videos' | 'quizzes'>(initialTab);

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

    return (
        <div className="flex flex-col items-center">
            {/* Slide */}
            <div className="relative w-full overflow-hidden mb-6 
                [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">

                <div className="flex animate-infinite-scroll w-[200%]">
                    <div className="flex w-1/2 gap-8">
                        {slides.map((slide, index) => (
                            <img
                                key={`main-${index}`}
                                src={slide.image}
                                alt={slide.title}
                                className="h-[180px] w-[300px] flex-shrink-0 rounded-xl object-cover"
                            />
                        ))}
                    </div>
                    <div className="flex w-1/2 gap-8" aria-hidden="true">
                        {slides.map((slide, index) => (
                            <img
                                key={`clone-${index}`}
                                src={slide.image}
                                alt={slide.title}
                                className="h-[180px] w-[300px] flex-shrink-0 rounded-xl object-cover"
                            />
                        ))}
                    </div>
                </div>
            </div>


            {/* 탭 영역 */}
            <div className="w-full px-4 mb-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* 탭 버튼 */}
                    <div className="flex rounded-t-xl overflow-hidden">
                        {['chapters', 'videos', 'quizzes'].map((tab) => {
                            const isActive = activeTab === tab;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => changeTab(tab as 'chapters' | 'videos' | 'quizzes')}
                                    className={`flex-1 py-3 text-center text-sm font-semibold transition-colors
                                        border border-zinc-300 dark:border-zinc-700 rounded-t-xl
                                        ${isActive
                                            ? 'bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 border-b-0'
                                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'}`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            );
                        })}
                    </div>

                    {/* 콘텐츠 */}
                    <div className="w-full bg-white dark:bg-zinc-900 rounded-b-xl p-6 border border-t-0 border-zinc-300 dark:border-zinc-700">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}
