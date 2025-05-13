import TableOfContents from '@/components/TableOfContents';
import type { ReactNode } from 'react';

const sections = [
    { id: '', title: 'Back to Chapter' },
    { id: 'intro', title: 'Intro' },
    { id: 'section1', title: 'Readings' },
    { id: 'video1', title: 'Video 1' },
    { id: 'video2', title: 'Video 2' },
    { id: 'video3', title: 'Video 3' },
];

export default function Chapter7Layout({
    children,
}: {
    children: ReactNode;
}) {
    const currentPath = typeof window !== 'undefined' ? location.pathname : '';
    const currentId = currentPath.split('/').pop() ?? 'intro';

    return (
        <div className="flex">
            <TableOfContents sections={sections} current={currentId} chapterSlug="chapter7" />
            <div className="flex-1 px-4">{children}</div>
        </div>
    );
}
