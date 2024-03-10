import * as $ from "@/styles/components/modules/modal/Module.styled";

const HangerModal = ({ displayHeight, realHeight }) => {
  return (
    <$.Hanger $height={displayHeight}>
      <$.SpaceLine />
      {realHeight} cm
    </$.Hanger>
  );
};

export default HangerModal;
