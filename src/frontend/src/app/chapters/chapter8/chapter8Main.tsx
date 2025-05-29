import ChapterMain from '@/components/chapterMain';

export default function Chapter3Page() {
    const title = 'Chapter 8: TMD (Temporo-Mandibular Disorders) and Occlusion';
    const description = 'Temporo-Mandibular Disorders (TMD) and Bruxism are increasingly recognized as major concerns in dental health due to their impact on occlusion, joint function, and overall quality of life. This interactive Prezi-based chapter offers foundational knowledge on TMD history, diagnostic protocols, Helkimo Index, contemporary chairside investigations, and the evolving approaches to management—especially through occlusal splints. The topic of Bruxism is addressed in detail with a historical overview, prevalence data, and its connection to stress, neurological factors, and emerging MedTech solutions. Learners are encouraged to explore these dynamic concepts and reflect on their clinical implications through embedded multimedia and evidence-based insights.';
    const sections = [
        { id: 0, title: '', href: '/chapters/chapter8/intro', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745402176/Intro_ChatGPT_Image_ziurdw.png' },
        { id: 1, title: 'Bruxism', href: '/chapters/chapter8/section1', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114337/section1_dxosw4.png' },
        { id: 2, title: 'References', href: '/chapters/chapter8/section2', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section2_qdnkex.png' },
    ];

    return <ChapterMain title={title} description={description} sections={sections} />;
}
