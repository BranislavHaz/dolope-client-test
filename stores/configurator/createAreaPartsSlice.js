import { calcAreaParts } from "@/utils/configurator/calcAreaParts";

const createAreaPartsSlice = (set, get) => ({
  updateAreaParts: (nameOfAction) => {
    set(
      (state) => {
        calcAreaParts(state);
      },
      false,
      `${nameOfAction}/updateAreaParts`
    );
  },
});

export default createAreaPartsSlice;
