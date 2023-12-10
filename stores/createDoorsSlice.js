import { calcDoorsSize } from "@/utils/calcDoorsSize";
import { getTypesOfProfiles } from "@/utils/getAvailableProfiles/getTypesOfProfiles";

const createDoorsSlice = (set, get) => ({
  doors: {
    width: 0,
    height: 2603,
    count: 0,
    selectedProfile: {
      color: "silver",
      handle: "london",
      wheels: "asymmetric",
    },

    availableProfiles: [],
    typeOfDoors: {
      door1: { type: 4, sections: [] },
      door2: { type: 0, sections: [] },
      door3: { type: 5, sections: [] },
      door4: { type: 0, sections: [] },
      door5: { type: 0, sections: [] },
      door6: { type: 0, sections: [] },
      door7: { type: 4, sections: [] },
      door8: { type: 0, sections: [] },
      door9: { type: 5, sections: [] },
      door10: { type: 0, sections: [] },
      door11: { type: 0, sections: [] },
      door12: { type: 0, sections: [] },
    },

    typeDoors: {
      door1: [],
      door2: [],
      door3: [],
      door4: [],
      door5: [],
      door6: [],
      door7: [],
      door8: [],
      door9: [],
      door10: [],
      door11: [],
      door12: [],
    },

    dimensionsFromManual: {
      doorOverhang: {
        london: 27.5,
        berlin: 40,
        paris: 34,
        wien: 18,
        zurich: 31,
      },
      widthReserve: {
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

  setTypeOfDoors: ({ doorId, sections }) => {
    const doorKey = `door${doorId}`;
    console.log(sections);
    console.log(doorId);

    set(
      (state) => {
        state.doors.typeDoors[doorKey] = sections;
      },
      false,
      "doors/setTypeOfDoors"
    );
  },
});

export default createDoorsSlice;
