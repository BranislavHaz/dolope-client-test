const createModalSlice = (set, get) => ({
  modal: {
    isActive: false,
    beScrolled: false,
    type: "sizeWardrobe",
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

  setBeScrolled: (value) => {
    set(
      (state) => {
        state.modal.beScrolled = value;
      },
      false,
      "modal/setBeScrolled"
    );
  },

  setModalType: (type) => {
    set(
      (state) => {
        state.modal.type = type;
      },
      false,
      "modal/setModalType"
    );
  },
});

export default createModalSlice;
