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

  console.log(
    "Vrchný profil dverí (celková dĺžka s rezervou): " +
      topHorizontProfilePrice / topHorizontProfilePriceMM +
      " || " +
      "Vrchny profil cena za mm: " +
      topHorizontProfilePriceMM
  );

  console.log(
    "Spodný profil dverí (celková dĺžka s rezervou): " +
      bottomHorizontProfilePrice / bottomHorizontProfilePriceMM +
      " || " +
      "Spodný profil cena za mm: " +
      bottomHorizontProfilePriceMM
  );

  // Vrátenie cien profilov
  return {
    top: +topHorizontProfilePrice.toFixed(0),
    bottom: +bottomHorizontProfilePrice.toFixed(0),
  };
};
