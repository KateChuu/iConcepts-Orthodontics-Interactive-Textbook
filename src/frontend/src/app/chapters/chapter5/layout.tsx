import TableOfContents from '@/components/TableOfContents';
import type { ReactNode } from 'react';

const sections = [
    { id: '', title: 'Back to Chapter' },
    { id: 'intro', title: 'Intro' },
    { id: 'section1', title: 'How to Study Effectively' },
    { id: 'section2', title: 'Study Methods' },
    { id: 'section3', title: 'Message to Students' },
    { id: 'section4', title: 'Podcast' },
    { id: 'section5', title: 'Final Lecture' },
];

export default function Chapter5Layout({
    children,
}: {
    children: ReactNode;
}) {
    const currentPath = typeof window !== 'undefined' ? location.pathname : '';
    const currentId = currentPath.split('/').pop() ?? 'intro';

    return (
        <div className="flex">
            <TableOfContents sections={sections} current={currentId} chapterSlug="chapter5" />
            <div className="flex-1 px-4">{children}</div>
        </div>
    );
}
