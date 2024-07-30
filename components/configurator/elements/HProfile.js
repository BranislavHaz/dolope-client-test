import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/HProfile.styled";

const HProfile = () => {
  const { viewport, doors, viewportSizes } = useMainStore((state) => ({
    viewport: state.viewport,
    doors: state.doors,
    viewportSizes: state.viewportSizes,
  }));

  const { px } = viewport;
  const { hProfile } = doors.dimensionsFromManual;

  return (
    <$.HProfile
      $width={viewportSizes.door.width}
      $height={viewportSizes.door.profileHeight}
      $profileColor={doors.selectedProfile.color}
    />
  );
};

export default HProfile;
