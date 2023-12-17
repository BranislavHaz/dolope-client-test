import * as $ from "@/styles/components/modules/modal/Module.styled";

const SpaceModal = ({ displayHeight, realHeight }) => {
  return (
    <$.Space $height={displayHeight}>
      <$.SpaceLine />
      {realHeight} cm
    </$.Space>
  );
};

export default SpaceModal;
