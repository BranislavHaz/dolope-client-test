export const nextStepFilterBox = ({ state, type }) => {
  const maxStep = state[type].count;
  const currentStep = state.activeFilter[type];

  const nextStep = () => {
    currentStep < maxStep && state.setActiveFilter(type, currentStep + 1);
    currentStep >= maxStep && state.setActiveFilter(type, 1);
    state.setBeScrolled(false);
  };

  state.setBeScrolled(true);

  setTimeout(nextStep, 600);
};
