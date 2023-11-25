import useMainStore from "@/stores/useMainStore";
import { calcDoorElementHeight } from "@/utils/steps/step2/calcDoorHeight";
import * as $ from "@/styles/components/steps/step2/TypeDoors.styled";

const FixedDoors = () => {
  const { doors } = useMainStore((state) => ({
    doors: state.doors,
  }));

  return (
    <$.TypeDoorsWrap>
      <$.DoorType>
        <$.DoorElement $heightRatio={1}>
          <$.DimensionsText>
            {calcDoorElementHeight(1, doors.height)} cm
          </$.DimensionsText>
        </$.DoorElement>
      </$.DoorType>
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
      <$.DoorType $isActive={true}>
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
    </$.TypeDoorsWrap>
  );
};

export default FixedDoors;
