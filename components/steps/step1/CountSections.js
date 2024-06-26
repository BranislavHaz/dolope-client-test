import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";

import FlashMessage from "../ui/FlashMessage";
import Title from "../ui/Title";

import toast from "react-hot-toast";

import {
  generateOptionsOfSections,
  generateOptionsOfDoors,
} from "@/utils/steps/step1/generateOptions";

import * as $ from "@/styles/components/steps/step1/CountSections.styled";

const CountSections = ({ setHandleSubmit }) => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));

  const handleClick = (type, value) => () => {
    if (type === "sections") {
      state.setSectionsCount(value);
      state.setStepsInputs("step1", "countSections", true);
      state.setStepsInputs("step1", "countDoors", false);
      state.setStepsInputs("step2", "typeSections", false);
      state.setVisibilityDoors(false);
      state.setDoorsCount(0);
    }
    if (type === "doors") {
      state.setDoorsCount(value);
      state.setStepsInputs("step1", "countDoors", true);
      state.setStepsInputs("step2", "typeDoors", false);
      state.setVisibilityDoors(false);
      toast.success("Počet sekcí a dveří byly uloženy!", {
        className: "larger-device",
      });
    }
  };

  const handleSubmit = () => {
    if (state.sections.count && state.doors.count) {
      state.setIsModalActive(false);
      toast.success("Počet sekcí a dveří byly uloženy!", {
        className: "small-device",
      });
    } else {
      state.sections.count
        ? toast.error("Vyberte počet dveří!", {
            className: "small-device",
          })
        : toast.error("Vyberte počet sekcí a dveří!", {
            className: "small-device",
          });
    }
  };

  useEffect(() => {
    setHandleSubmit(() => () => handleSubmit());
  }, [state.sections.count, state.doors.count]);

  return (
    <$.Wrap>
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
    </$.Wrap>
  );
};

export default CountSections;
