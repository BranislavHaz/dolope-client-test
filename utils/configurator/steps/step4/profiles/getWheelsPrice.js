export const getWheelsPrice = (
  availableProfiles,
  doors,
  currencyPriceColumn
) => {
  // Pre kolieska sú rovnaké ceny asymetrických aj symetrických typov
  const topWheelsPrice = availableProfiles.topWheels[0][currencyPriceColumn];
  const bottomWheelsPrice =
    availableProfiles.bottomWheels[0][currencyPriceColumn];

  return {
    top: Number(doors.count * topWheelsPrice).toFixed(0),
    bottom: Number(doors.count * bottomWheelsPrice).toFixed(0),
  };
};
