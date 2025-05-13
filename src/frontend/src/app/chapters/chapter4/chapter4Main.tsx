import ChapterMain from '@/components/chapterMain';

export default function Chapter4Page() {
  const title = 'Chapter 4: Functional Orthopaedic Appliances';
  const description = 'Functional appliances work by utilizing functional forces of muscles of mastication and facial expression, to bring about favorable changes in skeletal and dental relationship mostly in antero-posterior dimension, along with vertical and transverse corrections as well. Majority are removable, but fixed functional appliances are also available.';
  const sections = [
    { id: 1, title: '', href: '/chapters/chapter4/intro', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745402176/Intro_ChatGPT_Image_ziurdw.png' },
    { id: 2, title: 'Clark Twin Block', href: '/chapters/chapter4/section1', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114337/section1_dxosw4.png' },
    { id: 3, title: 'Clark Twin Block Example', href: '/chapters/chapter4/section2', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section2_qdnkex.png' },
    { id: 4, title: 'Indications', href: '/chapters/chapter4/section3', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section3_vmgqen.png' },
    { id: 5, title: 'Test Your Knowledge', href: '/chapters/chapter4/section4', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section4_c14ay8.png' },
  ];

  return <ChapterMain title={title} description={description} sections={sections} />;
}