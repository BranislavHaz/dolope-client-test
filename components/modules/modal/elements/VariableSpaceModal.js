import { useEffect } from "react";
import * as $ from "@/styles/components/modules/modal/Module.styled";

const VariableSpaceModal = ({
  displayHeight,
  realHeight,
  setVariableHeight,
  minMaxHeight,
  inputErr,
  setInputErr,
}) => {
  const handleInputClick = () => {};

  const { minValue, maxValue } = minMaxHeight();

  useEffect(() => {
    if (realHeight < minValue || realHeight > maxValue) {
      setInputErr(null);
    }
  }, [realHeight]);

  const handleOnBlur = () => {
    if (realHeight < minValue || (realHeight > maxValue && realHeight)) {
      setInputErr(true);
    } else {
      realHeight !== undefined && setInputErr(false);
    }
  };

  return (
    <$.VariableSpace $height={displayHeight} $isVariable={true}>
      <$.InputNum
        placeholder="cm"
        value={realHeight || ""}
        onChange={(e) => setVariableHeight(e.target.value)}
        onBlur={handleOnBlur}
        onClick={handleInputClick}
        $isError={inputErr}
      />
      <$.LimitText $isError={inputErr}>
        {minValue}-{maxValue} cm
      </$.LimitText>
    </$.VariableSpace>
  );
};

export default VariableSpaceModal;
