'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

type Section = {
	id: string;
	title: string;
};

type Props = {
	sections: Section[];
	current: string;
	chapterSlug: string;
};

export default function TableOfContents({ sections, current, chapterSlug }: Props) {
	const [showTOC, setShowTOC] = useState(false);
	const searchParams = useSearchParams();
	const fromTab = searchParams.get('tab') || 'chapters';

	return (
		<>
			{/* Toggle Button (always visible) */}
			<button
				onClick={() => setShowTOC((prev) => !prev)}
				className="fixed top-1/3 right-0 z-30 bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 px-2 py-1 rounded-l hover:bg-zinc-400 dark:hover:bg-zinc-600"
			>
				{showTOC ? '›' : '‹'}
			</button>

			{/* TOC Panel */}
			{showTOC && (
				<div className="fixed top-20 right-0 w-64 max-h-[80vh] overflow-y-auto bg-white dark:bg-zinc-800 shadow-lg rounded-l-lg z-20 p-4">
					<h3 className="font-semibold mb-2 text-sm text-zinc-500 dark:text-zinc-400">
						Sections
					</h3>
					<ul className="space-y-1 text-sm">
						{sections.map((section) => (
							<li key={section.id}>
								<Link
                                    href={
                                        section.id === ''
                                            ? `/chapters/${chapterSlug}?tab=${fromTab}`
                                            : `/chapters/${chapterSlug}/${section.id}?tab=${fromTab}`
                                    }
                                    className={`block hover:underline ${
                                        current === section.id
                                            ? 'font-bold text-black dark:text-white'
                                            : 'text-zinc-700 dark:text-zinc-300'
                                    }`}
                                >
                                    {section.title}
                                </Link>

							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
}
