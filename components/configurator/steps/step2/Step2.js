import useMainStore from "@/stores/useMainStore";
import Title from "../ui/Title";
import SelectBox from "../ui/SelectBox";

const Step2 = ({ translations: t }) => {
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
      silver: t.step2.colors.silver,
      black: t.step2.colors.black,
      white: t.step2.colors.white,
      champagne: t.step2.colors.champagne,
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
      <Title>{t.step2.title}</Title>
      <SelectBox
        type={"typeSections"}
        isAccept={stepsInputs.step2.typeSections}
        isActive={modal.isActive && modal.type === "typeSections"}
        id={1}
        translations={t.select_box}
      />
      <SelectBox
        type={"typeDoors"}
        isAccept={stepsInputs.step2.typeDoors}
        isActive={modal.isActive && modal.type === "typeDoors"}
        id={2}
        translations={t.select_box}
      />
      <SelectBox
        type={"typeProfiles"}
        text={getTypeProfileText()}
        isAccept={stepsInputs.step2.typeProfiles}
        isActive={modal.isActive && modal.type === "typeProfiles"}
        id={3}
        translations={t.select_box}
      />
    </>
  );
};

export default Step2;
