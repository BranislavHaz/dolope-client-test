import { calcDoorsSize } from "@/utils/calcDoorsSize";

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
    typeOfDoors: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
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
    },
  },

  updateDoorsSize: () => {
    set(
      (state) => {
        /* state.doors.width;
        state.doors.height; */
        const { width } = calcDoorsSize(state);
        state.doors.width = width;
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
  },
});

export default createDoorsSlice;
