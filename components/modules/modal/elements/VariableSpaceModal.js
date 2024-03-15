import * as $ from "@/styles/components/modules/modal/Module.styled";

const VariableSpaceModal = ({
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