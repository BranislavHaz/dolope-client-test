import { calcDoorsSize } from "@/utils/calcDoorsSize";
import { getTypesOfProfiles } from "@/utils/getTypesOfProfiles";

const createDoorsSlice = (set, get) => ({
  doors: {
    width: 0,
    height: 2603,
    count: 0,
    typeOfProfiles: {
      color: "silver",
      handle: "london",
      horizontalProfile: "narrow",
      wheels: "asymmetric",
    },
    typeOfDoors: [
      {
        id: "door1",
        sections: [{ idMaterial: undefined, width: 0, height: 0 }],
      },
      {
        id: "door2",
        sections: [{ idMaterial: undefined, width: 0, height: 0 }],
      },
      {
        id: "door3",
        sections: [{ idMaterial: undefined, width: 0, height: 0 }],
      },
      {
        id: "door4",
        sections: [{ idMaterial: undefined, width: 0, height: 0 }],
      },
      {
        id: "door5",
        sections: [{ idMaterial: undefined, width: 0, height: 0 }],
      },
      {
        id: "door6",
        sections: [{ idMaterial: undefined, width: 0, height: 0 }],
      },
    ],

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
    },
  },

  updateTypesOfProfiles: () => {
    set(
      (state) => {
        console.log(getTypesOfProfiles(state));
      },
      false,
      "doors/updateTypesOfProfiles"
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
    get().updateTypesOfProfiles();
  },
});

export default createDoorsSlice;
