export const getHandlesPrice = (availableProfiles, doors) => {
  const handleInColor = availableProfiles.handles.find(
    (profile) =>
      profile.color === doors.color && profile.url.includes(doors.handle)
  );

  // Získanie ceny madla na 1 mm
  const handlePriceMM =
    handleInColor.price_with_vat / (handleInColor.length * 1000);

  // Sú 2 typy madiel 2,8m a 5,6m
  const handlePrice =
    doors.height <= 2800 ? handlePriceMM * 2800 : handlePriceMM * 5600;

  // Vrátenie ceny pre všetky madlá (2 madlá na 1 dverách)
  return +(2 * doors.count * handlePrice).toFixed(0);
};
