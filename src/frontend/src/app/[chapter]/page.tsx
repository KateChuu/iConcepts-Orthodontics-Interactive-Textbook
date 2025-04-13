import Link from "next/link";
import Image from "next/image";
import ChaptersLayout from "@/components/ChapterPage/chaptersLayout/chaptersLayout";
import ChapterDisplay from "@/components/ChapterPage/chapterDisplay/chapterDisplay";
import { FC } from "react";
import { notFound } from "next/navigation";

import { chapterInfo } from "@/textContent/chapterInfo";

interface ChapterPageProps {
  // to extract the value from [chapter] in the URL
  params: {
    chapter: string;
  };
}

const ChapterPage: FC<ChapterPageProps> = (params) => {
  const { chapter } = params.params;

  const validChapterRegex = /^chapter\d+$/; // Example of valid chapters like chapter1, chapter2, chapter3
  const isValidChapter = validChapterRegex.test(chapter);

  if (!isValidChapter) {
    notFound(); // Redirects to not-found.tsx
  }

  const chapterItem = chapterInfo.find((item) => item.id === chapter);

  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      <header className="items-center flex mt-8]">
        <Link href="/">
          <button className="flex w-10 h-10 rounded items-center justified-center transition-colors duration-300 ease-in-out hover:bg-gray-300">
            <Image
              src="/images/left_arrow.svg"
              alt="Back Arrow"
              width={40}
              height={40}
            />
          </button>
        </Link>
        <span className="text-[22px] ml-1">Front Page</span>
      </header>
      {chapterItem && <ChapterDisplay chapterItem={chapterItem} />}
      {chapterItem && <ChaptersLayout chapterItem={chapterItem} />}
    </div>
  );
};

export default ChapterPage;
