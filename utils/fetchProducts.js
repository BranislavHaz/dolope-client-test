const fetchSetting = {
  method: "GET",
  headers: {
    authorization: process.env.AUTH_TOKEN,
  },
};

export const fetchProducts = async () => {
  const resDTD10 = await fetch(
    `https://dolope-6771.rostiapp.cz/demos/products/dtd10`,
    fetchSetting
  );
  const dtd10 = await resDTD10.json();

  const resDTD18 = await fetch(
    `https://dolope-6771.rostiapp.cz/demos/products/dtd18`,
    fetchSetting
  );
  const dtd18 = await resDTD18.json();

  const resSlidingDoor = await fetch(
    `https://dolope-6771.rostiapp.cz/nabykov/products`,
    fetchSetting
  );
  const slidingDoor = await resSlidingDoor.json();

  return { dtd10, dtd18, slidingDoor };
};
