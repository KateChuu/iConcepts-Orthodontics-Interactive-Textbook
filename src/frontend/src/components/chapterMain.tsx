'use client';

import Link from 'next/link';

type Section = {
  id: number;
  title: string;
  description?: string;
  href: string;
  icon?: string;
};

type ChapterMainProps = {
  title: string;
  description: string;
  sections: Section[];
};

export default function ChapterMain({ title, description, sections }: ChapterMainProps) {
  return (
    <div className="max-w-screen-md mx-auto px-4 py-10 space-y-4">
        <div className="pb-6 border-zinc-300 dark:border-zinc-700 ">
            <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white text-center mb-2">
                {title}
            </h1>
            <p className="mt-8 border-y border-gray-300 text-zinc-600 dark:text-zinc-300 text-base leading-relaxed text-left">
                {description}
            </p>
        </div>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <Link
            key={section.id}
            href={section.href}
            className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-800 rounded-xl shadow hover:shadow-md transition hover:bg-zinc-100 dark:hover:bg-zinc-700"
          >
            <img
              src={section.icon ?? '/default-icon.png'}
              alt={section.title}
              className="w-20 h-20 rounded-md object-cover"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-lg text-zinc-800 dark:text-white">
                Section {index + 1}
              </span>
              <span className="text-base text-zinc-500 dark:text-zinc-400">
                {section.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
