const normalizeString = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export const getFilteredDecors = ({ state, type }) => {
  const productsToFilter =
    type === "corpus" || type === "sideWalls"
      ? state.productsAPI.dtd18
      : state.productsAPI.dtd10;

  const currentFilter = state.decorFilter[type];

  return productsToFilter.filter((decor) => {
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
};
