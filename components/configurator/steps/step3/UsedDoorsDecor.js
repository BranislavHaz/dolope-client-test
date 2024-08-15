import useMainStore from "@/stores/useMainStore";
import { getUniqueDecors } from "@/utils/configurator/steps/step3/getUniqueDecors";
import * as $ from "@/styles/configurator/components/steps/step3/UsedDoorsDecor.styled";

import Decors from "./Decors";

const UsedDoorsDecor = ({ translations: t }) => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));

  const uniqueDecors = getUniqueDecors({ state });

  return (
    <$.Wrap $isVisible={uniqueDecors.length > 0}>
      <$.Title>{t.used_decors.title}</$.Title>
      <Decors type={"usedDoors"} translations={t} />
    </$.Wrap>
  );
};

export default UsedDoorsDecor;
