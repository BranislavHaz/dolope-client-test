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
    --m-wardrobe-view-height: 40vh;
    --m-wardrobe-config-height: 47vh;
    --m-footer-height: 7vh;

    // Laptop layout
    --l-wardrobe-view-height: 60vh;
    --l-wardrobe-config-height: 80vh;
    --l-footer-height: 15vh;

    // Profile color
    --profile-color-white: #ffffff;
    --profile-color-black: #000000;
    --profile-color-silver: #c0c0c0;
    --profile-color-champagne: #aaa484;

    // now
    --bg-color-view: #EBEBEB;
    --bg-color-config: #F5F5F5;
    --bg-color-select-box: #F7F7F7;
    --bg-color-select-box-icon: #282828;

    --bg-input: #F7F7F7;
    --bg-input-error: rgba(255, 126, 126, 0.1);
    --bg-input-icon: #282828;
    --bg-button: #282828;
    --bg-input-active: #282828;
    --border-input-default: 1px solid rgba(196, 196, 196, 0.33);
    --border-input-active: 1px solid #282828;
    --border-input-error: 1px solid rgba(255, 0, 0, 0.2);
    --border-select: 1px solid #000;

    --font-family: "Roboto", sans-serif;
    --font-color: #000000;
    --font-color-error: #ff3a3a;
    --font-color-active: #fff;
    --wood-color: #966f33;

    --border-radius: 5px;


  }

html,
body {
    padding: 0;
    margin: 0;
    font-family: var(--font-family);
}

div, p, h1, h2, h3, h4, h5, span {
    margin: 0;
    padding: 0;
}

body {
    background-color: var(--bg-color-view);
    font-size: 16px;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;
