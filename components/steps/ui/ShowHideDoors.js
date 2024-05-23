import Image from "next/image";
import * as $ from "@/styles/components/steps/ui/ShowHideDoors.styled";

import useMainStore from "@/stores/useMainStore";

const ShowHideDoors = ({ isLastStep = false }) => {
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
        alt={"Údaje byly vyplněny správně"}
      />
      {/*       <$.TextBlock>
        <$.Text>{doors.isVisible ? "Skrýt" : "Zobrazit"}</$.Text>
        <$.Text>dveře</$.Text>
      </$.TextBlock> */}
    </$.Wrap>
  );
};

export default ShowHideDoors;
