export const isAllowedSection = ({ corpusHeight, typeSection }) => {
  // Police
  if (typeSection === 26) {
    return corpusHeight >= 454;
  } else if (typeSection === 1) {
    return corpusHeight >= 654;
  } else if (typeSection === 2) {
    return corpusHeight >= 872;
  } else if (typeSection === 3) {
    return corpusHeight >= 1090;
  } else if (typeSection === 4) {
    return corpusHeight >= 1308;
  } else if (typeSection === 5) {
    return corpusHeight >= 1526;
  }
  // Zásuvky
  else if (typeSection === 27) {
    return corpusHeight >= 712;
  } else if (typeSection === 36) {
    return corpusHeight >= 930;
  } else if (typeSection === 28) {
    return corpusHeight >= 912;
  } else if (typeSection === 6) {
    return corpusHeight >= 1566;
  } else if (typeSection === 29) {
    return corpusHeight >= 1112;
  } else if (typeSection === 7) {
    return corpusHeight >= 1548;
  } else if (typeSection === 8) {
    return corpusHeight >= 1766;
  } else if (typeSection === 9) {
    return corpusHeight >= 1530;
  } else if (typeSection === 10) {
    return corpusHeight >= 1748;
  } else if (typeSection === 30) {
    return corpusHeight >= 912;
  } else if (typeSection === 37) {
    return corpusHeight >= 1130;
  } else if (typeSection === 11) {
    return corpusHeight >= 1330;
  } else if (typeSection === 12) {
    return corpusHeight >= 1548;
  } else if (typeSection === 13) {
    return corpusHeight >= 1312;
  } else if (typeSection === 14) {
    return corpusHeight >= 1530;
  } else if (typeSection === 15) {
    return corpusHeight >= 1512;
  } else if (typeSection === 16) {
    return corpusHeight >= 1730;
  }
  // Závesná tyč
  else if (typeSection === 31) {
    return corpusHeight >= 754;
  } else if (typeSection === 17) {
    return corpusHeight >= 954;
  } else if (typeSection === 18) {
    return corpusHeight >= 1172;
  } else if (typeSection === 19) {
    return corpusHeight >= 1390;
  } else if (typeSection === 38) {
    return corpusHeight >= 754;
  } else if (typeSection === 32) {
    return corpusHeight >= 954;
  } else if (typeSection === 20) {
    return corpusHeight >= 1172;
  } else if (typeSection === 21) {
    return corpusHeight >= 1390;
  } else if (typeSection === 33) {
    return corpusHeight >= 1012;
  } else if (typeSection === 22) {
    return corpusHeight >= 1212;
  } else if (typeSection === 23) {
    return corpusHeight >= 1194;
  } else if (typeSection === 24) {
    return corpusHeight >= 1394;
  } else if (typeSection === 34) {
    return corpusHeight >= 1012;
  } else if (typeSection === 35) {
    return corpusHeight >= 1212;
  } else if (typeSection === 39) {
    return corpusHeight >= 1412;
  } else if (typeSection === 25) {
    return corpusHeight >= 1054;
  }
  // Koniec
  else {
    return false;
  }
};
