import * as $ from "@/styles/components/modules/modal/Module.styled";

const SpaceModal = ({ displayHeight, realHeight, isError }) => {
  return (
    <$.Space $height={displayHeight}>
      <$.SpaceLine />
      {isError !== null && !isError && realHeight ? `${realHeight} cm` : ""}
    </$.Space>
  );
};

export default SpaceModal;
