export const getGuideProfilesPrice = (availableProfiles, doors) => {
  // Vrchný vodiaci profil
  const topGuideProfilesInColor = availableProfiles.topGuideProfiles.filter(
    (profile) => profile.color === doors.color
  );
  const topGuideProfile = topGuideProfilesInColor
    .filter((profile) => profile.length * 1000 >= doors.spaceWidth)
    .sort((a, b) => a.length - b.length)
    .shift();

  // Spodný vodiaci profil
  const bottomGuideProfilesInColor =
    availableProfiles.bottomGuideProfiles.filter(
      (profile) => profile.color === doors.color
    );
  const bottomGuideProfile = bottomGuideProfilesInColor
    .filter((profile) => profile.length * 1000 >= doors.spaceWidth)
    .sort((a, b) => a.length - b.length)
    .shift();

  console.log(
    "Vrchný vodiací profil - farba " +
      topGuideProfile.color +
      " || " +
      "dĺžka: " +
      topGuideProfile.length +
      " || " +
      "cena: " +
      topGuideProfile.price_with_vat
  );

  console.log(
    "Spodný vodiací profil - farba " +
      bottomGuideProfile.color +
      " || " +
      "dĺžka: " +
      bottomGuideProfile.length +
      " || " +
      "cena: " +
      bottomGuideProfile.price_with_vat
  );

  // Vrátenie cien profilov
  return {
    top: +topGuideProfile.price_with_vat.toFixed(0),
    bottom: +bottomGuideProfile.price_with_vat.toFixed(0),
  };
};
