import useMainStore from "@/stores/useMainStore";
import { calcMinMaxDoorHeight } from "@/utils/steps/step2/calcDoorHeight";
import { useState } from "react";

import * as $ from "@/styles/components/steps/step2/TypeDoors.styled";

const VariableDoor3 = () => {
  const { doors } = useMainStore((state) => ({
    doors: state.doors,
  }));

  const [inputValue, setInputValue] = useState(0);
  const [variableHeight, setVariableHeight] = useState(0);
  const [inputErr, setInputErr] = useState(false);

  const handleOnBlur = (value) => {
    const valueMM = value * 10;
    const { min, max } = calcMinMaxDoorHeight(2, doors.height);

    if (min <= valueMM && valueMM <= max) {
      setVariableHeight(Math.round((doors.height - valueMM * 2) / 10));
      setInputErr(false);
    } else {
      setVariableHeight(0);
      setInputErr(true);
    }
  };

  return (
    <$.DoorType>
      <$.DoorElement $heightRatio={0.4}>
        <$.InputNum
          placeholder="cm"
          value={inputValue || ""}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={(e) => handleOnBlur(e.target.value)}
          $isError={inputErr}
        />
        <$.LimitText $isError={inputErr}>
          {calcMinMaxDoorHeight(3, doors.height).text}
        </$.LimitText>
      </$.DoorElement>
      <$.DoorElement $heightRatio={0.2}>
        {variableHeight !== 0 && (
          <$.DimensionsText>{variableHeight} cm</$.DimensionsText>
        )}
      </$.DoorElement>
      <$.DoorElement $heightRatio={0.4}>
        <$.InputNum
          placeholder="cm"
          value={inputValue || ""}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={(e) => handleOnBlur(e.target.value)}
          $isError={inputErr}
        />
        <$.LimitText $isError={inputErr}>
          {calcMinMaxDoorHeight(3, doors.height).text}
        </$.LimitText>
      </$.DoorElement>
    </$.DoorType>
  );
};

export default VariableDoor3;
