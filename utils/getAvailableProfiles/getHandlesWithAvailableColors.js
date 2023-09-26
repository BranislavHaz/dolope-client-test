export const getHandlesWithAvailableColors = (state, allColorsAvailable) => {
  const handles = state.productsAPI.slidingDoor.handles;
  const clearDoorsHeight = state.wardrobe.height - 44;

  // Funkcia na úpravu názvu madla
  const formatHandleName = (title) => {
    let name = title.split(" ")[1]; // Získame názov z title
    name = name.replace("+", ""); // Odstránenie "+"
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // Veľké prvé písmeno, ostatné malé
  };

  // Získajte jedinečné názvy madiel (napr. Berlin, London, atď.)
  const uniqueHandles = [
    ...new Set(handles.map((handle) => formatHandleName(handle.title))),
  ];

  const result = [];

  uniqueHandles.forEach((handleName) => {
    // Filtrovanie madol podľa mena a dĺžky
    const filteredHandles = handles.filter(
      (handle) =>
        handle.title.includes(handleName.toUpperCase()) &&
        handle.length <= clearDoorsHeight
    );

    const colors = new Set(); // Množina farieb dostupných pre dané madlo

    filteredHandles.forEach((handle) => {
      if (handle.color && allColorsAvailable[handle.color]) {
        colors.add(handle.color);
      }
    });

    // Vloženie dostupných farieb do result
    if (colors.size) {
      result.push({
        name: handleName,
        colors: [...colors],
      });
    }
  });

  return result;
};
