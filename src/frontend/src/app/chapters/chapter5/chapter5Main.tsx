import ChapterMain from '@/components/chapterMain';

export default function Chapter5Page() {
    const title = 'Chapter 5: LEAN Study Methodology for Effective Learning';
    const description = 'Studying for any exam can be a daunting experience if one is not organized. It can be made less stressful and tense by studying regularly over the year. It may sound too much hard work, but actually there is an analogy for it. Just like at a marathon run, the runners who start off slowly but surely have greater chance to win, because as the runner approaches the finish line he speeds up and eventually wins it. This approach to study can help tremendously.';
    const sections = [
        { id: 0, title: '', href: '/chapters/chapter5/intro', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745402176/Intro_ChatGPT_Image_ziurdw.png' },
        { id: 1, title: 'How to Study Effectively', href: '/chapters/chapter5/section1', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114337/section1_dxosw4.png' },
        { id: 2, title: 'Study Methods', href: '/chapters/chapter5/section2', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section2_qdnkex.png' },
        { id: 3, title: 'Message to Students', href: '/chapters/chapter5/section3', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section3_vmgqen.png' },
        { id: 4, title: 'Podcast', href: '/chapters/chapter5/section4', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section4_c14ay8.png' },
        { id: 5, title: 'Final Lecture', href: '/chapters/chapter5/section5', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section5_lolktb.png' },
    ];

    return <ChapterMain title={title} description={description} sections={sections} />;
}
