import useMainStore from "@/stores/useMainStore";
import DecorsLink from "./DecorsLink";
import SelectElement from "./SelectElement";
import * as $ from "@/styles/configurator/components/steps/step4/PriceList.styled";

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

const getDrawersCount = (state) => {
  const { typeOfSections } = state.sections;
  const countDrawersSectionsType = {
    6: 2,
    7: 3,
    8: 3,
    9: 4,
    10: 4,
    11: 2,
    12: 2,
    13: 3,
    14: 3,
    15: 4,
    16: 4,
    22: 2,
    23: 3,
    24: 4,
  };

  let totalDrawersCount = 0;

  for (let key in typeOfSections) {
    const sectionType = typeOfSections[key].sectionType;
    if (countDrawersSectionsType.hasOwnProperty(sectionType)) {
      totalDrawersCount += countDrawersSectionsType[sectionType];
    }
  }

  return totalDrawersCount;
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

const PriceList = ({ translations: t }) => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));

  const drawersCount = getDrawersCount(state);

  return (
    <>
      <$.WrapType>
        <$.WrapPriceListItems>
          <$.TitleType>{t.wardrobe.title}</$.TitleType>
          <$.Name>{t.wardrobe.sizes}</$.Name>
          <$.Description>{getWardrobeSize(state)}</$.Description>
          <$.Name>{t.wardrobe.top_self}</$.Name>
          <$.Description>{getTopShelfSize(state)}</$.Description>
          <$.Name>{t.wardrobe.type_wardrobe}</$.Name>
          <$.Description>{getTypeWardrobe(state)}</$.Description>
          <$.Name>{t.wardrobe.side_walls_decor}</$.Name>
          <$.Description>
            {<DecorsLink decors={getSideWallsDecor(state)} />}
          </$.Description>
        </$.WrapPriceListItems>
      </$.WrapType>
      <$.WrapType>
        <$.WrapPriceListItems>
          <$.TitleType>{t.corpus.title}</$.TitleType>
          <$.Name>{t.corpus.sizes}</$.Name>
          <$.Description>{getCorpusSize(state)}</$.Description>
          <$.Name>{t.corpus.decor}</$.Name>
          <$.Description>
            <DecorsLink decors={getSectionDecor(state)} />
          </$.Description>
          <$.Name>{t.corpus.sections_count}</$.Name>
          <$.Description>{state.sections.count}x</$.Description>
          <$.Name>{t.corpus.internal_sizes}</$.Name>
          <$.Description>{getSectionSize(state)}</$.Description>
          {drawersCount ? (
            <>
              <$.Name>{t.corpus.drawers_count}</$.Name>
              <$.Description>{drawersCount}x</$.Description>
              <$.Name>{t.corpus.drawers_type}</$.Name>
              <$.Description>
                <SelectElement translations={t.corpus.select_element} />
              </$.Description>
            </>
          ) : null}
        </$.WrapPriceListItems>
      </$.WrapType>
      <$.WrapType>
        <$.WrapPriceListItems>
          <$.TitleType>{t.doors.title}</$.TitleType>
          <$.Name>{t.doors.doors_count}</$.Name>
          <$.Description>{state.doors.count}x</$.Description>
          <$.Name>{t.doors.sizes}</$.Name>
          <$.Description>{getDoorsSize(state)}</$.Description>
          <$.Name>{t.doors.profiles_color}</$.Name>
          <$.Description>{getProfilesColor(state)}</$.Description>
          <$.Name>{t.doors.decors}</$.Name>
          <$.Description>
            <DecorsLink decors={getDoorsDecor(state)} />
          </$.Description>
        </$.WrapPriceListItems>
      </$.WrapType>
    </>
  );
};

export default PriceList;
