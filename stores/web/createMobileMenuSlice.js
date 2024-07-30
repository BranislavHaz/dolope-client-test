const createMobileMenuSlice = (set, get) => ({
  isMobileMenuActive: false,

  setIsMobileMenuActive: (value) => {
    set(
      (state) => {
        state.isMobileMenuActive = value;
      },
      false,
      `mobileMenu/setIsMobileMenuActive`
    );
  },
});

export default createMobileMenuSlice;
