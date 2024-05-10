export const getHorizontProfilesPrice = (availableProfiles, doors) => {
  // Vrchný profil dverí
  const topHorizontProfileInColor = availableProfiles.topHorizontProfiles.find(
    (profile) => profile.color === doors.color
  );

  const topHorizontProfilePriceMM =
    topHorizontProfileInColor.price_with_vat /
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
    bottomHorizontProfileInColor.price_with_vat /
    (bottomHorizontProfileInColor.length * 1000);

  const bottomHorizontProfilePrice =
    doors.count *
    doors.width *
    doors.horizontProfilesReserve *
    bottomHorizontProfilePriceMM;

  // Vrátenie cien profilov
  return {
    top: +topHorizontProfilePrice.toFixed(0),
    bottom: +bottomHorizontProfilePrice.toFixed(0),
  };
};
