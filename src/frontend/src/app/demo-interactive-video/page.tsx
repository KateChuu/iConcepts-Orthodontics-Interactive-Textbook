/** @format */

import OrthodonticsInteractiveVideo, {
  InteractiveVideoNames,
} from '@/components/InteractiveVideo/OrthodonticsInteractiveVideo';

const DemoInteractiveVideoPage = () => {
  return (
    <div>
      <OrthodonticsInteractiveVideo
        name={InteractiveVideoNames.AnteriorOpenBite}
      />
    </div>
  );
};
export default DemoInteractiveVideoPage;
