import { categorizeSliddingDoorsProfiles } from "@/utils/categorizeSliddingDoorsProfiles";

const createProductsApiSlice = (set, get) => ({
  productsAPI: { dtd10: [], dtd18: [], glass: [], slidingDoor: {} },

  setProductsApi: (products) => {
    set(
      (state) => {
        state.productsAPI.dtd10 = products.dtd10;
        state.productsAPI.dtd18 = products.dtd18;
        state.productsAPI.glass = products.glass;
        state.productsAPI.slidingDoor = categorizeSliddingDoorsProfiles(
          products.slidingDoor
        );
      },
      false,
      `productsApi/setProductsApi`
    );
  },
});

export default createProductsApiSlice;
