import * as $ from "@/styles/components/modules/modal/Module.styled";

const VariableHangerModal = ({
  displayHeight,
  realHeight,
  setVariableHeight,
  minMaxHeight,
  inputErr,
  setInputErr,
}) => {
  const { minValue, maxValue } = minMaxHeight();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setVariableHeight(inputValue);

    if (inputValue === "undefined" || inputValue === "") {
      setInputErr(null);
    } else if (inputValue < minValue || inputValue > maxValue) {
      setInputErr(true);
    } else {
      setInputErr(false);
    }
  };

  return (
    <$.VariableHanger $height={displayHeight} $isVariable={true}>
      <$.SpaceLine />
      <$.InputNum
        placeholder="cm"
        value={realHeight || ""}
        onChange={(e) => handleChange(e)}
        $isError={inputErr}
      />
      <$.LimitText $isError={inputErr}>
        {minValue}-{maxValue} cm
      </$.LimitText>
    </$.VariableHanger>
  );
};

export default VariableHangerModal;
