import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/components/modal/doors/ModalDoor.styled";

const ModalDoor = ({ width, height, overhang, id, children }) => {
  const {
    viewport,
    doors,
    activeDoorSection,
    setActiveDoorSection,
    productsAPI,
  } = useMainStore((state) => ({
    viewport: state.viewport,
    doors: state.doors,
    activeDoorSection: state.activeDoorSection,
    setActiveDoorSection: state.setActiveDoorSection,
    productsAPI: state.productsAPI,
  }));

  const { px } = viewport;
  const currentDoorSections = doors?.typeDoors[id]?.sections;
  const countOfSections =
    currentDoorSections && Object.keys(currentDoorSections).length;

  const handleClickSection = (sectionId) => {
    setActiveDoorSection({ doorId: id, sectionId: sectionId });
  };

  const getImgUrl = (sectionId) => {
    const decorId = doors.typeDoors[id].sections[sectionId].decorId || null;
    if (decorId) {
      const decor = productsAPI.dtd10.find((decor) => decor.id === decorId);
      return `/images/decors/${decor.id_manufacturer}.jpeg`;
    } else {
      return false;
    }
  };

  const getDoorElements = () => {
    const doorElement = [
      <$.HProfile
        key="top-profile"
        $width={px * doors.width}
        $height={px * viewport.thickness}
        $isTop={true}
      />,
    ];

    for (let i = 1; i <= countOfSections; i++) {
      const currentSection = doors.typeDoors[id].sections[i];

      const imageUrl = getImgUrl(i);

      if (i < countOfSections) {
        doorElement.push(
          <$.DoorSection key={i}>
            <$.DoorPart
              $bgImg={imageUrl}
              $width={px * currentSection.width}
              $height={px * currentSection.height}
              $isActive={
                activeDoorSection.doorId === id &&
                activeDoorSection.sectionId === i
              }
              onClick={() => handleClickSection(i)}
            />
            <$.HProfile
              key={`hprofile-${i}`}
              $width={px * doors.width}
              $height={px * viewport.thickness}
            />
          </$.DoorSection>
        );
      } else {
        doorElement.push(
          <$.DoorSection key={i}>
            <$.DoorPart
              $bgImg={imageUrl}
              $width={px * currentSection.width}
              $height={px * currentSection.height}
              $isActive={
                activeDoorSection.doorId === id &&
                activeDoorSection.sectionId === i
              }
              onClick={() => handleClickSection(i)}
            />
          </$.DoorSection>
        );
      }
    }

    doorElement.push(
      <$.HProfile
        key="bottom-profile"
        $width={px * doors.width}
        $height={px * viewport.thickness}
      />
    );

    return doorElement;
  };

  return (
    <$.DoorWrapper $width={width} $height={height} $overhang={overhang}>
      <$.Door>{doors.typeDoors[id] && getDoorElements()}</$.Door>
      {children}
    </$.DoorWrapper>
  );
};

export default ModalDoor;
