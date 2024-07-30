export const filterHandlesByWheelAvailability = (state, handles) => {
  const topWheels = state.productsAPI.slidingDoor.topWheels;

  const isAsymetricWheelAvailable = topWheels.some((wheel) =>
    wheel.title.includes("asymetrické")
  );
  const isSymetricWheelAvailable = topWheels.some((wheel) =>
    wheel.title.includes("symetrické")
  );

  return handles.filter((handle) => {
    // Kontrola pre London madlá
    if (handle.name === "London") {
      return isAsymetricWheelAvailable;
    }
    // Kontrola pre ostatné madlá (Berlin, Paris, Wien, Zurich)
    return isSymetricWheelAvailable;
  });
};
