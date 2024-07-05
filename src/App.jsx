import GlobalStyles from "./GlobalStyles";
import data from "./assets/data/data.json";
import Header from "./components/Header";
import Planet from "./pages/Planet";
import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
import styled, { ThemeProvider } from "styled-components";

export const DataContext = createContext();

function App() {
  const planetsNames = data.map((name) => {
    return name.name;
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header planetNames={planetsNames} />
      <Routes>
        {data.map((planet, index) => {
          return (
            <Route
              key={index}
              path={`/${planet.name.toLowerCase() === "mercury" ? "/" && "mercury" : `/${planet.name.toLowerCase()}`}`}
              element={
                <DataContext.Provider value={data[index]}>
                  <Planet data={data[index]} />
                </DataContext.Provider>
              }
            />
          );
        })}
      </Routes>
    </ThemeProvider>
  );
}

const defaultTheme = {
  background: "#070724",
};

const planetColors = {
  Mercury: "#DEF4FC",
  Venus: "#F7CC7F",
  Earth: "#545BFE",
  Mars: "#FF6A45",
  Jupiter: "#ECAD7A",
  Saturn: "#FCCB6B",
  Uranus: "#65F0D5",
  Neptune: "#497EFA",
};

export default App;
