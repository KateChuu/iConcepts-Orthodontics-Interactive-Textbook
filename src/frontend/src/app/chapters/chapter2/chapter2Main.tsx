import ChapterMain from '@/components/chapterMain';

export default function Chapter2Page() {
  const title = 'Chapter 2: Class II Malocclusion';
  const description = 'Mesio-buccal cusp of the first permanent molar is at least one cusp width mesial to the lower first permanent molar. ½ Unit and ¼ unit Class II are also used for more accurate documentation.';
  const sections = [
    { id: 1, title: 'Chapter 2: Class II Malocclusion', href: '/chapters/chapter2/intro', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114337/section1_dxosw4.png' },
    { id: 2, title: 'Introduction to Class II / 1 Malocclusion', href: '/chapters/chapter2/section1', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section2_qdnkex.png' },
    { id: 3, title: 'Treatment of Class II / 1 Malocclusion', href: '/chapters/chapter2/section2', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section3_vmgqen.png' },
    { id: 4, title: 'Class II / 2 Malocclusion', href: '/chapters/chapter2/section3', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section4_c14ay8.png' },
    { id: 5, title: 'Self Test', href: '/chapters/chapter2/section4', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section5_lolktb.png' },
    { id: 6, title: 'Appliances', href: '/chapters/chapter2/section5', icon: '/icons/treatment.png' },
  ];

  return <ChapterMain title={title} description={description} sections={sections} />;
}


