import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";

import FlashMessage from "../ui/FlashMessage";
import Title from "../ui/Title";

import FixedDoors from "./doorsElements/FixedDoors";
import VariableDoor1 from "./doorsElements/VariableDoor1";
import VariableDoor2 from "./doorsElements/VariableDoor2";
import VariableDoor3 from "./doorsElements/VariableDoor3";
import VariableDoor4 from "./doorsElements/VariableDoor4";

import * as $ from "@/styles/components/steps/step2/TypeDoors.styled";

const TypeDoors = ({ setHandleSubmit }) => {
  const {
    doors,
    setStepsInputs,
    setIsModalActive,
    setActiveFilter,
    setFlashMessage,
  } = useMainStore((state) => ({
    doors: state.doors,
    setStepsInputs: state.setStepsInputs,
    setIsModalActive: state.setIsModalActive,
    setActiveFilter: state.setActiveFilter,
    setFlashMessage: state.setFlashMessage,
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
    if (Object.keys(doors.typeDoors).length === doors.count) {
      setIsModalActive(false);
      setActiveFilter("doors", 1);
      setFlashMessage({ type: "error", value: false });
    } else {
      setFlashMessage({ type: "error", value: true });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [doors.typeDoors]);

  return (
    <>
      <FlashMessage type={"error"}>
        Prosím vyberte typ pro všechny dveře.
      </FlashMessage>
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
