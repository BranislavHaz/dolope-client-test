import useMainStore from "@/stores/useMainStore";
import Title from "./ui/Title";
import {
  generateOptionsOfSections,
  generateOptionsOfDoors,
} from "@/utils/steps/step1/generateOptions";

import * as $ from "@/styles/components/steps/CountSections.styled";

const CountSections = () => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));

  const handleClick = (type, value) => () => {
    if (type === "sections") {
      state.setSectionsCount(value);
      state.setStepsInputs("countSections", true);
      state.setStepsInputs("countDoors", false);
      state.setDoorsCount(0);
    }
    if (type === "doors") {
      state.setDoorsCount(value);
      state.setStepsInputs("countDoors", true);
      state.setIsModalActive(false);
    }
  };

  return (
    <$.CountSectionsWrap>
      <Title>Počet sekcí (šířka)</Title>
      <$.SelectWrap>
        {generateOptionsOfSections(state, handleClick)}
      </$.SelectWrap>
      <$.CountDoorWrap $isInactive={state.sections.count === 0}>
        <Title>Počet posuvných dveří (šířka)</Title>
        <$.SelectWrap>
          {generateOptionsOfDoors(state, state.sections.count, handleClick)}
        </$.SelectWrap>
      </$.CountDoorWrap>
    </$.CountSectionsWrap>
  );
};

export default CountSections;
