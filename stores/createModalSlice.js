const createModalSlice = (set, get) => ({
  modal: {
    isActive: false,
  },

  setIsModalActive: (value) => {
    set(
      (state) => {
        state.modal.isActive = value;
      },
      false,
      "modal/setIsModalActive"
    );
  },
});

export default createModalSlice;
