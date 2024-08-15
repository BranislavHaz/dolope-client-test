import { useEffect } from "react";
import useMainStore from "@/stores/useMainStore";

import Title from "../ui/Title";

import toast from "react-hot-toast";

import {
  generateOptionsOfSections,
  generateOptionsOfDoors,
} from "@/utils/configurator/steps/step1/generateOptions";

import * as $ from "@/styles/configurator/components/steps/step1/CountSections.styled";

const CountSections = ({ setHandleSubmit, translations: t }) => {
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
      toast.success(t.toast.success, {
        className: "larger-device",
      });
    }
  };

  const handleSubmit = () => {
    if (state.sections.count && state.doors.count) {
      state.setIsModalActive(false);
      toast.success(t.toast.success, {
        className: "small-device",
      });
    } else {
      state.sections.count
        ? toast.error(t.toast.errors.doors, {
            className: "small-device",
          })
        : toast.error(t.toast.errors.sections_doors, {
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
        <Title>{t.title}</Title>
        <$.SelectWrap>
          {generateOptionsOfSections(state, handleClick)}
        </$.SelectWrap>
        <$.CountDoorWrap $isInactive={state.sections.count === 0}>
          <Title>{t.count_doors.title}</Title>
          <$.SelectWrap>
            {generateOptionsOfDoors(state, state.sections.count, handleClick)}
          </$.SelectWrap>
        </$.CountDoorWrap>
      </$.CountSectionsWrap>
    </$.Wrap>
  );
};

export default CountSections;
