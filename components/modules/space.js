import * as $ from "./space.styled";

const Space = ({ width, height, size }) => {
  return (
    <$.Space $width={width} $height={height}>
      {Math.floor(size.width)} x {Math.floor(size.height)} mm
    </$.Space>
  );
};

export default Space;
