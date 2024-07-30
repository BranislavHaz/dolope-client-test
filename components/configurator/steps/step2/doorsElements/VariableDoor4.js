import useMainStore from "@/stores/useMainStore";
import {
  getVariableHeightsDoor,
  getInputErrs,
  getSpaceHeights,
} from "@/utils/configurator/steps/step2/getDefaultStates";
import { calcMinMaxDoorHeight } from "@/utils/configurator/steps/step2/calcDoorHeight";
import { checkIfIsActiveDoor } from "@/utils/configurator/steps/step2/checkIfIsActiveDoor";
import { nextStepFilterBox } from "@/utils/configurator/steps/step2/nextStepFilterBox";
import { useState } from "react";

import * as $ from "@/styles/components/steps/step2/TypeDoors.styled";

const VariableDoor4 = ({ id }) => {
  const { state, doors, setTypeOfDoors, removeTypeOfDoors, currentDoor } =
    useMainStore((state) => ({
      state: state,
      doors: state.doors,
      setTypeOfDoors: state.setTypeOfDoors,
      removeTypeOfDoors: state.removeTypeOfDoors,
      currentDoor: state.activeFilter.doors,
    }));

  const [variableHeight, setVariableHeight] = useState(
    getVariableHeightsDoor(state, id)
  );
  const [spaceHeight, setSpaceHeight] = useState(getSpaceHeights(state, id));
  const [inputErr, setInputErr] = useState(getInputErrs(state));

  const handleOnChange = (value) => {
    const valueMM = value * 10;
    const { min, max } = calcMinMaxDoorHeight(4, doors.height);

    setVariableHeight((variableHeight) => ({
      ...variableHeight,
      [currentDoor]: value,
    }));

    if (valueMM === "undefined" || valueMM === "" || valueMM === 0) {
      setInputErr((inputErr) => ({ ...inputErr, [currentDoor]: null }));
    } else if (min <= valueMM && valueMM <= max) {
      setSpaceHeight((spaceHeight) => ({
        ...spaceHeight,
        [currentDoor]: +((doors.height - valueMM * 2) / 10).toFixed(0) / 3,
      }));
      setInputErr((inputErr) => ({ ...inputErr, [currentDoor]: false }));
    } else {
      setSpaceHeight((spaceHeight) => ({
        ...spaceHeight,
        [currentDoor]: 0,
      }));
      setInputErr((inputErr) => ({ ...inputErr, [currentDoor]: true }));
    }
  };

  const handleClick = () => {
    const doorId = currentDoor;

    if (variableHeight[currentDoor] > 0 && !inputErr[currentDoor]) {
      const typeOfDoor = id;
      const currentVariableHeight = variableHeight[currentDoor] * 10;
      const currentSpaceHeight = spaceHeight[currentDoor] * 10;
      const fixedHeight = Math.round(
        (doors.height - variableHeight[currentDoor] * 2 * 10) / 3
      );
      const sections = {
        1: { width: doors.width, height: fixedHeight },
        2: {
          width: doors.width,
          height: Math.round(variableHeight[currentDoor] * 10),
        },
        3: { width: doors.width, height: fixedHeight },
        4: {
          width: doors.width,
          height: Math.round(variableHeight[currentDoor] * 10),
        },
        5: { width: doors.width, height: fixedHeight },
      };
      setTypeOfDoors({
        doorId,
        variableHeight: currentVariableHeight,
        spaceHeight: currentSpaceHeight,
        sections,
        typeOfDoor,
      });
      //nextStepFilterBox({ state, type: "doors" });
    } else {
      setTypeOfDoors({ doorId, isFilled: false });
    }
    !variableHeight[currentDoor] &&
      setInputErr((inputErr) => ({ ...inputErr, [currentDoor]: true }));
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
    const doorId = currentDoor;
    removeTypeOfDoors(doorId);
  };

  const doorWidth = state.viewportSizes.modal.elWidth;
  const doorHeight = state.viewportSizes.modal.elHeight;

  return (
    <$.DoorWrap
      $width={doorWidth}
      $height={doorHeight}
      $isActive={checkIfIsActiveDoor(state, 9)}
      onClick={handleClick}
    >
      <$.DoorType>
        <$.DoorElement $height={doorHeight * 0.1}>
          {spaceHeight[currentDoor] !== 0 && (
            <$.DimensionsText>{spaceHeight[currentDoor]} cm</$.DimensionsText>
          )}
        </$.DoorElement>
        <$.DoorElement $height={doorHeight * 0.35}>
          <$.InputNum
            placeholder="cm"
            value={variableHeight[currentDoor]}
            onChange={(e) => handleOnChange(e.target.value)}
            onClick={handleInputClick}
            $isError={inputErr[currentDoor]}
          />
          <$.LimitText $isError={inputErr[currentDoor]}>
            {calcMinMaxDoorHeight(4, doors.height).text}
          </$.LimitText>
        </$.DoorElement>
        <$.DoorElement $height={doorHeight * 0.1}>
          {spaceHeight[currentDoor] !== 0 && (
            <$.DimensionsText>{spaceHeight[currentDoor]} cm</$.DimensionsText>
          )}
        </$.DoorElement>
        <$.DoorElement $height={doorHeight * 0.35}>
          <$.InputNum
            placeholder="cm"
            value={variableHeight[currentDoor]}
            onChange={(e) => handleOnChange(e.target.value)}
            onClick={handleInputClick}
            $isError={inputErr[currentDoor]}
          />
          <$.LimitText $isError={inputErr[currentDoor]}>
            {calcMinMaxDoorHeight(4, doors.height).text}
          </$.LimitText>
        </$.DoorElement>
        <$.DoorElement $height={doorHeight * 0.1}>
          {spaceHeight[currentDoor] !== 0 && (
            <$.DimensionsText>{spaceHeight[currentDoor]} cm</$.DimensionsText>
          )}
        </$.DoorElement>
      </$.DoorType>
    </$.DoorWrap>
  );
};

export default VariableDoor4;
