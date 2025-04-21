import ChapterMain from '@/components/chapterMain';

export default function Chapter3Page() {
    const title = 'Chapter 3: Class III Malocclusion';
    const description = 'Mesio-buccal cusp of first permanent molar is at least one cusp width distal to the lower first permanent molar. Incisor relationship is such that lower incisors edges lie anterior to the cingulum plateau, overjet is reduced or reversed.';
    const sections = [
        { id: 1, title: 'An Introduction to Class II Malocclusion', href: '/chapters/chapter3/section1', icon: '/icons/definition.png' },
        { id: 2, title: 'Treatments', href: '/chapters/chapter3/section2', icon: '/icons/history.png' },
        { id: 3, title: 'Appliances', href: '/chapters/chapter3/section3', icon: '/icons/treatment.png' },
        { id: 4, title: 'Clinical Examples', href: '/chapters/chapter3/section4', icon: '/icons/treatment.png' },
    ];

    return <ChapterMain title={title} description={description} sections={sections} />;
}
