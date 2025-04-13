"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface CardItemProps {
  title: string;
  description: string;
  route: string;
  imageUrl: string;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  description,
  route,
  imageUrl,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${route}`);
  };

  return (
    <li
      onClick={handleClick}
      className="cursor-pointer flex items-center justify-between p-4 bg-white shadow rounded-lg"
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-300 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      <div className="text-gray-500">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    </li>
  );
};

export default CardItem;
