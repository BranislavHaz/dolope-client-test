import { getMaxSlideSize } from "../getMaxSlideSize";

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

export const getDrawerFittingsPrice = (state) => {
  const sectionsCount = state.sections.count;
  const drawersType = state.drawers.type;
  const slideSize = getMaxSlideSize(state);
  const slidePrice = state.productsAPI.otherProducts.find(
    (product) =>
      product.length === slideSize &&
      product.category === "drawer" &&
      product.type === drawersType
  ).price_with_vat;

  let totaldrawersCount = 0;

  for (let i = 1; i <= sectionsCount; i++) {
    const sectionType = state.sections.typeOfSections[i].sectionType;

    if (countDrawersSectionsType[sectionType]) {
      const drawersCount = countDrawersSectionsType[sectionType];
      totaldrawersCount += drawersCount;
    }
  }

  return +(totaldrawersCount * slidePrice).toFixed(0);
};

export const getDrawerPriceDifference = (state) => {
  const sectionsCount = state.sections.count;
  const slideSize = getMaxSlideSize(state);
  const slidePriceWooden = state.productsAPI.otherProducts.find(
    (product) =>
      product.length === slideSize &&
      product.category === "drawer" &&
      product.type === "wooden"
  ).price_with_vat;
  const slidePriceSidewalls = state.productsAPI.otherProducts.find(
    (product) =>
      product.length === slideSize &&
      product.category === "drawer" &&
      product.type === "sidewalls"
  ).price_with_vat;

  let totaldrawersCount = 0;

  for (let i = 1; i <= sectionsCount; i++) {
    const sectionType = state.sections.typeOfSections[i].sectionType;

    if (countDrawersSectionsType[sectionType]) {
      const drawersCount = countDrawersSectionsType[sectionType];
      totaldrawersCount += drawersCount;
    }
  }

  const totalPriceWooden = +(totaldrawersCount * slidePriceWooden).toFixed(0);
  const totalPriceSidewalls = +(
    totaldrawersCount * slidePriceSidewalls
  ).toFixed(0);

  return +(totalPriceSidewalls - totalPriceWooden);
};
