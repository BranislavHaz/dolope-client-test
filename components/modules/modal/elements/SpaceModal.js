import * as $ from "@/styles/components/modules/modal/Module.styled";

const SpaceModal = ({ displayHeight, realHeight, isError }) => {
  console.log(isError);
  return (
    <$.Space $height={displayHeight}>
      <$.SpaceLine />
      {isError !== null && !isError && `${realHeight} cm`}
    </$.Space>
  );
};

export default SpaceModal;
