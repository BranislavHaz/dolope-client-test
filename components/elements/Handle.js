import * as $ from "@/styles/components/elements/Handle.styled";

const Handle = ({ width, isFirst = false, isLast = false }) => {
  return <$.Handle $width={width} $isFirst={isFirst} $isLast={isLast} />;
};

export default Handle;
