import React from "react";
import Image from "next/image";
import { FC } from "react";
import "../../../styles/font.css";
import Link from "next/link";

import { ChapterInfo } from "@/textContent/chapterInfo";

interface Props {
  chapterItem: ChapterInfo;
}

const ChaptersLayout: FC<Props> = ({ chapterItem }) => {
  return (
    <div>
      <div className="max-w-4xl">
        <h2 className="text-[24px] font-bold mb-6 mt-[16px] ml-[24px]">
          Section Title
        </h2>
        <div>
          {chapterItem.chapterSection.map((section) => (
            <Link
              key={section.id}
              href={`/${chapterItem.id}/${section.page}`}
              className="flex block p-4 hover:bg-gray-100"
              passHref
            >
              <Image
                src={section.image}
                alt="Section display image"
                width={120}
                height={120}
              ></Image>
              <div className="ml-[16px]">
                <h3 className="text-1xl font-semibold text-[22px]">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-[14px]">
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChaptersLayout;
