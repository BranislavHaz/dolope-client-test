import useMainStore from "@/stores/useMainStore";
import Title from "../ui/Title";

import * as $ from "@/styles/components/steps/step2/TypeDoors.styled";
import { useState } from "react";

const TypeDoors = () => {
  const { doors } = useMainStore((state) => ({
    doors: state.doors,
  }));

  const [inputErr, setInputErr] = useState({
    1: { 1: false },
  });
  const [inputValue, setInputValue] = useState({
    1: { 1: 0 },
  });
  const [variableHeight, setVariableHeight] = useState({
    1: 0,
  });

  const { height } = doors;

  const getDoorElementHeight = (factor) => {
    return Math.round(height / factor / 10);
  };

  const getMinMax = (type) => {
    const minHeight = 200;
    const minHeightCm = 20;

    switch (type) {
      case 1:
        const max = Math.round((height - minHeight) / 10);
        return {
          min: minHeight,
          max: max * 10,
          text: `${minHeightCm}-${max} cm`,
        };

      default:
        break;
    }
  };

  const handleBlur = (type, order, value) => {
    const valueMM = value * 10;
    switch (type) {
      case 1:
        const { min, max } = getMinMax(type);
        if (min <= valueMM && valueMM <= max) {
          setInputErr({ ...inputErr, [type]: { [order]: false } });
          setInputValue({
            ...inputValue,
            [type]: { [order]: valueMM },
          });
          setVariableHeight({
            ...variableHeight,
            [type]: Math.round((height - valueMM) / 10),
          });
        } else {
          setInputErr({ ...inputErr, [type]: { [order]: true } });
        }

      default:
        break;
    }
  };

  const getHeightRatio = (valueMM) => {
    return valueMM / height;
  };

  return (
    <$.Wrap $fullHeight={height}>
      <Title>Fixní výška elementů</Title>
      <$.TypeDoorsWrap>
        <$.DoorType>
          <$.DoorElement $heightRatio={1}>
            <$.DimensionsText>{getDoorElementHeight(1)} cm</$.DimensionsText>
          </$.DoorElement>
        </$.DoorType>
        <$.DoorType>
          <$.DoorElement $heightRatio={0.5}>
            <$.DimensionsText>{getDoorElementHeight(2)} cm</$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $heightRatio={0.5}>
            <$.DimensionsText>{getDoorElementHeight(2)} cm</$.DimensionsText>
          </$.DoorElement>
        </$.DoorType>
        <$.DoorType>
          <$.DoorElement $heightRatio={0.33}>
            <$.DimensionsText>{getDoorElementHeight(3)} cm</$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $heightRatio={0.33}>
            <$.DimensionsText>{getDoorElementHeight(3)} cm</$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $heightRatio={0.33}>
            <$.DimensionsText>{getDoorElementHeight(3)} cm</$.DimensionsText>
          </$.DoorElement>
        </$.DoorType>
        <$.DoorType>
          <$.DoorElement $heightRatio={0.25}>
            <$.DimensionsText>{getDoorElementHeight(4)} cm</$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $heightRatio={0.25}>
            <$.DimensionsText>{getDoorElementHeight(4)} cm</$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $heightRatio={0.25}>
            <$.DimensionsText>{getDoorElementHeight(4)} cm</$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $heightRatio={0.25}>
            <$.DimensionsText>{getDoorElementHeight(4)} cm</$.DimensionsText>
          </$.DoorElement>
        </$.DoorType>
        <$.DoorType>
          <$.DoorElement $heightRatio={0.2}>
            <$.DimensionsText>{getDoorElementHeight(5)} cm</$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $heightRatio={0.2}>
            <$.DimensionsText>{getDoorElementHeight(5)} cm</$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $heightRatio={0.2}>
            <$.DimensionsText>{getDoorElementHeight(5)} cm</$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $heightRatio={0.2}>
            <$.DimensionsText>{getDoorElementHeight(5)} cm</$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $heightRatio={0.2}>
            <$.DimensionsText>{getDoorElementHeight(5)} cm</$.DimensionsText>
          </$.DoorElement>
        </$.DoorType>
      </$.TypeDoorsWrap>
      <Title>Variabilní výška elementů</Title>
      <$.TypeDoorsWrap>
        <$.DoorType>
          <$.DoorElement $heightRatio={getHeightRatio(variableHeight[1] * 10)}>
            {variableHeight[1] && (
              <$.DimensionsText>{variableHeight[1]} cm</$.DimensionsText>
            )}
          </$.DoorElement>
          <$.DoorElement $heightRatio={getHeightRatio(inputValue[1][1])}>
            <$.InputNum
              placeholder="cm"
              $isError={inputErr[1][1]}
              onBlur={(e) => handleBlur(1, 1, e.target.value)}
            />
            <$.LimitText $isError={inputErr[1][1]}>
              {getMinMax(1).text}
            </$.LimitText>
          </$.DoorElement>
        </$.DoorType>
      </$.TypeDoorsWrap>
    </$.Wrap>
  );
};

export default TypeDoors;
