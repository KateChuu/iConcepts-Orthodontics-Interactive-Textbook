import TableOfContents from '@/components/TableOfContents';
import type { ReactNode } from 'react';

const sections = [
    { id: '', title: 'Back to Chapter' },
	{ id: 'intro', title: 'Intro' },
	{ id: 'section1', title: 'Definition of Orthodontics' },
	{ id: 'section2', title: 'Brief Historical Background' },
	{ id: 'section3', title: 'List Orthodontic Treatment Modalities' },
	{ id: 'section4', title: 'Occlusion Classification' },
	{ id: 'section5', title: 'Prevalence of Malocclusion in Global Regions' },
];

export default function Chapter1Layout({
	children,
}: {
	children: ReactNode;
}) {
	const currentPath = typeof window !== 'undefined' ? location.pathname : '';
	const currentId = currentPath.split('/').pop() ?? 'intro';

	return (
		<div className="flex">
			<TableOfContents sections={sections} current={currentId} chapterSlug="chapter1" />
			<div className="flex-1 px-4">{children}</div>
		</div>
	);
}
