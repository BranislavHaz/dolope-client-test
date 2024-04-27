import { calcDoorsSize } from "@/utils/calcDoorsSize";
import { getTypesOfProfiles } from "@/utils/getAvailableProfiles/getTypesOfProfiles";

const createDoorsSlice = (set, get) => ({
  doors: {
    width: 0,
    height: 2603,
    count: 0,
    isVisible: false,
    selectedProfile: {
      color: "unfilled",
      handle: "unfilled",
      wheels: "asymmetric",
    },

    availableProfiles: [],
    typeDoors: {},

    dimensionsFromManual: {
      doorOverhang: {
        unfilled: 27.5,
        london: 27.5,
        berlin: 40,
        paris: 34,
        wien: 18,
        zurich: 31,
      },
      widthReserve: {
        unfilled: 35,
        london: 35,
        berlin: 62,
        paris: 51,
        wien: 17,
        zurich: 46,
      },
      hProfile: {
        height: 24,
        heightReserve: 2,
      },
    },
  },

  updateAvailableProfiles: () => {
    set(
      (state) => {
        state.doors.availableProfiles = getTypesOfProfiles(state);
      },
      false,
      "doors/updateAvailableProfiles"
    );
  },

  updateDoorsSize: () => {
    set(
      (state) => {
        const { width, height } = calcDoorsSize(state);
        state.doors.width = width;
        state.doors.height = height;
      },
      false,
      "doors/updateDoorsSize"
    );
  },

  setVisibilityDoors: (status) => {
    set(
      (state) => {
        state.doors.isVisible = status;
      },
      false,
      "doors/setVisibilityDoors"
    );
  },

  setDoorsCount: (count) => {
    set(
      (state) => {
        state.doors.count = count;
      },
      false,
      "doors/setDoorsCount"
    );
    get().updateDoorsSize();
    get().updateAvailableProfiles();
    get().updateViewportSizes("doors");
  },

  setSelectedProfile: (profile) => {
    set(
      (state) => {
        state.doors.selectedProfile = profile;
      },
      false,
      "doors/setSelectedProfile"
    );
  },

  setTypeOfDoors: ({ doorId, sections, typeOfDoor, isFilled = true }) => {
    set(
      (state) => {
        const newTypeDoors = { ...state.doors.typeDoors };
        isFilled
          ? (newTypeDoors[doorId] = { typeOfDoor, sections })
          : delete newTypeDoors[doorId];

        state.doors.typeDoors = newTypeDoors;
      },
      false,
      "doors/setTypeOfDoors"
    );
  },

  setDoorSectionDecorId: ({ doorId, sectionId, decorId, materialType }) => {
    set(
      (state) => {
        state.doors.typeDoors[doorId].sections[sectionId] = {
          ...state.doors.typeDoors[doorId].sections[sectionId],
          decorId,
          materialType,
        };
      },
      false,
      "doors/setDoorSectionDecorId"
    );
  },

  removeTypeOfDoors: (doorId) => {
    set(
      (state) => {
        const { [doorId]: _, ...newTypeDoors } = state.doors.typeDoors;
        state.doors.typeDoors = newTypeDoors;
      },
      false,
      "doors/removeTypeOfDoors"
    );
  },
});

export default createDoorsSlice;
