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
  const slideSize = getMaxSlideSize(state);
  const slidePrice = state.productsAPI.otherProducts.find(
    (product) => product.length === slideSize && product.category === "drawer"
  ).price_with_vat;

  let totaldrawersCount = 0;

  for (let i = 1; i <= sectionsCount; i++) {
    const sectionType = state.sections.typeOfSections[i].sectionType;

    if (countDrawersSectionsType[sectionType]) {
      const drawersCount = countDrawersSectionsType[sectionType];
      totaldrawersCount += drawersCount;
    }
  }

  console.log(
    "Počet zásuviek: " +
      totaldrawersCount +
      " || " +
      "Cena za zásuvku: " +
      slidePrice
  );

  return +(totaldrawersCount * slidePrice).toFixed(0);
};