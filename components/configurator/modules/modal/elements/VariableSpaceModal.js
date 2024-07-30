import { useState, useEffect } from "react";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/configurator/components/modules/modal/Module.styled";

const VariableSpaceModal = ({
  displayHeight,
  realHeight,
  setVariableHeight,
  minMaxHeight,
  inputErr,
  setInputErr,
}) => {
  const { currentSection } = useMainStore((state) => ({
    currentSection: state.activeFilter.sections,
  }));
  const { minValue, maxValue } = minMaxHeight();
  const [isVariable, setIsVariable] = useState(true);

  useEffect(() => {
    if (maxValue < minValue + 5) {
      setIsVariable(false);
      setVariableHeight((variableHeight) => ({
        ...variableHeight,
        [currentSection]: minValue,
      }));
    }
  }, [minValue, maxValue]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setVariableHeight((variableHeight) => ({
      ...variableHeight,
      [currentSection]: inputValue,
    }));

    if (inputValue === "undefined" || inputValue === "") {
      setInputErr((inputErr) => ({ ...inputErr, [currentSection]: null }));
    } else if (inputValue < minValue || inputValue > maxValue) {
      setInputErr((inputErr) => ({ ...inputErr, [currentSection]: true }));
    } else {
      setInputErr((inputErr) => ({ ...inputErr, [currentSection]: false }));
    }
  };

  return (
    <>
      {isVariable && (
        <$.VariableSpace $height={displayHeight}>
          <$.InputNum
            placeholder="cm"
            value={realHeight || ""}
            onChange={(e) => handleChange(e)}
            $isError={inputErr}
          />
          <$.LimitText $isError={inputErr}>
            {minValue}-{maxValue} cm
          </$.LimitText>
        </$.VariableSpace>
      )}
      {!isVariable && (
        <$.Space $height={displayHeight}>
          <$.SpaceLine />
          {minValue} cm
        </$.Space>
      )}
    </>
  );
};

export default VariableSpaceModal;
