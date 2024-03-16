import Image from "next/image";
import * as $ from "@/styles/components/steps/ui/ShowHideDoors.styled";

import useMainStore from "@/stores/useMainStore";

const ShowHideDoors = () => {
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
      onClick={() => handleClick()}
    >
      <Image
        src={"/icons/doors.svg"}
        width={20}
        height={20}
        alt={"Údaje byly vyplněny správně"}
      />

      <$.Text>{doors.isVisible ? "Skrýt" : "Zobrazit"}</$.Text>
    </$.Wrap>
  );
};

export default ShowHideDoors;
