import TableOfContents from '@/components/TableOfContents';
import type { ReactNode } from 'react';

const sections = [
    { id: '', title: 'Back to Chapter' },
    { id: 'intro', title: 'Intro' },
    { id: 'section1', title: 'Clark Twin Block' },
    { id: 'section2', title: 'Clark Twin Block Example' },
    { id: 'section3', title: 'Indications' },
    { id: 'section4', title: 'Test Your Knowledge' },
];

export default function Chapter4Layout({
    children,
}: {
    children: ReactNode;
}) {
    const currentPath = typeof window !== 'undefined' ? location.pathname : '';
    const currentId = currentPath.split('/').pop() ?? 'intro';

    return (
        <div className="flex">
            <TableOfContents sections={sections} current={currentId} chapterSlug="chapter4" />
            <div className="flex-1 px-4">{children}</div>
        </div>
    );
}
