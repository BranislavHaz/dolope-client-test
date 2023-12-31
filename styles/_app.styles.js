import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --background-color: #EAEAEC;
    --main-color: #F1B90D;
    --main-color-active: rgba(241, 185, 13, 0.14);
    --main-color-non-active: rgba(241, 185, 13, 0.30);
    --non-active-color: #C4C4C4;
    --warning-color: #f75e5e;

    // Mobile layout
    --m-header-height: 6vh;
    --m-wardrobe-view-height: 30vh;
    --m-wardrobe-config-height: 57vh;
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
