import TableOfContents from '@/components/TableOfContents';
import type { ReactNode } from 'react';

const sections = [
    { id: '', title: 'Back to Chapter' },
    { id: 'intro', title: 'Intro' },
    { id: 'section1', title: 'Introduction to Class II / 1 Malocclusion' },
    { id: 'section2', title: 'Treatment of Class II / 1 Malocclusion' },
    { id: 'section3', title: 'Class II / 2 Malocclusion' },
    { id: 'section4', title: 'Self Test' },
    { id: 'section5', title: 'Appliances' },
];

export default function Chapter2Layout({
    children,
}: {
    children: ReactNode;
}) {
    const currentPath = typeof window !== 'undefined' ? location.pathname : '';
    const currentId = currentPath.split('/').pop() ?? 'intro';

    return (
        <div className="flex">
            <TableOfContents sections={sections} current={currentId} chapterSlug="chapter2" />
            <div className="flex-1 px-4">{children}</div>
        </div>
    );
}
