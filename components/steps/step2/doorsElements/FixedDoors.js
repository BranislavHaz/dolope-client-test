import useMainStore from "@/stores/useMainStore";
import { calcDoorElementHeight } from "@/utils/steps/step2/calcDoorHeight";
import * as $ from "@/styles/components/steps/step2/TypeDoors.styled";

const getDoorSections = (countOfSections, doors) => {
  const sectionsArr = [];

  for (let i = 1; i <= countOfSections; i++) {
    sectionsArr.push({
      id: i,
      width: doors.width,
      height: Math.round(doors.height / countOfSections),
    });
  }

  return sectionsArr;
};

const FixedDoors = () => {
  const {
    doors,
    setTypeOfDoors,
    activeFilter,
    setIsModalActive,
    setActiveFilter,
  } = useMainStore((state) => ({
    doors: state.doors,
    setTypeOfDoors: state.setTypeOfDoors,
    activeFilter: state.activeFilter,
    setIsModalActive: state.setIsModalActive,
    setActiveFilter: state.setActiveFilter,
  }));

  const handleClick = (countOfSections) => {
    const doorId = activeFilter.doors;
    const sections = getDoorSections(countOfSections, doors);
    setTypeOfDoors({ doorId, sections });

    if (doorId === doors.count) {
      setIsModalActive(false);
    } else {
      const currentActiveDoor = activeFilter.doors;
      setActiveFilter("doors", currentActiveDoor + 1);
    }
  };

  return (
    <$.TypeDoorsWrap>
      <$.DoorType onClick={() => handleClick(1)}>
        <$.DoorElement $heightRatio={1}>
          <$.DimensionsText>
            {calcDoorElementHeight(1, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
      </$.DoorType>
      <$.DoorType onClick={() => handleClick(2)}>
        <$.DoorElement $heightRatio={0.5}>
          <$.DimensionsText>
            {calcDoorElementHeight(2, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
        <$.DoorElement $heightRatio={0.5}>
          <$.DimensionsText>
            {calcDoorElementHeight(2, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
      </$.DoorType>
      <$.DoorType onClick={() => handleClick(3)}>
        <$.DoorElement $heightRatio={0.33}>
          <$.DimensionsText>
            {calcDoorElementHeight(3, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
        <$.DoorElement $heightRatio={0.33}>
          <$.DimensionsText>
            {calcDoorElementHeight(3, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
        <$.DoorElement $heightRatio={0.33}>
          <$.DimensionsText>
            {calcDoorElementHeight(3, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
      </$.DoorType>
      <$.DoorType $isActive={true} onClick={() => handleClick(4)}>
        <$.DoorElement $heightRatio={0.25}>
          <$.DimensionsText>
            {calcDoorElementHeight(4, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
        <$.DoorElement $heightRatio={0.25}>
          <$.DimensionsText>
            {calcDoorElementHeight(4, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
        <$.DoorElement $heightRatio={0.25}>
          <$.DimensionsText>
            {calcDoorElementHeight(4, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
        <$.DoorElement $heightRatio={0.25}>
          <$.DimensionsText>
            {calcDoorElementHeight(4, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
      </$.DoorType>
      <$.DoorType onClick={() => handleClick(5)}>
        <$.DoorElement $heightRatio={0.2}>
          <$.DimensionsText>
            {calcDoorElementHeight(5, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
        <$.DoorElement $heightRatio={0.2}>
          <$.DimensionsText>
            {calcDoorElementHeight(5, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
        <$.DoorElement $heightRatio={0.2}>
          <$.DimensionsText>
            {calcDoorElementHeight(5, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
        <$.DoorElement $heightRatio={0.2}>
          <$.DimensionsText>
            {calcDoorElementHeight(5, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
        <$.DoorElement $heightRatio={0.2}>
          <$.DimensionsText>
            {calcDoorElementHeight(5, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
      </$.DoorType>
    </$.TypeDoorsWrap>
  );
};

export default FixedDoors;
