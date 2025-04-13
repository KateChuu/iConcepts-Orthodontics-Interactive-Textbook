import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";

export default function Page29() {
  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      <h1 className="text-center text-bold text-4xl mb-10">
        H5P Learning Experience
      </h1>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[683px] mb-[15px]">
          <iframe
            src="https://unimelb.h5p.com/content/1291914216397877129/embed"
            aria-label="CAD CAM Digital Work Flow"
            width="683"
            height="510" // This height is needed because when you click on the iframe, it will expand
            allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
            className="w-full"
          ></iframe>
        </div>
        <div className="w-full max-w-[683px] mb-[30px]">
          <iframe
            src="https://unimelb.h5p.com/content/1291914168756258079/embed"
            aria-label="Tooth Wear"
            width="683"
            height="610"
            allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
            className="w-full"
          ></iframe>
        </div>
        <div className="w-full max-w-[683px] mb-[30px]">
          <iframe
            src="https://unimelb.h5p.com/content/1292276390804310689/embed"
            aria-label="Case 4 - Frontal Anterior Occlusal - before and after"
            width="683"
            height="610"
            allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
            className="w-full"
          ></iframe>
        </div>
        <div className="w-full max-w-[683px] mb-[30px]">
          <iframe
            src="https://unimelb.h5p.com/content/1291908039474101649/embed"
            aria-label="Ectopic / Impacted Dental Units"
            width="683"
            height="510"
            allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
            className="w-full"
          ></iframe>
        </div>
      </div>
      <NavigationButton direction="left" target="/chapter4/page28" />
      <NavigationButton direction="right" target="/chapter4/page30" />
      {/* Footer Component */}
      <Footer />

      {/* Page Number Component */}
      <PageNumber page={29} />
    </div>
  );
}
