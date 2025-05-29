import TableOfContents from '@/components/TableOfContents';
import type { ReactNode } from 'react';

const sections = [
    { id: '', title: 'Back to Chapter' },
    { id: 'intro', title: 'Intro' },
    { id: 'section1', title: 'An Introduction to Class II Malocclusion' },
    { id: 'section2', title: 'Treatments' },
    { id: 'section3', title: 'Appliances' },
    { id: 'section4', title: 'Clinical Examples' },
    { id: 'section5', title: 'Self Test' },
];

export default function Chapter3Layout({
    children,
}: {
    children: ReactNode;
}) {
    const currentPath = typeof window !== 'undefined' ? location.pathname : '';
    const currentId = currentPath.split('/').pop() ?? 'intro';

    return (
        <div className="flex">
            <TableOfContents sections={sections} current={currentId} chapterSlug="chapter3" />
            <div className="flex-1 px-4">{children}</div>
        </div>
    );
}
