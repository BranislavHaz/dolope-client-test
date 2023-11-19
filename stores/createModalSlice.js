const createModalSlice = (set, get) => ({
  modal: {
    isActive: false,
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
