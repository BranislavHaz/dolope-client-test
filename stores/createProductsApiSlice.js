const createProductsApiSlice = (set, get) => ({
  dtd10: [],
  dtd18: [],
  slidingDoor: [],

  setProductsApi: (products) => {
    set(
      (state) => {
        state.dtd10 = products.dtd10;
        state.dtd18 = products.dtd18;
        state.slidingDoor = products.slidingDoor;
      },
      false,
      `productsApi/setProductsApi`
    );
  },
});

export default createProductsApiSlice;
