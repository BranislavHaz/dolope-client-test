import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --background-color: #EAEAEC;
    --main-color: #E4563D;
    --non-active-color: #C4C4C4;

    // Mobile layout
    --m-header-height: 5vh;
    --m-steps-height: 5vh;
    --m-wardrobe-view-height: 43vh;
    --m-wardrobe-config-height: 40vh;
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
