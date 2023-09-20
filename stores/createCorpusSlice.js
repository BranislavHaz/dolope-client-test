import { calcCorpusAndSectionsWidth } from "@/utils/calcCorpusAndSectionsWidth";

const createCorpusSlice = (set, get) => ({
  corpus: {
    width: 2865,
    height: 2300,
    depth: 500,
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

  updateCorpusDepth: (nameOfAction) => {
    set(
      (state) => {
        state.corpus.depth = state.wardrobe.depth - 100;
      },
      false,
      `${nameOfAction}/updateCorpusDepth`
    );
  },
});

export default createCorpusSlice;
