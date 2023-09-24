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
    if (product.rails_number === 2 && product.position === "vrch") {
      topGuideProfiles.push(product);
    }
    if (product.rails_number === 2 && product.position === "spodok") {
      bottomGuideProfiles.push(product);
    }
    if (product.category === "rám" && product.position === "vrch") {
      topHorizontProfiles.push(product);
    }
    if (product.category === "rám" && product.position === "spodok") {
      bottomHorizontProfiles.push(product);
    }
    if (product.category === "h-profil" && product.thickness === "hrubý") {
      hProfiles.push(product);
    }
    if (product.category === "koliesko" && product.position === "vrch") {
      topWheels.push(product);
    }
    if (product.category === "koliesko" && product.position === "spodok") {
      bottomWheels.push(product);
    }
    if (product.category === "madlo") {
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
