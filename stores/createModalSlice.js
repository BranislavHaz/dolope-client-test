const createModalSlice = (set, get) => ({
  modal: {
    isActive: false,
    beScrolled: false,
    type: "sizeWardrobe",
    flashMessage: {
      error: false,
    },
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

  setFlashMessage: ({ type, value }) => {
    set(
      (state) => {
        state.modal.flashMessage[type] = value;
      },
      false,
      "modal/setFlashMessage"
    );
  },
});

export default createModalSlice;
