import useMainStore from "@/stores/useMainStore";
import DecorsLink from "./DecorsLink";
import * as $ from "@/styles/components/steps/step4/PriceList.styled";

const getWardrobeSize = (state) => {
  const { wardrobe } = state;
  const width = wardrobe.width / 10;
  const height = wardrobe.height / 10;
  const depth = wardrobe.depth / 10;
  return `${width} x ${height} x ${depth} cm`;
};

const getTopShelfSize = (state) => {
  const { corpus } = state;
  const topShelfSize = corpus.topShelfHeight / 10;

  return `${topShelfSize} cm`;
};

const getTypeWardrobe = (state) => {
  const { type } = state.wardrobe;
  let text = "";

  if (type === 1) {
    text = "mezi 2 stěnami";
  } else if (type === 2) {
    text = "vlevo stěna, vpravo v prostoru";
  } else if (type === 3) {
    text = "vlevo v prostoru, vpravo stěna";
  } else if (type === 4) {
    text = "v prostoru";
  }

  return text;
};

const getCorpusSize = (state) => {
  const { corpus } = state;

  return `${corpus.width / 10} x ${corpus.height / 10} x ${
    corpus.depth / 10
  } cm`;
};

const getSectionSize = (state) => {
  const { wardrobe, corpus, sections } = state;
  const width = sections.width / 10;
  const height = (corpus.height - wardrobe.thickness) / 10;
  const depth = corpus.depth;

  return `${width} x ${height} x ${depth} cm`;
};

const getSectionDecor = (state) => {
  const dtd18 = state.productsAPI.dtd18;
  const decorId = state.corpus.decorId;
  const decor = dtd18.find((item) => item.id === decorId);
  return [decor];
};

const PriceList = () => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));

  const showImage = (imgUrl) => {
    state.setIsLightBoxImageUrl(`/images/decors/${imgUrl}.jpeg`);
    state.setIsLightBoxActive(true);
  };

  return (
    <$.WrapPriceList>
      <$.Name>Rozměry skříně (šířka x výška x hloubka):</$.Name>
      <$.Description>{getWardrobeSize(state)}</$.Description>
      <$.Name>Prostor mezi stropem a vrchní policí:</$.Name>
      <$.Description>{getTopShelfSize(state)}</$.Description>
      <$.Name>Umístění skříně:</$.Name>
      <$.Description>{getTypeWardrobe(state)}</$.Description>
      <$.Name>Rozměry korpusu (šířka x výška x hloubka):</$.Name>
      <$.Description>{getCorpusSize(state)}</$.Description>
      <$.Name>Dekor korpusu:</$.Name>
      <$.Description>
        <DecorsLink decors={getSectionDecor(state)} />
      </$.Description>
      <$.Name>Počet sekcí v korpusu:</$.Name>
      <$.Description>{state.sections.count}x</$.Description>
      <$.Name>Vnitřní rozměr sekce (šířka x výška x hloubka):</$.Name>
      <$.Description>{getSectionSize(state)}</$.Description>
    </$.WrapPriceList>
  );
};

export default PriceList;
