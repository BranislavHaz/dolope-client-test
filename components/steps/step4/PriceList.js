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

const getSideWallsDecor = (state) => {
  const { dtd18 } = state.productsAPI;
  const { decorId } = state.sideWalls;
  const decor = dtd18.find((decor) => decor.id === decorId);
  return [decor];
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

const getDoorsSize = (state) => {
  const { width, height } = state.doors;
  const handle = state.doors.selectedProfile.handle;
  const handleWidth = state.doors.dimensionsFromManual.doorOverhang[handle];
  const fullWidth = (width + 2 * handleWidth) / 10;
  const fullHeight = height / 10;
  return `${fullWidth} x ${fullHeight} cm`;
};

const getProfilesColor = (state) => {
  const colorsMap = {
    silver: "stříbrná",
    champagne: "šampaň",
    white: "bílá lesklá",
    black: "černá matná",
  };
  const { color } = state.doors.selectedProfile;
  return colorsMap[color];
};

const getDoorsDecor = (state) => {
  const { doors } = state;
  const { dtd10, glass } = state.productsAPI;

  let doorDecorsArr = [];

  for (let type in doors.typeDoors) {
    for (let section in doors.typeDoors[type].sections) {
      doorDecorsArr.push(doors.typeDoors[type].sections[section].decorId);
    }
  }

  let decorsArr = [];
  let seenIds = new Set();

  doorDecorsArr.forEach((decorId) => {
    const decor = dtd10.find((decor) => decor.id === decorId);
    const decorGlass = !decor && glass.find((glass) => glass.id === decorId);

    const item = decor || decorGlass;
    if (item && !seenIds.has(item.id)) {
      decorsArr.push(item);
      seenIds.add(item.id);
    }
  });

  return decorsArr;
};

const PriceList = () => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));

  return (
    <$.Wrap>
      <$.WrapType>
        <$.TitleType>Skříň</$.TitleType>
        <$.WrapPriceListItems>
          <$.Name>Rozměry skříně (šířka x výška x hloubka):</$.Name>
          <$.Description>{getWardrobeSize(state)}</$.Description>
          <$.Name>Prostor mezi stropem a vrchní policí:</$.Name>
          <$.Description>{getTopShelfSize(state)}</$.Description>
          <$.Name>Umístění skříně:</$.Name>
          <$.Description>{getTypeWardrobe(state)}</$.Description>
          <$.Name>Dekor vnější části skříně (dorazové lišty, bočnice):</$.Name>
          <$.Description>
            {<DecorsLink decors={getSideWallsDecor(state)} />}
          </$.Description>
        </$.WrapPriceListItems>
      </$.WrapType>
      <$.WrapType>
        <$.TitleType>Korpus a sekce</$.TitleType>
        <$.WrapPriceListItems>
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
        </$.WrapPriceListItems>
      </$.WrapType>
      <$.WrapType>
        <$.TitleType>Posuvné dveře</$.TitleType>
        <$.WrapPriceListItems>
          <$.Name>Počet posuvných dveří:</$.Name>
          <$.Description>{state.doors.count}x</$.Description>
          <$.Name>Rozměry jedních dveří (šířka x výška):</$.Name>
          <$.Description>{getDoorsSize(state)}</$.Description>
          <$.Name>Barva madel, vodicích a dělících profilů:</$.Name>
          <$.Description>{getProfilesColor(state)}</$.Description>
          <$.Name>Dekory posuvných dveří:</$.Name>
          <$.Description>
            <DecorsLink decors={getDoorsDecor(state)} />
          </$.Description>
        </$.WrapPriceListItems>
      </$.WrapType>
    </$.Wrap>
  );
};

export default PriceList;
