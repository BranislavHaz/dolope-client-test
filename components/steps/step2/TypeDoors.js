import useMainStore from "@/stores/useMainStore";

import Title from "../ui/Title";
import FilterBoxCount from "../ui/FilterBoxCount";

import FixedDoors from "./doorsElements/FixedDoors";
import VariableDoor1 from "./doorsElements/VariableDoor1";
import VariableDoor2 from "./doorsElements/VariableDoor2";
import VariableDoor3 from "./doorsElements/VariableDoor3";
import VariableDoor4 from "./doorsElements/VariableDoor4";

import { SubmitButton } from "@/styles/components/steps/ui/SubmitButton.styled";

import * as $ from "@/styles/components/steps/step2/TypeDoors.styled";
import { useEffect } from "react";

const TypeDoors = () => {
  const {
    doors,
    activeFilter,
    stepsInputs,
    setStepsInputs,
    setIsModalActive,
    setActiveFilter,
  } = useMainStore((state) => ({
    doors: state.doors,
    activeFilter: state.activeFilter,
    stepsInputs: state.stepsInputs,
    setStepsInputs: state.setStepsInputs,
    setIsModalActive: state.setIsModalActive,
    setActiveFilter: state.setActiveFilter,
  }));

  useEffect(() => {
    const countOfSelectedDoors = Object.keys(doors.typeDoors).length;

    if (countOfSelectedDoors === doors.count) {
      setStepsInputs("step2", "typeDoors", true);
    } else {
      setStepsInputs("step2", "typeDoors", false);
    }
  }, [doors.typeDoors]);

  const handleSubmit = () => {
    setIsModalActive(false);
    setActiveFilter("doors", 1);
  };

  return (
    <>
      <FilterBoxCount
        type={"doors"}
        count={doors.count}
        active={activeFilter.doors}
      />
      <$.Wrap>
        <Title>Fixní výška dveří</Title>
        <FixedDoors />
        <Title>Variabilní výška dveří</Title>
        <$.TypeDoorsWrap>
          <VariableDoor1 />
          <VariableDoor2 />
          <VariableDoor3 />
          <VariableDoor4 />
        </$.TypeDoorsWrap>
      </$.Wrap>

      <SubmitButton
        $isVisible={stepsInputs.step2.typeDoors}
        onClick={handleSubmit}
      >
        Uložit
      </SubmitButton>
    </>
  );
};

export default TypeDoors;
