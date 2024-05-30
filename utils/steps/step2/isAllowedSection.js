export const isAllowedSection = ({ corpusHeight, typeSection }) => {
  // Police
  if (typeSection === 1) {
    return corpusHeight >= 414;
  } else if (typeSection === 2) {
    return corpusHeight >= 552;
  } else if (typeSection === 3) {
    return corpusHeight >= 690;
  } else if (typeSection === 4) {
    return corpusHeight >= 828;
  } else if (typeSection === 5) {
    return corpusHeight >= 966;
  }
  // Zásuvky
  else if (typeSection === 6) {
    return corpusHeight >= 1166;
  } else if (typeSection === 7) {
    return corpusHeight >= 1228;
  } else if (typeSection === 8) {
    return corpusHeight >= 1366;
  } else if (typeSection === 9) {
    return corpusHeight >= 1290;
  } else if (typeSection === 10) {
    return corpusHeight >= 1428;
  } else if (typeSection === 11) {
    return corpusHeight >= 1090;
  } else if (typeSection === 12) {
    return corpusHeight >= 1228;
  } else if (typeSection === 13) {
    return corpusHeight >= 1152;
  } else if (typeSection === 14) {
    return corpusHeight >= 1290;
  } else if (typeSection === 15) {
    return corpusHeight >= 1352;
  } else if (typeSection === 16) {
    return corpusHeight >= 1490;
  }
  // Závesná tyč
  else if (typeSection === 17) {
    return corpusHeight >= 594;
  } else if (typeSection === 18) {
    return corpusHeight >= 732;
  } else if (typeSection === 19) {
    return corpusHeight >= 870;
  } else if (typeSection === 20) {
    return corpusHeight >= 732;
  } else if (typeSection === 21) {
    return corpusHeight >= 870;
  } else if (typeSection === 22) {
    return corpusHeight >= 932;
  } else if (typeSection === 23) {
    return corpusHeight >= 994;
  } else if (typeSection === 24) {
    return corpusHeight >= 1194;
  } else if (typeSection === 25) {
    return corpusHeight >= 654;
  }
  // Koniec
  else {
    return false;
  }
};
