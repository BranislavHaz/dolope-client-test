import useMainStore from "@/stores/useMainStore";
import { calcDoorElementHeight } from "@/utils/steps/step2/calcDoorHeight";
import { checkIfIsActiveDoor } from "@/utils/steps/step2/checkIfIsActiveDoor";
import { nextStepFilterBox } from "@/utils/steps/step2/nextStepFilterBox";
import * as $ from "@/styles/components/steps/step2/TypeDoors.styled";

const getDoorSections = (countOfSections, doors) => {
  let sectionsObj = {};

  for (let i = 1; i <= countOfSections; i++) {
    sectionsObj = {
      ...sectionsObj,
      [i]: {
        width: doors.width,
        height: Math.round(doors.height / countOfSections),
      },
    };
  }

  return sectionsObj;
};

const FixedDoors = () => {
  const { state, doors, setTypeOfDoors, activeFilter } = useMainStore(
    (state) => ({
      state: state,
      doors: state.doors,
      setTypeOfDoors: state.setTypeOfDoors,
      activeFilter: state.activeFilter,
    })
  );

  const handleClick = (typeOfDoor) => {
    const doorId = activeFilter.doors;
    const sections = getDoorSections(typeOfDoor, doors);
    setTypeOfDoors({ doorId, sections, typeOfDoor });
    nextStepFilterBox({ state, type: "doors" });
  };

  return (
    <$.TypeDoorsWrap>
      <$.DoorWrap
        $isActive={checkIfIsActiveDoor(state, 1)}
        onClick={() => handleClick(1)}
      >
        <$.DoorType>
          <$.DoorElement $heightRatio={1}>
            <$.DimensionsText>
              {calcDoorElementHeight(1, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
        </$.DoorType>
      </$.DoorWrap>
      <$.DoorWrap
        $isActive={checkIfIsActiveDoor(state, 2)}
        onClick={() => handleClick(2)}
      >
        <$.DoorType>
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
      </$.DoorWrap>
      <$.DoorWrap
        $isActive={checkIfIsActiveDoor(state, 3)}
        onClick={() => handleClick(3)}
      >
        <$.DoorType>
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
      </$.DoorWrap>
      <$.DoorWrap
        $isActive={checkIfIsActiveDoor(state, 4)}
        onClick={() => handleClick(4)}
      >
        <$.DoorType>
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
      </$.DoorWrap>
      <$.DoorWrap
        $isActive={checkIfIsActiveDoor(state, 5)}
        onClick={() => handleClick(5)}
      >
        <$.DoorType>
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
      </$.DoorWrap>
    </$.TypeDoorsWrap>
  );
};

export default FixedDoors;
