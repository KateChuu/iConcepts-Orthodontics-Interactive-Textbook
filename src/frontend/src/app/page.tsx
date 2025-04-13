/** @format */
"use client";

import React from "react";
import CardItem from "../components/FrontPage/CardItem";
import Gallery from "../components/FrontPage/Gallery";
import Link from "next/link";
import {
  chapterData,
  interactiveComponentData,
} from "@/textContent/homePageInfo";

// Main component for the Orthodontics page
const OrthodonticsPage = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      {/* Header */}
      <header className="flex items-center justify-between p-6 ml-8 mr-8">
        <h1 className="text-4xl font-bold">iConcepts in Orthodontics</h1>
      </header>

      {/* Main Content */}
      <main className="ml-8 mr-8 p-4 flex-grow">
        {/* Image Gallery */}
        <Gallery />

        {/* Chapters Section */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Chapters</h2>
          </div>

          {/* List of chapters */}
          <ul className="space-y-4">
            {chapterData.map((chapter, index) => (
              <CardItem
                key={index}
                title={chapter.title}
                description={chapter.description}
                route={chapter.route}
                imageUrl={chapter.imageUrl}
              />
            ))}
          </ul>
        </section>

        {/* Interactive Components Section */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Interactive Components</h2>
          </div>

          {/* List of interactive components */}
          <ul className="space-y-4">
            {interactiveComponentData.map((component, index) => (
              <CardItem
                key={index}
                title={component.title}
                description={component.description}
                route={component.route}
                imageUrl={component.imageUrl}
              />
            ))}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white p-6 mt-8 border-t">
        <div className="flex justify-center">
          <Link href="/terms" className="text-blue-500 hover:underline">
            Privacy & Copyright
          </Link>
        </div>
        <div className="text-center mt-4">
          <p>iConcepts in Orthodontics 2026</p>
          <p>Dr Shazia Naser-ud-Din</p>
          <p>PhD, MSc, MOrth (RCSEd), FICCDE, DPHDent, DCPSP-HPE, BDS</p>
        </div>
      </footer>
    </div>
  );
};

export default OrthodonticsPage;
