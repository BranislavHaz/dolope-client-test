function normalizeText(text) {
  text = text.toLowerCase();
  text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  text = text.replace(/[^a-zA-Z0-9\s]/g, "");
  return text;
}

export const getHandlesPrice = (
  availableProfiles,
  doors,
  currencyPriceColumn
) => {
  const handleInColor = availableProfiles.handles.find(
    (profile) =>
      profile.color === doors.color &&
      normalizeText(profile.title).includes(doors.handle)
  );

  // Získanie ceny madla na 1 mm
  const handlePriceMM =
    handleInColor[currencyPriceColumn] / (handleInColor.length * 1000);

  // Sú 2 typy madiel 2,8m a 5,6m
  const handlePrice =
    doors.height <= 2800 ? handlePriceMM * 2800 : handlePriceMM * 5600;

  // Vrátenie ceny pre všetky madlá (2 madlá na 1 dverách)
  return Number(2 * doors.count * handlePrice).toFixed(0);
};
