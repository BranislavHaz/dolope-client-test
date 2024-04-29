import { useEffect } from "react";
import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import useTimeout from "@/hooks/useTimeout";
import { getFilteredDecors } from "@/utils/steps/step3/getFilteredDecors";
import { getUniqueDecors } from "@/utils/steps/step3/getUniqueDecors";

import { checkDoorsSectionsFilled } from "@/utils/steps/step3/checkDoorsSectionsFilled";

import toast from "react-hot-toast";

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
    decorFilter,
    modal,
    productsAPI,
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
    decorFilter: state.decorFilter,
    modal: state.modal,
    productsAPI: state.productsAPI,
  }));

  useEffect(() => {
    setBeScrolled(true);
    set(() => setBeScrolled(false), 700);
  }, [modal.type]);

  const set = useTimeout();

  const filteredDecors =
    type === "usedDoors"
      ? getUniqueDecors({ state })
      : getFilteredDecors({ state, type });

  const handleClick = (decorId) => {
    if (type === "corpus") {
      setCorpusDecorId(decorId);
      setStepsInputs("step3", "decorCorpus", true);
      toast.success("Dekor vnitřní části skříně byl uložen!", {
        className: "toast-tablet",
      });
    }
    if (type === "sideWalls") {
      setSideWallsDecorId(decorId);
      setStepsInputs("step3", "decorSideWalls", true);
      toast.success("Dekor vnější části skříně byl uložen!", {
        className: "toast-tablet",
      });
    }
    if (type === "doors" || type === "usedDoors") {
      setBeScrolled(true);
      const { doorId, sectionId } = activeDoorSection;
      const { materialType } = decorFilter.doors;

      setDoorSectionDecorId({ doorId, sectionId, decorId, materialType });

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

      const isAllDoorsDecorFilled = checkDoorsSectionsFilled(doors.typeDoors);

      if (isAllDoorsDecorFilled) {
        setStepsInputs("step3", "decorDoors", true);
        toast.success("Dekory dveří byly uloženy!", {
          className: "toast-tablet",
        });
      } else {
        setStepsInputs("step3", "decorDoors", false);
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
    const prices =
      type !== "usedDoors"
        ? filteredDecors.map((item) => parseFloat(item.price_with_vat))
        : productsAPI.dtd10.map((item) => parseFloat(item.price_with_vat));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    const range = maxPrice - minPrice;
    const cheapThreshold = minPrice + range / 3;
    const expensiveThreshold = maxPrice - range / 3;

    return filteredDecors.map((decor) => {
      const price = parseFloat(decor.price_with_vat);
      let categoryLabel;
      if (price <= cheapThreshold) {
        categoryLabel = 1;
      } else if (price >= expensiveThreshold) {
        categoryLabel = 3;
      } else {
        categoryLabel = 2;
      }

      if (decor.category === "glass" || decor.category === "mirror") {
        return (
          <$.DecorWrap
            key={decor.id}
            $isActive={verifyActiveDecor(decor.id)}
            onClick={() => handleClick(decor.id)}
          >
            <$.PriceLabelWrap $priceLevel={3}>
              {decor.price_with_vat} Kč/m2
            </$.PriceLabelWrap>
            <$.DecorImage>
              <Image
                src={`/images/glass/${decor.id}.jpeg`}
                layout="fill"
                objectPosition="center"
              />
            </$.DecorImage>
            <$.DecorTitle>{`${
              decor.category === "glass"
                ? decor.name_cz + " - sklo"
                : decor.name_cz
            } (${decor.id})`}</$.DecorTitle>
          </$.DecorWrap>
        );
      }

      return (
        <$.DecorWrap
          key={decor.id}
          $isActive={verifyActiveDecor(decor.id)}
          onClick={() => handleClick(decor.id)}
        >
          <$.PriceLabelWrap $priceLevel={categoryLabel}>
            {decor.price_with_vat} Kč/m2
          </$.PriceLabelWrap>
          <$.DecorImage>
            <Image
              src={`/images/decors/${decor.id_manufacturer}.jpeg`}
              layout="fill"
              objectPosition="center"
            />
          </$.DecorImage>
          <$.DecorTitle>{`${decor.name} (${decor.id_manufacturer}) - ${decor.label}`}</$.DecorTitle>
        </$.DecorWrap>
      );
    });
  };

  return (
    <$.Wrap $isUsed={type === "usedDoors"} $isDoors={type === "doors"}>
      <$.DecorsWrap $isUsed={type === "usedDoors"}>{getDecors()}</$.DecorsWrap>
    </$.Wrap>
  );
};

export default Decors;
