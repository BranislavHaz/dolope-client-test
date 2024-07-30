export const calcDoorElementHeight = (factor, height) => {
  return Math.round(height / factor / 10);
};

export const calcMinMaxDoorHeight = (type, fullHeight) => {
  const minHeight = 150;
  const minHeightCM = 15;

  switch (type) {
    case 1:
      const max1 = Math.round((fullHeight - minHeight) / 10);
      return {
        min: minHeight,
        max: max1 * 10,
        text: `${minHeightCM}-${max1} cm`,
      };
    case 2:
      const max2 = Math.round((fullHeight - 2 * minHeight) / 10);
      return {
        min: minHeight,
        max: max2 * 10,
        text: `${minHeightCM}-${max2} cm`,
      };
    case 3:
      const max3 = Math.round((fullHeight - minHeight) / 10 / 2);
      return {
        min: minHeight,
        max: max3 * 10,
        text: `${minHeightCM}-${max3} cm`,
      };
    case 4:
      const max4 = Math.round((fullHeight - 3 * minHeight) / 10 / 2);
      return {
        min: minHeight,
        max: max4 * 10,
        text: `${minHeightCM}-${max4} cm`,
      };

    default:
      break;
  }
};
