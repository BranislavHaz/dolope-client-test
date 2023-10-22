import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --background-color: #EAEAEC;
    --main-color: #F1B90D;
    --non-active-color: #C4C4C4;

    // Mobile layout
    --m-header-height: 8vh;
    --m-wardrobe-view-height: 42vh;
    --m-wardrobe-config-height: 43vh;
    --m-footer-height: 7vh;
  }

html,
body {
    padding: 0;
    margin: 0;
    font-family: 'Quicksand', sans-serif;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;
