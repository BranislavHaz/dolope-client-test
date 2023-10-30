import { calcCorpusAndSectionsWidth } from "@/utils/calcCorpusAndSectionsWidth";

const createCorpusSlice = (set, get) => ({
  corpus: {
    width: 2865,
    height: 2300,
    depth: 500,
    topShelfHeight: 20,
    minWidthReserve: 8,
  },

  updateCorpusWidth: (nameOfAction) => {
    set(
      (state) => {
        const { corpusWidth } = calcCorpusAndSectionsWidth(state);
        state.corpus.width = corpusWidth;
      },
      false,
      `${nameOfAction}/updateCorpusWidth`
    );
  },

  updateCorpusHeight: (nameOfAction) => {
    set(
      (state) => {
        state.corpus.height =
          state.wardrobe.height - state.corpus.topShelfHeight;
      },
      false,
      `${nameOfAction}/updateCorpusHeight`
    );
  },

  updateCorpusDepth: (nameOfAction) => {
    set(
      (state) => {
        state.corpus.depth = state.wardrobe.depth - 100;
      },
      false,
      `${nameOfAction}/updateCorpusDepth`
    );
  },

  setTopShelfHeight: (height) => {
    set(
      (state) => {
        state.corpus.topShelfHeight = height;
      },
      false,
      "corpus/setTopShelfHeight"
    );
    get().updateCorpusHeight("corpus");
  },
});

export default createCorpusSlice;
