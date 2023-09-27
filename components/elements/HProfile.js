import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/HProfile.styled";

const HProfile = () => {
  const { viewport, doors } = useMainStore((state) => ({
    viewport: state.viewport,
    doors: state.doors,
  }));

  const { px } = viewport;
  const { hProfile } = doors.dimensionsFromManual;

  return (
    <$.HProfile
      $width={px * doors.width}
      $height={px * 1.5 * hProfile.height}
    />
  );
};

export default HProfile;
