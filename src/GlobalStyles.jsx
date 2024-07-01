import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`    *,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

body {
  min-height: 100svh;
  background-color: whitesmoke;
}

img,
picture,
svg,
video {
  display: block;
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

p {
  text-wrap: pretty;
}
`;

export default GlobalStyles;
