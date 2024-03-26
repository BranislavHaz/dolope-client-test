import Image from "next/image";
import useMainStore from "@/stores/useMainStore";
import useTimeout from "@/hooks/useTimeout";

import * as $ from "@/styles/components/steps/step3/Decors";

const Decors = ({ type }) => {
  const {
    corpus,
    setCorpusDecorId,
    sideWalls,
    setSideWallsDecorId,
    setIsModalActive,
    productsAPI,
    decorFilter,
    setStepsInputs,
  } = useMainStore((state) => ({
    corpus: state.corpus,
    setCorpusDecorId: state.setCorpusDecorId,
    sideWalls: state.sideWalls,
    setSideWallsDecorId: state.setSideWallsDecorId,
    setIsModalActive: state.setIsModalActive,
    productsAPI: state.productsAPI,
    decorFilter: state.decorFilter,
    setStepsInputs: state.setStepsInputs,
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
    }
    if (type === "sideWalls") {
      setSideWallsDecorId(decorId);
      setStepsInputs("step3", "decorSideWalls", true);
    }
    set(() => {
      setIsModalActive(false);
    }, 280);
  };

  const verifyActiveDecor = (decorId) => {
    if (type === "corpus") {
      return corpus.decorId === decorId;
    } else if (type === "sideWalls") {
      return sideWalls.decorId === decorId;
    }
    return false;
  };

  const getDecors = () => {
    return filteredDecors.map((decor) => {
      const manufacturerImgUrl =
        decor.manufacturer === "Egger" ? "egger" : "kronospan";

      return (
        <$.DecorWrap
          key={decor.id}
          $isActive={verifyActiveDecor(decor.id)}
          onClick={() => handleClick(decor.id)}
        >
          {
            <$.DecorImage>
              <Image
                src={`/images/decors/${manufacturerImgUrl}/${decor.id_manufacturer}.jpeg`}
                /*                 width={100}
                height={100} */
                layout="fill" // Toto umožňuje obrázku vyplniť element
                //objectFit="cover" // Orezá obrázok, aby pokryl kontajner
                objectPosition="center" // Zarovná obrázok na stred kontajnera
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
