import Image from "next/image";
import * as $ from "@/styles/configurator/components/steps/ui/ShowHideDoors.styled";

import useMainStore from "@/stores/useMainStore";

const ShowHideDoors = ({ isLastStep = false, translations: t }) => {
  const { doors, setVisibilityDoors, stepsInputs } = useMainStore((state) => ({
    doors: state.doors,
    setVisibilityDoors: state.setVisibilityDoors,
    stepsInputs: state.stepsInputs,
  }));

  const handleClick = () => {
    setVisibilityDoors(!doors.isVisible);
  };

  return (
    <$.Wrap
      $isVisible={stepsInputs.step2.typeDoors}
      $isLastStep={isLastStep}
      onClick={() => handleClick()}
    >
      <Image
        src={doors.isVisible ? "/icons/no-doors.svg" : "/icons/doors.svg"}
        width={40}
        height={40}
        alt={doors.isVisible ? t.hide_doors.alt_img : t.show_doors.alt_img}
      />
    </$.Wrap>
  );
};

export default ShowHideDoors;
