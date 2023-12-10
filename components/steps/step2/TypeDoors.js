import useMainStore from "@/stores/useMainStore";

import Title from "../ui/Title";
import FilterBox from "../ui/FilterBox";

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
    setStepsInputs,
    setIsModalActive,
    setActiveFilter,
  } = useMainStore((state) => ({
    doors: state.doors,
    activeFilter: state.activeFilter,
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

  const handleClick = () => {
    setIsModalActive(false);
    setActiveFilter("doors", 1);
  };

  return (
    <>
      <FilterBox
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
      {Object.keys(doors.typeDoors).length === doors.count && (
        <SubmitButton onClick={handleClick}>Uložit</SubmitButton>
      )}
    </>
  );
};

export default TypeDoors;
