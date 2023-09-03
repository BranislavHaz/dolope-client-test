import * as $ from "./shelf.styled";

const Shelf = ({ width, height }) => {
  return <$.Shelf $width={width} $height={Math.ceil(height * 10) / 10} />;
};

export default Shelf;
