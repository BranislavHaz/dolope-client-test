import Title from "../ui/Title";

import FilterBox from "../ui/FilterBox";

import FixedDoors from "./doorsElements/FixedDoors";
import VariableDoor1 from "./doorsElements/VariableDoor1";
import VariableDoor2 from "./doorsElements/VariableDoor2";
import VariableDoor3 from "./doorsElements/VariableDoor3";
import VariableDoor4 from "./doorsElements/VariableDoor4";

import * as $ from "@/styles/components/steps/step2/TypeDoors.styled";

const TypeDoors = () => {
  return (
    <>
      <FilterBox />
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
    </>
  );
};

export default TypeDoors;
