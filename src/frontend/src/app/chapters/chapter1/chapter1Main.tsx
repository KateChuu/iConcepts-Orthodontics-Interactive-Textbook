import ChapterMain from '@/components/chapterMain';

export default function Chapter1Page() {
  const title = 'Chapter 1: An Introduction to Orthodontics';
  const description = 'Orthodontics is a highly specialized field of Dentistry, aims towards aesthetic and functional enhancement of the dentition to improve the quality of life. Considered first speciality of dentistry. However, rapid advancement have taken place in the last two decades making it a major leading discipline of Dental Surgery.';
  const sections = [
    { id: 1, title: 'Definition of Orthodontics', href: '/chapters/chapter1/section1', icon: '/icons/definition.png' },
    { id: 2, title: 'Brief Historical Background', href: '/chapters/chapter1/section2', icon: '/icons/history.png' },
    { id: 3, title: 'List Orthodontic Treatment Modalities', href: '/chapters/chapter1/section3', icon: '/icons/treatment.png' },
    { id: 4, title: 'Occlustion Classification', href: '/chapters/chapter1/section4', icon: '/icons/treatment.png' },
    { id: 5, title: 'Prevalence of Malocclusion in Global regions', href: '/chapters/chapter1/section5', icon: '/icons/treatment.png' },
  ];

  return <ChapterMain title={title} description={description} sections={sections} />;
}
