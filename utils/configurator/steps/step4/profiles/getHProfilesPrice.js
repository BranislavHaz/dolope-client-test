// Počet H profilov podľa typu dverí
const countHProfilesType = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 1,
  7: 2,
  8: 2,
  9: 4,
};

// Získanie celkovej dĺžky všetkych H profilov
const getFullLengthHProfiles = (typeDoors, doorWidth) => {
  let fullLength = 0;

  Object.values(typeDoors).forEach((door) => {
    const numberOfHProfiles = countHProfilesType[door.typeOfDoor] || 0;
    fullLength += numberOfHProfiles * doorWidth;
  });

  return fullLength;
};

export const getHProfilesPrice = (
  availableProfiles,
  doors,
  currencyPriceColumn
) => {
  const fullLengthHProfiles = getFullLengthHProfiles(
    doors.typeDoors,
    doors.width
  );

  const hProfileInColor = availableProfiles.hProfiles.find(
    (profile) => profile.color === doors.color
  );

  // Cena za mm H profilu
  const hProfilePriceMM =
    hProfileInColor[currencyPriceColumn] / (hProfileInColor.length * 1000);

  // Vrátenie ceny za všetky H profily
  return Number(
    fullLengthHProfiles * doors.horizontProfilesReserve * hProfilePriceMM
  ).toFixed(0);
};
