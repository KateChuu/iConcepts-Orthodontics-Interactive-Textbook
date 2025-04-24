import ChapterMain from '@/components/chapterMain';

export default function Chapter3Page() {
    const title = 'Chapter 3: Class III Malocclusion';
    const description = 'Mesio-buccal cusp of first permanent molar is at least one cusp width distal to the lower first permanent molar. Incisor relationship is such that lower incisors edges lie anterior to the cingulum plateau, overjet is reduced or reversed.';
    const sections = [
        { id: 0, title: '', href: '/chapters/chapter3/intro', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745402176/Intro_ChatGPT_Image_ziurdw.png' },
        { id: 1, title: 'An Introduction to Class II Malocclusion', href: '/chapters/chapter3/section1', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114337/section1_dxosw4.png' },
        { id: 2, title: 'Treatments', href: '/chapters/chapter3/section2', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section2_qdnkex.png' },
        { id: 3, title: 'Appliances', href: '/chapters/chapter3/section3', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section3_vmgqen.png' },
        { id: 4, title: 'Clinical Examples', href: '/chapters/chapter3/section4', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section4_c14ay8.png' },
        { id: 5, title: 'Self Test', href: '/chapters/chapter3/section5', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section5_lolktb.png' },
    ];

    return <ChapterMain title={title} description={description} sections={sections} />;
}
