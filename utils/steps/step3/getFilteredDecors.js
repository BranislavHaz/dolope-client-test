const normalizeString = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const getProductToFilter = ({ state, type }) => {
  if (type === "doors" && state.decorFilter.doors.materialType === "wood") {
    return state.productsAPI.dtd10;
  } else if (
    type === "doors" &&
    state.decorFilter.doors.materialType === "glass"
  ) {
    return state.productsAPI.glass;
  } else {
    return state.productsAPI.dtd18;
  }
};

export const getFilteredDecors = ({ state, type }) => {
  const productsToFilter = getProductToFilter({ state, type });

  const currentFilter = state.decorFilter[type];

  const filteredDecors = productsToFilter.filter((decor) => {
    if (type === "doors" && currentFilter.materialType === "glass") {
      const matchesGlassType =
        currentFilter.glassType === "all" ||
        decor.category === currentFilter.glassType;

      const isAvailable = decor.availability === true;

      const matchesSearch =
        !currentFilter.search ||
        normalizeString(decor.name_cz).includes(
          normalizeString(currentFilter.search)
        );

      return matchesGlassType && isAvailable && matchesSearch;
    } else {
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
    }
  });

  const sortedFilteredDecors = filteredDecors.sort(
    (a, b) => parseFloat(a.price_with_vat) - parseFloat(b.price_with_vat)
  );

  return sortedFilteredDecors;
};
