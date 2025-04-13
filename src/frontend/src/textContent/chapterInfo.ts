export interface ChapterInfo {
  id: string;
  page: string;
  title: string;
  description: string;
  image: string;
  longDescription: string;
  chapterSection: ChapterSection[];
}

// Define the ChapterSection interface
export interface ChapterSection {
  id: string;
  page: string;
  title: string;
  description: string;
  image: string;
}

export const chapterInfo: ChapterInfo[] = [
  {
    id: "chapter1",
    page: "page3",
    title: "Chapter 1: An Introduction to Orthodontics",
    description: "An Introduction to Orthodontics",
    image: "/front-page/chapters/chapter1-thumbnail.jpg",
    longDescription:
      "Orthodontics is a highly specialized field of Dentistry, aims towards aesthetic and functional enhancement of the dentition to improve the quality of life. Considered first speciality of dentistryHowever, rapid advancement have taken place in the last two decades making it a major leading discipline of Dental Surgery.",
    chapterSection: [
      {
        id: "section1",
        page: "page4",
        title: "Section 1",
        description: "Definition of Orthodontics",
        image: "/chapter-page/section1.png",
      },
      {
        id: "section2",
        page: "page5",
        title: "Section 2",
        description: "Brief Historical Background",
        image: "/chapter-page/section2.png",
      },
      {
        id: "section3",
        page: "page5",
        title: "Section 3",
        description: "List Orthodontic Treatment Modalities",
        image: "/chapter-page/section3.png",
      },
      {
        id: "section4",
        page: "page6",
        title: "Section 4",
        description: "Occlusion Classification",
        image: "/chapter-page/section4.png",
      },
      {
        id: "section5",
        page: "page7",
        title: "Section 5",
        description: "Prevalence of Malocclusion in Global regions",
        image: "/chapter-page/section5.png",
      },
    ],
  },
  {
    id: "chapter2",
    page: "page12",
    title: "Chapter 2: Class II Malocclusion",
    description: "Class II Malocclusion",
    image: "/front-page/chapters/chapter2-thumbnail.jpg",
    longDescription:
      "Mesio-buccal cusp of the first permanent molar is at least one cusp width mesial to the lower first permanent molar. ½ Unit and ¼ unit Class II are also used for more accurate documentation.",
    chapterSection: [
      {
        id: "section1",
        page: "page13",
        title: "Section 1",
        description: "Introduction to Class II / 1 Malocclusion",
        image: "/chapter-page/section1.png",
      },
      {
        id: "section2",
        page: "page14",
        title: "Section 2",
        description: "Treatment of Class II / 1 Malocclusion",
        image: "/chapter-page/section2.png",
      },
      {
        id: "section3",
        page: "page16",
        title: "Section 3",
        description: "Class II / 2 Malocclusion",
        image: "/chapter-page/section3.png",
      },
      {
        id: "section4",
        page: "page17",
        title: "Section 4",
        description: "Self Test",
        image: "/chapter-page/section4.png",
      },
      {
        id: "section5",
        page: "page18",
        title: "Section 5",
        description: "Appliances",
        image: "/chapter-page/section5.png",
      },
    ],
  },
  {
    id: "chapter3",
    page: "page19",
    title: "Chapter 3: Class III Malocclusion",
    description: "Class III Malocclusion",
    image: "/front-page/chapters/chapter3-thumbnail.jpg",
    longDescription:
      "Mesio-buccal cusp of first permanent molar is at least one cusp width distal to the lower first permanent molar. Incisor relationship is such that lower incisors edges lie anterior to the cingulum plateau, overjet is reduced or reversed.",
    chapterSection: [
      {
        id: "section1",
        page: "page20",
        title: "Section 1",
        description: "An Introduction to Class II Malocclusion",
        image: "/chapter-page/section1.png",
      },
      {
        id: "section2",
        page: "page21",
        title: "Section 2",
        description: "Treatments",
        image: "/chapter-page/section2.png",
      },
      {
        id: "section3",
        page: "page21",
        title: "Section 3",
        description: "Appliances",
        image: "/chapter-page/section3.png",
      },
      {
        id: "section4",
        page: "page22",
        title: "Section 4",
        description: "Clinical Examples",
        image: "/chapter-page/section4.png",
      },
      {
        id: "section5",
        page: "page23",
        title: "Section 5",
        description: "Self Test",
        image: "/chapter-page/section5.png",
      },
    ],
  },
  {
    id: "chapter4",
    page: "page24",
    title: "Chapter 4: Functional Orthopaedic Appliances",
    description: "Functional Orthopaedic Appliances",
    image: "/front-page/chapters/chapter4-thumbnail.jpg",
    longDescription:
      "Functional appliances work by utilizing functional forces of muscles of mastication and facial expression, to bring about favorable changes in skeletal and dental relationship mostly in antero-posterior dimension, along with vertical and transverse corrections as well. Majority are removable, but fixed functional appliances are also available.",
    chapterSection: [
      {
        id: "section1",
        page: "page25",
        title: "Section 1",
        description: "Background and Classification",
        image: "/chapter-page/section1.png",
      },
      {
        id: "section2",
        page: "page26",
        title: "Section 2",
        description: "Clark Twin Block",
        image: "/chapter-page/section2.png",
      },
      {
        id: "section3",
        page: "page27",
        title: "Section 3",
        description: "Clark Twin Block Example",
        image: "/chapter-page/section3.png",
      },
      {
        id: "section4",
        page: "page28",
        title: "Section 4",
        description: "Indications",
        image: "/chapter-page/section4.png",
      },
      {
        id: "section5",
        page: "page29",
        title: "Section 5",
        description: "Test Your Knowledge",
        image: "/chapter-page/section5.png",
      },
    ],
  },
  {
    id: "chapter5",
    page: "page31",
    title: "Chapter 5: LEAN Study Methodology for Effective Learning",
    description: "LEAN Study Methodology for Effective Learning",
    image: "/front-page/chapters/chapter5-thumbnail.jpg",
    longDescription:
      "Studying for any exam can be a daunting experience if one is not organized. It can be made less stressful and tense by studying regularly over the year. It may sound too much hard work, but actually there is an analogy for it. Just like at a marathon run, the runners who start off slowly but surely have greater chance to win, because as the runner approaches the finish line he speeds up and eventually wins it. This approach to study can help tremendously.",
    chapterSection: [
      {
        id: "section1",
        page: "page32",
        title: "Section 1",
        description: "How to Study Effectively",
        image: "/chapter-page/section1.png",
      },
      {
        id: "section2",
        page: "page32",
        title: "Section 2",
        description: "Study Methods",
        image: "/chapter-page/section2.png",
      },
      {
        id: "section3",
        page: "page32",
        title: "Section 3",
        description: "Message to Students",
        image: "/chapter-page/section3.png",
      },
      {
        id: "section4",
        page: "page33",
        title: "Section 4",
        description: "Podcast",
        image: "/chapter-page/section4.png",
      },
      {
        id: "section5",
        page: "page34",
        title: "Section 5",
        description: "Final Lecture",
        image: "/chapter-page/section5.png",
      },
    ],
  },
];
