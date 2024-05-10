export const getWheelsPrice = (availableProfiles, doors) => {
  // Pre kolieska sú rovnaké ceny asymetrických aj symetrických typov
  const topWheelsPrice = availableProfiles.topWheels[0].price_with_vat;
  const bottomWheelsPrice = availableProfiles.bottomWheels[0].price_with_vat;

  return {
    top: +(doors.count * topWheelsPrice).toFixed(0),
    bottom: +(doors.count * bottomWheelsPrice).toFixed(0),
  };
};
