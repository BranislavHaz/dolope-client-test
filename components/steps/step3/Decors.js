import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import useTimeout from "@/hooks/useTimeout";

import { checkDoorsSectionsFilled } from "@/utils/steps/step3/checkDoorsSectionsFilled";

import * as $ from "@/styles/components/steps/step3/Decors";

const Decors = ({ type }) => {
  const {
    corpus,
    setCorpusDecorId,
    sideWalls,
    setSideWallsDecorId,
    doors,
    activeDoorSection,
    setActiveDoorSection,
    setDoorSectionDecorId,
    setIsModalActive,
    productsAPI,
    decorFilter,
    setStepsInputs,
    setBeScrolled,
  } = useMainStore((state) => ({
    corpus: state.corpus,
    setCorpusDecorId: state.setCorpusDecorId,
    sideWalls: state.sideWalls,
    setSideWallsDecorId: state.setSideWallsDecorId,
    doors: state.doors,
    activeDoorSection: state.activeDoorSection,
    setActiveDoorSection: state.setActiveDoorSection,
    setDoorSectionDecorId: state.setDoorSectionDecorId,
    setIsModalActive: state.setIsModalActive,
    productsAPI: state.productsAPI,
    decorFilter: state.decorFilter,
    setStepsInputs: state.setStepsInputs,
    setBeScrolled: state.setBeScrolled,
  }));

  const set = useTimeout();
  const normalizeString = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const productsToFilter =
    type === "corpus" || type === "sideWalls"
      ? productsAPI.dtd18
      : productsAPI.dtd10;

  const currentFilter = decorFilter[type];

  const filteredDecors = productsToFilter.filter((decor) => {
    const matchesManufacturer =
      currentFilter.manufacturer === "All" ||
      decor.manufacturer === currentFilter.manufacturer;

    const matchesDecorType =
      currentFilter.decorType === "all" ||
      decor.category === currentFilter.decorType;

    const isAvailable = decor.availability === true;

    const matchesSearch =
      !currentFilter.search ||
      normalizeString(decor.title).includes(
        normalizeString(currentFilter.search)
      );

    return (
      matchesManufacturer && matchesDecorType && isAvailable && matchesSearch
    );
  });

  const handleClick = (decorId) => {
    if (type === "corpus") {
      setCorpusDecorId(decorId);
      setStepsInputs("step3", "decorCorpus", true);
      set(() => {
        setIsModalActive(false);
      }, 280);
    }
    if (type === "sideWalls") {
      setSideWallsDecorId(decorId);
      setStepsInputs("step3", "decorSideWalls", true);
      set(() => {
        setIsModalActive(false);
      }, 280);
    }
    if (type === "doors") {
      setBeScrolled(true);
      const { doorId, sectionId } = activeDoorSection;
      setDoorSectionDecorId({ doorId, sectionId, decorId });
      setTimeout(() => setBeScrolled(false), 500);
      const isAllFilled = checkDoorsSectionsFilled(doors.typeDoors);
      isAllFilled
        ? setStepsInputs("step3", "decorDoors", true)
        : setStepsInputs("step3", "decorDoors", false);

      const countSectionCurrentDoor = Object.keys(
        doors.typeDoors[doorId].sections
      ).length;

      if (countSectionCurrentDoor > sectionId) {
        setTimeout(
          () => setActiveDoorSection({ doorId, sectionId: sectionId + 1 }),
          500
        );
      } else if (
        countSectionCurrentDoor === sectionId &&
        doors.count > doorId
      ) {
        setTimeout(
          () => setActiveDoorSection({ doorId: doorId + 1, sectionId: 1 }),
          500
        );
      } else {
        setTimeout(
          () => setActiveDoorSection({ doorId: 1, sectionId: 1 }),
          500
        );
      }
    }
  };

  const verifyActiveDecor = (decorId) => {
    if (type === "corpus") {
      return corpus.decorId === decorId;
    } else if (type === "sideWalls") {
      return sideWalls.decorId === decorId;
    } else if (type === "doors") {
      return (
        doors.typeDoors[activeDoorSection.doorId].sections[
          activeDoorSection.sectionId
        ].decorId === decorId
      );
    }
    return false;
  };

  const getDecors = () => {
    return filteredDecors.map((decor) => {
      return (
        <$.DecorWrap
          key={decor.id}
          $isActive={verifyActiveDecor(decor.id)}
          onClick={() => handleClick(decor.id)}
        >
          {
            <$.DecorImage>
              <Image
                src={`/images/decors/${decor.id_manufacturer}.jpeg`}
                layout="fill"
                objectPosition="center"
              />
            </$.DecorImage>
          }
          <$.DecorTitle>{`${decor.name} (${decor.id_manufacturer}) - ${decor.label} - ${decor.id}`}</$.DecorTitle>
        </$.DecorWrap>
      );
    });
  };

  return (
    <$.Wrap>
      <$.DecorsWrap>{getDecors()}</$.DecorsWrap>
    </$.Wrap>
  );
};

export default Decors;
