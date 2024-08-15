import { useEffect, useState } from "react";
import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import useTimeout from "@/hooks/useTimeout";
import { getFilteredDecors } from "@/utils/configurator/steps/step3/getFilteredDecors";
import { getUniqueDecors } from "@/utils/configurator/steps/step3/getUniqueDecors";

import toast from "react-hot-toast";

import * as $ from "@/styles/configurator/components/steps/step3/Decors.styled";

const Decors = ({ type, translations: t }) => {
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
    checkIsAllDoorFilled,
    setStepsInputs,
    setBeScrolled,
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
    checkIsAllDoorFilled: state.checkIsAllDoorFilled,
    setStepsInputs: state.setStepsInputs,
    setBeScrolled: state.setBeScrolled,
    modal: state.modal,
    productsAPI: state.productsAPI,
  }));

  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const set = useTimeout();

  useEffect(() => {
    setIsScrollEnd(false);
    setBeScrolled(true);
    set(() => setBeScrolled(false), 700);
    !modal.beScrolled && setIsScrollEnd(true);
  }, [modal.type]);

  const filteredDecors =
    type === "usedDoors"
      ? getUniqueDecors({ state })
      : getFilteredDecors({ state, type });

  const handleClick = ({ decorId, materialType }) => {
    if (type === "corpus") {
      setCorpusDecorId(decorId);
      setStepsInputs("step3", "decorCorpus", true);
      toast.success(t.toast.corpus.success, {
        className: "larger-device",
      });
    }
    if (type === "sideWalls") {
      setSideWallsDecorId(decorId);
      setStepsInputs("step3", "decorSideWalls", true);
      toast.success(t.toast.side_walls.success, {
        className: "larger-device",
      });
    }
    if (type === "doors" || type === "usedDoors") {
      setBeScrolled(true);
      const { doorId, sectionId } = activeDoorSection;

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

      const isAllDoorsDecorFilled = checkIsAllDoorFilled();

      if (isAllDoorsDecorFilled) {
        setStepsInputs("step3", "decorDoors", true);
        toast.success(t.toast.doors.success, {
          className: "larger-device",
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
            onClick={() =>
              handleClick({ decorId: decor.id, materialType: decor.category })
            }
          >
            <$.PriceLabelWrap $priceLevel={3}>
              {decor.price_with_vat} Kč/m2
            </$.PriceLabelWrap>
            <$.DecorImage>
              <Image
                src={`/images/glass/${decor.id}.jpeg`}
                layout="fill"
                objectPosition="center"
                alt={decor.id}
                loading="lazy"
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
          onClick={() =>
            handleClick({ decorId: decor.id, materialType: "wood" })
          }
        >
          <$.PriceLabelWrap $priceLevel={categoryLabel}>
            {`${decor.price_with_vat} ${t.currency_area}`}
          </$.PriceLabelWrap>
          <$.DecorImage>
            <Image
              src={`/images/decors/${decor.id_manufacturer}.jpeg`}
              layout="fill"
              objectPosition="center"
              alt={`Dekor - ${decor.id_manufacturer}`}
              loading="lazy"
            />
          </$.DecorImage>
          <$.DecorTitle>{`${decor.name} (${decor.id_manufacturer}) - ${decor.label}`}</$.DecorTitle>
        </$.DecorWrap>
      );
    });
  };

  const decors = getDecors();

  return (
    <$.Wrap
      $isUsed={type === "usedDoors"}
      $isDoors={type === "doors"}
      $isScrollEnd={isScrollEnd}
    >
      <$.DecorsWrap
        $isUsed={type === "usedDoors"}
        $isEmpty={decors.length === 0}
      >
        {decors.length > 0 ? (
          decors
        ) : (
          <$.EmptyResult>{t.empty_result}</$.EmptyResult>
        )}
      </$.DecorsWrap>
    </$.Wrap>
  );
};

export default Decors;
