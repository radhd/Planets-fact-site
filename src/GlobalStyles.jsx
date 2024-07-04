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

html {
  color-scheme: dark light;
}

body {
  min-height: 100svh;
  background-color: #070724;
  font-family: "League Spartan", sans-serif;
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
li {
  list-style: none;
}
button {
  margin: 10px;
}
`;

export default GlobalStyles;
