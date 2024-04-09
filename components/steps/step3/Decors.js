import { useEffect } from "react";
import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import useTimeout from "@/hooks/useTimeout";
import { getFilteredDecors } from "@/utils/steps/step3/getFilteredDecors";
import { getUniqueDecors } from "@/utils/steps/step3/getUniqueDecors";

import { checkDoorsSectionsFilled } from "@/utils/steps/step3/checkDoorsSectionsFilled";

import * as $ from "@/styles/components/steps/step3/Decors.styled";

const Decors = ({ type }) => {
  const {
    state,
    corpus,
    setCorpusDecorId,
    sideWalls,
    setSideWallsDecorId,
    doors,
    activeDoorSection,
    setActiveDoorSection,
    setDoorSectionDecorId,
    setStepsInputs,
    setBeScrolled,
  } = useMainStore((state) => ({
    state: state,
    corpus: state.corpus,
    setCorpusDecorId: state.setCorpusDecorId,
    sideWalls: state.sideWalls,
    setSideWallsDecorId: state.setSideWallsDecorId,
    doors: state.doors,
    activeDoorSection: state.activeDoorSection,
    setActiveDoorSection: state.setActiveDoorSection,
    setDoorSectionDecorId: state.setDoorSectionDecorId,
    setStepsInputs: state.setStepsInputs,
    setBeScrolled: state.setBeScrolled,
  }));

  useEffect(() => {
    const isAllFilled = checkDoorsSectionsFilled(doors.typeDoors);
    isAllFilled
      ? setStepsInputs("step3", "decorDoors", true)
      : setStepsInputs("step3", "decorDoors", false);
  }, [doors.typeDoors]);

  const set = useTimeout();

  const filteredDecors =
    type === "usedDoors"
      ? getUniqueDecors({ state })
      : getFilteredDecors({ state, type });

  const handleClick = (decorId) => {
    if (type === "corpus") {
      setCorpusDecorId(decorId);
      setStepsInputs("step3", "decorCorpus", true);
    }
    if (type === "sideWalls") {
      setSideWallsDecorId(decorId);
      setStepsInputs("step3", "decorSideWalls", true);
    }
    if (type === "doors" || type === "usedDoors") {
      setBeScrolled(true);
      const { doorId, sectionId } = activeDoorSection;
      setDoorSectionDecorId({ doorId, sectionId, decorId });

      const countSectionCurrentDoor = Object.keys(
        doors.typeDoors[doorId].sections
      ).length;

      const nextSectionDecor = ({ doorId, sectionId }) => {
        setBeScrolled(false);
        setActiveDoorSection({ doorId, sectionId });
      };

      if (countSectionCurrentDoor > sectionId) {
        set(() => nextSectionDecor({ doorId, sectionId: sectionId + 1 }), 700);
      } else if (
        countSectionCurrentDoor === sectionId &&
        doors.count > doorId
      ) {
        set(() => nextSectionDecor({ doorId: doorId + 1, sectionId: 1 }), 700);
      } else {
        set(() => nextSectionDecor({ doorId: 1, sectionId: 1 }), 700);
      }
    }
  };

  const verifyActiveDecor = (decorId) => {
    if (type === "corpus") {
      return corpus.decorId === decorId;
    } else if (type === "sideWalls") {
      return sideWalls.decorId === decorId;
    } else if (type === "doors" || type === "usedDoors") {
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
      <$.DecorsWrap $isUsed={type === "usedDoors"}>{getDecors()}</$.DecorsWrap>
    </$.Wrap>
  );
};

export default Decors;
