import ChapterMain from '@/components/chapterMain';

export default function Chapter6Page() {
    const title = 'Chapter 7: Guest Lecture';
    const description = 'This guest lecture series features Prof. Em. Dr.Dr. Rainer-Reginald Miethke from Charité University in Germany, sharing over 50 years of clinical experience in Orthodontics. Through three insightful videos, learners explore key topics such as age-specific treatment strategies, long-term follow-up cases, interdisciplinary collaboration, and reflections on innovations like Invisalign. The final fireside discussion provides valuable perspectives on patient trust, aesthetics, and lifelong learning—offering a rare opportunity to absorb wisdom from a global leader in the field.';
    const sections = [
        { id: 0, title: '', href: '/chapters/chapter7/intro', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745402176/Intro_ChatGPT_Image_ziurdw.png' },
        { id: 1, title: 'Readings', href: '/chapters/chapter7/section1', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114337/section1_dxosw4.png' },
        { id: 2, title: 'Video 1', href: '/chapters/chapter7/video1', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section2_qdnkex.png' },
        { id: 3, title: 'Video 2', href: '/chapters/chapter7/video2', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section3_vmgqen.png' },
        { id: 4, title: 'Video 3', href: '/chapters/chapter7/video3', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section4_c14ay8.png' },
    ];

    return <ChapterMain title={title} description={description} sections={sections} />;
}
