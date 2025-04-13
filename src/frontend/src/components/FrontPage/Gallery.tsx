import Image from "next/image";

const Gallery = () => {
  const images = [
    "/front-page/gallery/thumbnail.jpg",
    "/front-page/gallery/CH1.jpg",
    "/front-page/gallery/CH2.jpg",
    "/front-page/gallery/CH3.jpg",
    "/front-page/gallery/CH4.jpg",
    "/front-page/gallery/CH5.jpg",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-200 rounded-lg">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className="relative flex-grow max-w-[calc(33.33%-1rem)] min-w-[180px] h-48 bg-gray-400 flex items-center justify-center rounded-lg overflow-hidden"
        >
          <Image
            src={imageUrl}
            alt={`Image ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
