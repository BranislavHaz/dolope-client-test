export const getGuideProfilesPrice = (
  availableProfiles,
  doors,
  currencyPriceColumn
) => {
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

  // Vrátenie cien profilov
  return {
    top: Number(topGuideProfile[currencyPriceColumn]).toFixed(0),
    bottom: Number(bottomGuideProfile[currencyPriceColumn]).toFixed(0),
  };
};
