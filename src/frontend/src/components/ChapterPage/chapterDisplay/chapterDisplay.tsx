import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ChapterInfo } from "@/textContent/chapterInfo";

interface Props {
  chapterItem: ChapterInfo;
}

const ChapterDisplay: FC<Props> = ({ chapterItem }) => {
  return (
    <div className="flex mt-2 h-auto items-start">
      <Link
        key={chapterItem.id}
        href={`/${chapterItem.id}/${chapterItem.page}`}
        className="flex block p-4 hover:bg-gray-100"
        passHref
      >
        <Image
          src={chapterItem.image}
          alt="Chapter Display Image"
          width={316}
          height={216}
          className="w-[316px] h-[216px] object-cover"
          priority
        />
        <div className="relative ml-6 mt-2">
          <h2 className="text-2xl font-bold mb-1">{chapterItem.title}</h2>
          <h3 className="mb-1 text-sm">Published in 2024</h3>
          <p className="max-w-[600px]">{chapterItem.longDescription}</p>
        </div>
      </Link>
    </div>
  );
};

export default ChapterDisplay;
