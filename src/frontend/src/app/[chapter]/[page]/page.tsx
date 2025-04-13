import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { notFound } from "next/navigation";

import { chapterInfo } from "@/textContent/chapterInfo";

interface ChapterPageProps {
  // to extract the value from [chapter] and [page] in the URL
  params: {
    chapter: string;
    page: string;
  };
}

const ChapterPage: FC<ChapterPageProps> = (params) => {
  const { chapter, page } = params.params;

  const validChapterRegex = /^chapter\d+$/; // Example of valid chapters like chapter1, chapter2, chapter3
  const isValidChapter = validChapterRegex.test(chapter);

  const validPageRegex = /^page\d+$/; // Example of valid pages like page1, page24
  const isValidPage = validPageRegex.test(page);

  if (!isValidChapter || !isValidPage) {
    notFound(); // Redirects to not-found.tsx
  }

  return (
    <div>
      <header className="items-center flex mt-[8px]">
        <Link href={`/${chapter}`}>
          <button className="flex w-10 h-10 rounded ml-[92px] items-center justified-center transition-colors duration-300 ease-in-out hover:bg-gray-300">
            <Image
              src="/images/left_arrow.svg"
              alt="Back Arrow"
              width={40}
              height={40}
            />
          </button>
        </Link>
        <span className="text-[22px] ml-1">Chapters</span>
      </header>
      <p className="text-center p-4 m-auto text-lg font-semibold text-gray-700">
        {params.params.page}
      </p>
      <p className="text-center p-4 m-auto text-lg font-semibold text-gray-700">
        This page is under construction
      </p>
    </div>
  );
};

export default ChapterPage;
