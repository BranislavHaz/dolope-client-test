import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/configurator/components/elements/Handle.styled";

const Handle = () => {
  const { doors, viewportSizes } = useMainStore((state) => ({
    doors: state.doors,
    viewportSizes: state.viewportSizes,
  }));

  return (
    <$.Handle
      $width={viewportSizes.door.profileHeight}
      $profileColor={doors.selectedProfile.color}
    />
  );
};

export default Handle;
