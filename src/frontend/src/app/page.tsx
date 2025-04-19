'use client';

import { useState } from 'react';
import ChapterTab from '../components/chapterTab';
import VideoTab from '../components/videoTab';
import QuizTab from '../components/quizTab';

export default function Home() {
    const [activeTab, setActiveTab] = useState<'chapters' | 'videos' | 'quizzes'>('chapters');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'chapters':
                return <ChapterTab />;
            case 'videos':
                return <VideoTab />;
            case 'quizzes':
                return <QuizTab />;
        }
    };

    return (
        <div className="flex flex-col items-center">
            {/* 이미지 영역 */}
            <div className="w-full px-4 mb-6">
                <div className="max-w-screen-xl mx-auto bg-gray-300 dark:bg-gray-700 rounded-xl h-60 flex items-center justify-center">
                    <span className="text-xl text-zinc-600 dark:text-zinc-200">[ Image Area ]</span>
                </div>
            </div>

            {/* 탭 + 콘텐츠 영역 */}
            <div className="w-full px-4 mb-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* 탭 버튼 */}
                    <div className="flex rounded-t-xl overflow-hidden">
                        {['chapters', 'videos', 'quizzes'].map((tab) => {
                            const isActive = activeTab === tab;

                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab as 'chapters' | 'videos' | 'quizzes')}
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

                    {/* 콘텐츠 영역 */}
                    <div className="w-full bg-white dark:bg-zinc-900 rounded-b-xl p-6 border border-t-0 border-zinc-300 dark:border-zinc-700">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}
