import useMainStore from "@/stores/useMainStore";
import { getUniqueDecors } from "@/utils/steps/step3/getUniqueDecors";
import * as $ from "@/styles/components/steps/step3/UsedDoorsDecor.styled";

import Decors from "./Decors";

const UsedDoorsDecor = () => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));

  const uniqueDecors = getUniqueDecors({ state });
  console.log(uniqueDecors.length);

  return (
    <$.Wrap $isVisible={uniqueDecors.length > 0}>
      <$.Title>Již použité dekory</$.Title>
      <Decors type={"usedDoors"} />
    </$.Wrap>
  );
};

export default UsedDoorsDecor;
