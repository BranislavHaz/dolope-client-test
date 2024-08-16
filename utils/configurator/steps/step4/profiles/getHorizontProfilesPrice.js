export const getHorizontProfilesPrice = (
  availableProfiles,
  doors,
  currencyPriceColumn
) => {
  // Vrchný profil dverí
  const topHorizontProfileInColor = availableProfiles.topHorizontProfiles.find(
    (profile) => profile.color === doors.color
  );

  const topHorizontProfilePriceMM =
    topHorizontProfileInColor[currencyPriceColumn] /
    (topHorizontProfileInColor.length * 1000);

  const topHorizontProfilePrice =
    doors.count *
    doors.width *
    doors.horizontProfilesReserve *
    topHorizontProfilePriceMM;

  // Spodný profil dverí
  const bottomHorizontProfileInColor =
    availableProfiles.bottomHorizontProfiles.find(
      (profile) => profile.color === doors.color
    );
  const bottomHorizontProfilePriceMM =
    bottomHorizontProfileInColor[currencyPriceColumn] /
    (bottomHorizontProfileInColor.length * 1000);

  const bottomHorizontProfilePrice =
    doors.count *
    doors.width *
    doors.horizontProfilesReserve *
    bottomHorizontProfilePriceMM;

  // Vrátenie cien profilov
  return {
    top: Number(topHorizontProfilePrice).toFixed(0),
    bottom: Number(bottomHorizontProfilePrice).toFixed(0),
  };
};
