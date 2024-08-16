import { getGuideProfilesPrice } from "./getGuideProfilesPrice";
import { getHorizontProfilesPrice } from "./getHorizontProfilesPrice";
import { getHandlesPrice } from "./getHandlesPrice";
import { getHProfilesPrice } from "./getHProfilesPrice";
import { getWheelsPrice } from "./getWheelsPrice";

export const getProfilesDoorPrice = (state, currencyPriceColumn) => {
  const doors = {
    width: state.doors.width,
    height: state.doors.height,
    count: state.doors.count,
    spaceWidth: state.wardrobe.width - 2 * state.wardrobe.thickness,
    handle: state.doors.selectedProfile.handle,
    color: state.doors.selectedProfile.color,
    horizontProfilesReserve: 1.5,
    typeDoors: state.doors.typeDoors,
  };
  const availableProfiles = state.productsAPI.slidingDoor;

  // Obsahuje cenu pre vrchný a spodný profil {top, bottom}
  const guideProfilesPrice = getGuideProfilesPrice(
    availableProfiles,
    doors,
    currencyPriceColumn
  );

  // Obsahuje cenu pre vrchné a spodné profily dverí {top, bottom}
  const horizontProfilesPrice = getHorizontProfilesPrice(
    availableProfiles,
    doors,
    currencyPriceColumn
  );

  // Obsahuje čistú cenu madiel
  const handlesPrice = getHandlesPrice(
    availableProfiles,
    doors,
    currencyPriceColumn
  );

  // Obsahuje čistú cenu všetkých H profilov
  const hProfilesPrice = getHProfilesPrice(
    availableProfiles,
    doors,
    currencyPriceColumn
  );

  // Obsahuje cenu vrchných a spodných koliesok {top, bottom}
  const wheelsPrice = getWheelsPrice(
    availableProfiles,
    doors,
    currencyPriceColumn
  );

  const fullProfilesPrice =
    +guideProfilesPrice.top +
    +guideProfilesPrice.bottom +
    +horizontProfilesPrice.top +
    +horizontProfilesPrice.bottom +
    +handlesPrice +
    +hProfilesPrice +
    +wheelsPrice.top +
    +wheelsPrice.bottom;

  return +fullProfilesPrice;
};
