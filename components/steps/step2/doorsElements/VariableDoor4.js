import useMainStore from "@/stores/useMainStore";
import { calcMinMaxDoorHeight } from "@/utils/steps/step2/calcDoorHeight";
import { checkIfIsActiveDoor } from "@/utils/steps/step2/checkIfIsActiveDoor";
import { nextStepFilterBox } from "@/utils/steps/step2/nextStepFilterBox";
import { useState } from "react";

import * as $ from "@/styles/components/steps/step2/TypeDoors.styled";

const VariableDoor4 = () => {
  const { state, doors, setTypeOfDoors, removeTypeOfDoors, activeFilter } =
    useMainStore((state) => ({
      state: state,
      doors: state.doors,
      setTypeOfDoors: state.setTypeOfDoors,
      removeTypeOfDoors: state.removeTypeOfDoors,
      activeFilter: state.activeFilter,
    }));

  const [inputValue, setInputValue] = useState(0);
  const [variableHeight, setVariableHeight] = useState(0);
  const [inputErr, setInputErr] = useState(false);

  const handleOnChange = (value) => {
    const valueMM = value * 10;
    const { min, max } = calcMinMaxDoorHeight(4, doors.height);

    setInputValue(value);

    if (valueMM === "undefined" || valueMM === "" || valueMM === 0) {
      setInputErr(null);
    } else if (min <= valueMM && valueMM <= max) {
      setVariableHeight(Math.round((doors.height - valueMM * 2) / 10 / 3));
      setInputErr(false);
    } else {
      setVariableHeight(0);
      setInputErr(true);
    }
  };

  const handleClick = () => {
    const doorId = activeFilter.doors;

    if (inputValue > 0 && !inputErr) {
      const typeOfDoor = 9;
      const fixedHeight = Math.round((doors.height - inputValue * 2 * 10) / 3);
      const sections = {
        1: { width: doors.width, height: fixedHeight },
        2: { width: doors.width, height: Math.round(inputValue * 10) },
        3: { width: doors.width, height: fixedHeight },
        4: { width: doors.width, height: Math.round(inputValue * 10) },
        5: { width: doors.width, height: fixedHeight },
      };
      setTypeOfDoors({ doorId, sections, typeOfDoor });
      nextStepFilterBox({ state, type: "doors" });
    } else {
      setTypeOfDoors({ doorId, isFilled: false });
    }
    !inputValue && setInputErr(true);
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
    const doorId = activeFilter.doors;
    removeTypeOfDoors(doorId);
  };

  return (
    <$.DoorWrap $isActive={checkIfIsActiveDoor(state, 9)} onClick={handleClick}>
      <$.DoorType>
        <$.DoorElement $heightRatio={0.1}>
          {variableHeight !== 0 && (
            <$.DimensionsText>{variableHeight} cm</$.DimensionsText>
          )}
        </$.DoorElement>
        <$.DoorElement $heightRatio={0.35}>
          <$.InputNum
            placeholder="cm"
            value={inputValue || ""}
            onChange={(e) => handleOnChange(e.target.value)}
            onClick={handleInputClick}
            $isError={inputErr}
          />
          <$.LimitText $isError={inputErr}>
            {calcMinMaxDoorHeight(4, doors.height).text}
          </$.LimitText>
        </$.DoorElement>
        <$.DoorElement $heightRatio={0.1}>
          {variableHeight !== 0 && (
            <$.DimensionsText>{variableHeight} cm</$.DimensionsText>
          )}
        </$.DoorElement>
        <$.DoorElement $heightRatio={0.35}>
          <$.InputNum
            placeholder="cm"
            value={inputValue || ""}
            onChange={(e) => handleOnChange(e.target.value)}
            onClick={handleInputClick}
            $isError={inputErr}
          />
          <$.LimitText $isError={inputErr}>
            {calcMinMaxDoorHeight(4, doors.height).text}
          </$.LimitText>
        </$.DoorElement>
        <$.DoorElement $heightRatio={0.1}>
          {variableHeight !== 0 && (
            <$.DimensionsText>{variableHeight} cm</$.DimensionsText>
          )}
        </$.DoorElement>
      </$.DoorType>
    </$.DoorWrap>
  );
};

export default VariableDoor4;
