'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';

type SectionPageProps = {
    title: string;
    subtitle?: string;
    children: ReactNode;
    prevHref?: string;
    nextHref?: string;
    chapterHref?: string;
};

export default function SectionPage({
    title,
    subtitle,
    children,
    prevHref,
    nextHref,
    chapterHref,
}: SectionPageProps) {

    const searchParams = useSearchParams();
	const fromTab = searchParams.get('tab') || 'chapters';

    return (
        <div className="w-full max-w-screen-md mx-auto px-4 py-10">
            <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-md px-6 py-4">
                {/* title & subtitle */}
                <div className="border-b pb-4 mb-8">
                    <h1 className="text-2xl font-bold text-zinc-900 dark:text-white text-left py-2">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{subtitle}</p>
                    )}
                </div>

                {/* Main contents */}
                <div className="text-base leading-relaxed">
                    {children}
                </div>

                {/* Navigation */}
                <div className="space-y-4 pt-6 border-t">
                    {/* previous & next button */}
                    <div className="flex justify-between">
                        {prevHref ? (
                            <Link
                                href={prevHref}
                                className="w-32 text-center bg-zinc-200 dark:bg-zinc-700 text-sm px-4 py-2 rounded hover:bg-zinc-300 dark:hover:bg-zinc-600"
                            >
                                &lt;&lt; Previous
                            </Link>
                        ) : (
                            <div className="w-32" />
                        )}

                        {nextHref ? (
                            <Link
                                href={nextHref}
                                className="w-32 text-center bg-zinc-200 dark:bg-zinc-700 text-sm px-4 py-2 rounded hover:bg-zinc-300 dark:hover:bg-zinc-600"
                            >
                                Next &gt;&gt;
                            </Link>
                        ) : (
                            <div className="w-32" />
                        )}
                    </div>

                    {/* Chapter main & Home */}
                    <div className="flex justify-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                        {chapterHref && (
                            <Link href={chapterHref} className="hover:underline">
                                Chapter
                            </Link>
                        )}
                        <Link href={`/?tab=${fromTab}`} className="hover:underline">
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
