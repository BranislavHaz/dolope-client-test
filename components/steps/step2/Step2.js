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
      <SelectBox type={"typeSections"} />
      <SelectBox type={"typeDoors"} isAccept={stepsInputs.step2.typeDoors} />
    </>
  );
};

export default Step2;
