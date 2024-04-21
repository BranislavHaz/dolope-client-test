import useMainStore from "@/stores/useMainStore";
import Title from "../ui/Title";
import SelectBox from "../ui/SelectBox";

const Step2 = () => {
  const { doors, stepsInputs, modal } = useMainStore((state) => ({
    doors: state.doors,
    stepsInputs: state.stepsInputs,
    modal: state.modal,
  }));

  const getTypeProfileText = () => {
    const nameMapping = {
      london: "London",
      berlin: "Berlin",
      paris: "Paris",
      wien: "Wien",
      zurich: "Zürich",
    };

    const colorMapping = {
      silver: "stříbrná",
      black: "černá matná",
      white: "bílá lesklá",
      champagne: "šampaň",
    };

    if (
      doors.selectedProfile &&
      doors.selectedProfile.handle !== "unfilled" &&
      doors.selectedProfile.color !== "unfilled"
    ) {
      const handle = doors.selectedProfile.handle;
      const color = doors.selectedProfile.color;
      return `${nameMapping[handle]} | ${colorMapping[color]}`;
    }
  };

  return (
    <>
      <Title>Výběr typů</Title>
      <SelectBox
        type={"typeSections"}
        isAccept={stepsInputs.step2.typeSections}
        isActive={modal.isActive && modal.type === "typeSections"}
        id={1}
      />
      <SelectBox
        type={"typeDoors"}
        isAccept={stepsInputs.step2.typeDoors}
        isActive={modal.isActive && modal.type === "typeDoors"}
        id={2}
      />
      <SelectBox
        type={"typeProfiles"}
        text={getTypeProfileText()}
        isAccept={stepsInputs.step2.typeProfiles}
        isActive={modal.isActive && modal.type === "typeProfiles"}
        id={3}
      />
    </>
  );
};

export default Step2;
