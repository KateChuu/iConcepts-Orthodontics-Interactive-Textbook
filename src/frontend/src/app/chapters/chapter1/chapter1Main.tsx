import ChapterMain from '@/components/chapterMain';

export default function Chapter1Page() {
  const title = 'Chapter 1: An Introduction to Orthodontics';
  const description = 'Orthodontics is a highly specialized field of Dentistry, aims towards aesthetic and functional enhancement of the dentition to improve the quality of life. Considered first speciality of dentistry. However, rapid advancement have taken place in the last two decades making it a major leading discipline of Dental Surgery.';
  const sections = [
    { id: 0, title: '', href: '/chapters/chapter1/intro', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745402176/Intro_ChatGPT_Image_ziurdw.png' },
    { id: 1, title: 'Definition of Orthodontics', href: '/chapters/chapter1/section1', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114337/section1_dxosw4.png' },
    { id: 2, title: 'Brief Historical Background', href: '/chapters/chapter1/section2', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section2_qdnkex.png' },
    { id: 3, title: 'List Orthodontic Treatment Modalities', href: '/chapters/chapter1/section3', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section3_vmgqen.png' },
    { id: 4, title: 'Occlustion Classification', href: '/chapters/chapter1/section4', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section4_c14ay8.png' },
    { id: 5, title: 'Prevalence of Malocclusion in Global regions', href: '/chapters/chapter1/section5', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114338/section5_lolktb.png' },
    { id: 6, title: 'Class I Malocclusion', href: '/chapters/chapter1/section6', icon: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745402546/Section6_ChatGPT_Image_dqrhey.png' },

  return <ChapterMain title={title} description={description} sections={sections} />;
}
