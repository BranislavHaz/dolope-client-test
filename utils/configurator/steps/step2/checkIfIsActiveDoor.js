export const checkIfIsActiveDoor = (state, doorId) => {
  const currentActiveDoor = state?.activeFilter?.doors;
  const activeDoorType = state?.doors?.typeDoors[currentActiveDoor]
    ? state.doors.typeDoors[currentActiveDoor].typeOfDoor
    : 0;
  return doorId === activeDoorType;
};
