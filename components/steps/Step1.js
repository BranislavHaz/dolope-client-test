import useMainStore from "@/stores/useMainStore";
import Title from "./ui/Title";
import SelectBox from "./ui/SelectBox";

const Step1 = () => {
  const { statusInput } = useMainStore((state) => ({
    statusInput: state.statusInput,
  }));
  return (
    <>
      <Title>Základní specifikace</Title>
      <SelectBox type={"sizeWardrobe"} isAccept={statusInput.sizeWardrobe} />
      <SelectBox type={"typeWardrobe"} />
      <SelectBox type={"countSections"} />
    </>
  );
};

export default Step1;
