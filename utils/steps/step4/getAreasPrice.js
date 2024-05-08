import { mergeAreas } from "./mergeAreas";

export const getAreasPrice = (state) => {
  const areas = mergeAreas(state);
  const { dtd18, dtd10, glass } = state.productsAPI;
  const pricesAreaObj = {};

  // Funkcia na hľadanie ceny dekoru
  const findPrice = (decorId, dtdArray) => {
    const item = dtdArray.find((entry) => entry.id === decorId);
    return item ? parseFloat(item.price_with_vat) : null;
  };

  // Prechádzame cez všetky dekory v objekte areas
  for (const decorId in areas) {
    const decorIdNumber = parseInt(decorId);
    let price = findPrice(decorIdNumber, dtd18); // Skúšame nájsť v dtd18

    if (!price) {
      price = findPrice(decorIdNumber, dtd10); // Ak nie je v dtd18, hľadáme v dtd10
    }

    if (!price) {
      price = findPrice(decorIdNumber, glass);
    }

    if (price) {
      const area = areas[decorId];
      const totalCost = price * area; // Cena za m2 * počet m2
      pricesAreaObj[decorId] = +totalCost.toFixed(2);
    } else {
      console.log(`Cena pre dekor ID ${decorId} nebola nájdená.`);
    }
  }

  const sumPrices = (priceObject) => {
    return Object.values(priceObject)
      .reduce((acc, curr) => acc + curr, 0)
      .toFixed(2);
  };

  const totalPriceAreas = sumPrices(pricesAreaObj);
  return totalPriceAreas;
};
