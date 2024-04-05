import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/components/elements/Handle.styled";

const Handle = ({ width, isFirst = false, isLast = false }) => {
  const { doors } = useMainStore((state) => ({
    doors: state.doors,
  }));

  return (
    <$.Handle
      $width={width}
      $isFirst={isFirst}
      $isLast={isLast}
      $profileColor={doors.selectedProfile.color}
    />
  );
};

export default Handle;
