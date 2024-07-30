export const categorizeSliddingDoorsProfiles = (products) => {
  const topGuideProfiles = [];
  const bottomGuideProfiles = [];
  const topHorizontProfiles = [];
  const bottomHorizontProfiles = [];
  const hProfiles = [];
  const topWheels = [];
  const bottomWheels = [];
  const handles = [];

  products.map((product) => {
    if (product.rails_number === 2 && product.position === "top") {
      topGuideProfiles.push(product);
    }
    if (product.rails_number === 2 && product.position === "bottom") {
      bottomGuideProfiles.push(product);
    }
    if (product.category === "frame" && product.position === "top") {
      topHorizontProfiles.push(product);
    }
    if (product.category === "frame" && product.position === "bottom") {
      bottomHorizontProfiles.push(product);
    }
    if (product.category === "h-profile" && product.thickness === "wide") {
      hProfiles.push(product);
    }
    if (product.category === "wheel" && product.position === "top") {
      topWheels.push(product);
    }
    if (product.category === "wheel" && product.position === "bottom") {
      bottomWheels.push(product);
    }
    if (product.category === "handle") {
      handles.push(product);
    }
  });

  return {
    topGuideProfiles,
    bottomGuideProfiles,
    topHorizontProfiles,
    bottomHorizontProfiles,
    hProfiles,
    topWheels,
    bottomWheels,
    handles,
  };
};
