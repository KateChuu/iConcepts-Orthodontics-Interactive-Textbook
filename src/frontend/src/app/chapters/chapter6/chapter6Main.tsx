import ChapterMain from '@/components/chapterMain';

export default function Chapter6Page() {
    const title = 'Chapter 6: Growth and Development in Oral Facial Region with reference to Orthodontics';
    const description = 'Craniofacial growth is fundamental to orthodontic diagnosis and treatment. This chapter introduces key concepts like remodeling, displacement, and pubertal growth timing, helping clinicians align interventions with skeletal development for optimal outcomes.';
    const sections = [
        { id: 0, title: '', href: '/chapters/chapter6/intro', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745402176/Intro_ChatGPT_Image_ziurdw.png' },
        { id: 1, title: 'Readings', href: '/chapters/chapter6/section1', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114337/section1_dxosw4.png' },
        { id: 2, title: 'Video 1', href: '/chapters/chapter5/video1', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section2_qdnkex.png' },
        { id: 3, title: 'Video 2', href: '/chapters/chapter5/video2', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section3_vmgqen.png' },
        { id: 4, title: 'Video 3', href: '/chapters/chapter5/video3', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section4_c14ay8.png' },
    ];

    return <ChapterMain title={title} description={description} sections={sections} />;
}
