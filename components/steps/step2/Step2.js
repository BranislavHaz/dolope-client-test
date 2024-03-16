import useMainStore from "@/stores/useMainStore";
import Title from "../ui/Title";
import SelectBox from "../ui/SelectBox";

const Step2 = () => {
  const { stepsInputs } = useMainStore((state) => ({
    stepsInputs: state.stepsInputs,
  }));
  return (
    <>
      <Title>Výběr typů</Title>
      <SelectBox
        type={"typeSections"}
        isAccept={stepsInputs.step2.typeSections}
      />
      <SelectBox type={"typeDoors"} isAccept={stepsInputs.step2.typeDoors} />
    </>
  );
};

export default Step2;
