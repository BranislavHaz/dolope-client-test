import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/components/modules/modal/Module.styled";

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
  );
};

export default VariableSpaceModal;
