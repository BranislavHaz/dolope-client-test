export const getAreaStands = (state) => {
  const standsDecorId = state.corpus.decorId;
  const standsCount = state.sections.count + 1;
  const standsWidth = state.corpus.depth;
  const standsHeight = state.corpus.height;
  const fullAreaMM2 = standsCount * standsWidth * standsHeight;
  const fullAreaM2 = (fullAreaMM2 / 1000000).toFixed(3);

  return { [standsDecorId]: Number(fullAreaM2) };
};
