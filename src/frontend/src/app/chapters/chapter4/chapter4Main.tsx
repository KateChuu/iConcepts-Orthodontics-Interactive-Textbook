import ChapterMain from '@/components/chapterMain';

export default function Chapter4Page() {
  const title = 'Chapter 4: Functional Orthopaedic Appliances';
  const description = 'Functional appliances work by utilizing functional forces of muscles of mastication and facial expression, to bring about favorable changes in skeletal and dental relationship mostly in antero-posterior dimension, along with vertical and transverse corrections as well. Majority are removable, but fixed functional appliances are also available.';
  const sections = [
    { id: 1, title: 'Background and Classification', href: '/chapters/chapter4/intro', icon: '/icons/definition.png' },
    { id: 2, title: 'Clark Twin Block', href: '/chapters/chapter4/section1', icon: '/icons/definition.png' },
    { id: 3, title: 'Clark Twin Block Example', href: '/chapters/chapter4/section2', icon: '/icons/history.png' },
    { id: 4, title: 'Indications', href: '/chapters/chapter4/section3', icon: '/icons/treatment.png' },
    { id: 5, title: 'Test Your Knowledge', href: '/chapters/chapter4/section4', icon: '/icons/treatment.png' },
  ];

  return <ChapterMain title={title} description={description} sections={sections} />;
}