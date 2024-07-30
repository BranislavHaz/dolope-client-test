import { categorizeSliddingDoorsProfiles } from "@/utils/configurator/categorizeSliddingDoorsProfiles";

const createProductsApiSlice = (set, get) => ({
  productsAPI: {
    dtd10: [],
    dtd18: [],
    glass: [],
    slidingDoor: {},
    otherProducts: [],
  },

  setProductsApi: (products) => {
    set(
      (state) => {
        state.productsAPI.dtd10 = products.dtd10;
        state.productsAPI.dtd18 = products.dtd18;
        state.productsAPI.glass = products.glass;
        state.productsAPI.slidingDoor = categorizeSliddingDoorsProfiles(
          products.slidingDoor
        );
        state.productsAPI.otherProducts = products.otherProducts;
      },
      false,
      `productsApi/setProductsApi`
    );
  },
});

export default createProductsApiSlice;
