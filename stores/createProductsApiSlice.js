import { categorizeSliddingDoorsProfiles } from "@/utils/categorizeSliddingDoorsProfiles";

const createProductsApiSlice = (set, get) => ({
  productsAPI: { dtd10: [], dtd18: [], slidingDoor: {} },

  setProductsApi: (products) => {
    set(
      (state) => {
        state.productsAPI.dtd10 = products.dtd10;
        state.productsAPI.dtd18 = products.dtd18;
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
