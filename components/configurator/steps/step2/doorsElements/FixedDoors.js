import useMainStore from "@/stores/useMainStore";
import { calcDoorElementHeight } from "@/utils/configurator/steps/step2/calcDoorHeight";
import { checkIfIsActiveDoor } from "@/utils/configurator/steps/step2/checkIfIsActiveDoor";
import { nextStepFilterBox } from "@/utils/configurator/steps/step2/nextStepFilterBox";
import * as $ from "@/styles/configurator/components/steps/step2/TypeDoors.styled";

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
    //nextStepFilterBox({ state, type: "doors" });
  };

  const doorWidth = state.viewportSizes.modal.elWidth;
  const doorHeight = state.viewportSizes.modal.elHeight;

  return (
    <$.TypeDoorsWrap>
      <$.DoorWrap
        $width={doorWidth}
        $height={doorHeight}
        $isActive={checkIfIsActiveDoor(state, 1)}
        onClick={() => handleClick(1)}
      >
        {process.env.NODE_ENV === "development" && <$.DoorId>1</$.DoorId>}
        <$.DoorType>
          <$.DoorElement $height={doorHeight}>
            <$.DimensionsText>
              {calcDoorElementHeight(1, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
        </$.DoorType>
      </$.DoorWrap>
      <$.DoorWrap
        $width={doorWidth}
        $height={doorHeight}
        $isActive={checkIfIsActiveDoor(state, 2)}
        onClick={() => handleClick(2)}
      >
        {process.env.NODE_ENV === "development" && <$.DoorId>2</$.DoorId>}
        <$.DoorType>
          <$.DoorElement $height={doorHeight * 0.5}>
            <$.DimensionsText>
              {calcDoorElementHeight(2, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $height={doorHeight * 0.5}>
            <$.DimensionsText>
              {calcDoorElementHeight(2, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
        </$.DoorType>
      </$.DoorWrap>
      <$.DoorWrap
        $width={doorWidth}
        $height={doorHeight}
        $isActive={checkIfIsActiveDoor(state, 3)}
        onClick={() => handleClick(3)}
      >
        {process.env.NODE_ENV === "development" && <$.DoorId>3</$.DoorId>}
        <$.DoorType>
          <$.DoorElement $height={(doorHeight * 1) / 3}>
            <$.DimensionsText>
              {calcDoorElementHeight(3, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $height={(doorHeight * 1) / 3}>
            <$.DimensionsText>
              {calcDoorElementHeight(3, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $height={(doorHeight * 1) / 3}>
            <$.DimensionsText>
              {calcDoorElementHeight(3, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
        </$.DoorType>
      </$.DoorWrap>
      <$.DoorWrap
        $width={doorWidth}
        $height={doorHeight}
        $isActive={checkIfIsActiveDoor(state, 4)}
        onClick={() => handleClick(4)}
      >
        {process.env.NODE_ENV === "development" && <$.DoorId>4</$.DoorId>}
        <$.DoorType>
          <$.DoorElement $height={doorHeight * 0.25}>
            <$.DimensionsText>
              {calcDoorElementHeight(4, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $height={doorHeight * 0.25}>
            <$.DimensionsText>
              {calcDoorElementHeight(4, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $height={doorHeight * 0.25}>
            <$.DimensionsText>
              {calcDoorElementHeight(4, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $height={doorHeight * 0.25}>
            <$.DimensionsText>
              {calcDoorElementHeight(4, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
        </$.DoorType>
      </$.DoorWrap>
      <$.DoorWrap
        $width={doorWidth}
        $height={doorHeight}
        $isActive={checkIfIsActiveDoor(state, 5)}
        onClick={() => handleClick(5)}
      >
        {process.env.NODE_ENV === "development" && <$.DoorId>5</$.DoorId>}
        <$.DoorType>
          <$.DoorElement $height={(doorHeight * 1) / 5}>
            <$.DimensionsText>
              {calcDoorElementHeight(5, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $height={(doorHeight * 1) / 5}>
            <$.DimensionsText>
              {calcDoorElementHeight(5, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $height={(doorHeight * 1) / 5}>
            <$.DimensionsText>
              {calcDoorElementHeight(5, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $height={(doorHeight * 1) / 5}>
            <$.DimensionsText>
              {calcDoorElementHeight(5, doors.height)} cm
            </$.DimensionsText>
          </$.DoorElement>
          <$.DoorElement $height={(doorHeight * 1) / 5}>
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
