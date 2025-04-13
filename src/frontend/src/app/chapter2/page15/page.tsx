"use client";

import { useRouter } from "next/navigation";
import Footer from "../../../components/Footer";
import PageNumber from "../../../components/PageNumber";
import NavigationButton from "../../../components/NavigationButton";
import Image from "next/image";

const Page15 = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col w-full h-full overflow-auto">
            {/* Main Content Section */}
            <div className="flex w-full h-full flex-col">
                {/* Top Section: Video and Gallery 2.3 */}
                <div className="flex w-full h-1/2 gap-4 mb-4">
                    {/* Video */}
                    <div className="w-2/3 h-full flex items-center justify-center">
                        {/* CAT Clear Aligner Therapy Video */}
                        <div className='w-full h-full flex items-center justify-center'>
                            <video
                                src='/chapter2/page15/Screen Recording 2024-09-16 at 4.31.58 AM-207.mov'
                                className='w-[500px]'
                                controls
                                controlsList='nodownload'
                            ></video>
                        </div>
                    </div>

                    {/* Video Caption */}
                    <div className="w-1/3 flex flex-col justify-center pl-4">
                        <h3 className="font-sans text-base md:text-lg font-bold mb-2">
                            Gallery 2.3 <span className="text-gray-500 font-normal"> CAT Clear Aligner Therapy with locked positions in grey in lower buccal segments prevents future impactions for 8&apos;s. This patient has congenitally missing 35 45.</span>
                        </h3>
                    </div>
                </div>

                {/* Bottom Section: Images and Gallery 2.4 */}
                <div className="flex w-full h-1/2 gap-4">
                    {/* Left Side: Two Images */}
                    <div className="w-2/3 flex flex-row gap-4">
                        <div className="relative w-1/2 h-full flex items-center justify-center">
                            <Image
                                src="/chapter2/page15/IMG_2720-183.jpg"
                                alt="Image 1"
                                className="object-contain"
                                layout="fill"
                            />
                        </div>
                        <div className="relative w-1/2 h-full flex items-center justify-center">
                            <Image
                                src="/chapter2/page15/IMG_1831-185.jpg"
                                alt="Image 2"
                                className="object-contain"
                                layout="fill"
                            />
                        </div>
                    </div>

                    {/* Right Side: Gallery 2.4 */}
                    <div className="w-1/3 flex flex-col">
                        {/* Image in Top Section */}
                        <div className="relative w-full h-2/3 flex items-center justify-center mb-2">
                            {/* Placeholder for Image */}
                            <Image
                                src="/chapter2/page15/IMG_2506-187.jpg"
                                alt="Gallery 2.4 Image"
                                className="object-contain"
                                layout="fill"
                            />
                        </div>

                        {/* Caption in Bottom Section */}
                        <div className="flex flex-col justify-start">
                            <h3 className="font-sans text-base md:text-lg font-bold mb-2">
                                Gallery 2.4 <span className="text-gray-500 font-normal">  Removable appliances traditionally have acrylic fun designs and wire work (Left) in mixed dentition. Fixed appliances labial metal (above).</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <NavigationButton direction="left" target="/chapter2/page14" />
            <NavigationButton direction="right" target="/chapter2/page16" />

            {/* Footer */}
            <Footer />

            {/* Page Number */}
            <PageNumber page={15} />
        </div>
    );
};

export default Page15;