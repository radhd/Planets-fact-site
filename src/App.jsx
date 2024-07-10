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
  white: "#FFFFFF",
  Mercury: {
    color: "#DEF4FC",
    imageSize: {
      small: {
        height: "111px",
      },
    },
  },
  Venus: {
    color: "#F7CC7F",
    imageSize: {
      small: {
        height: "154px",
      },
    },
  },
  Earth: {
    color: "#545BFE",
    imageSize: {
      small: {
        height: "173px",
      },
    },
  },
  Mars: {
    color: "#FF6A45",
    imageSize: {
      small: {
        height: "129px",
      },
    },
  },
  Jupiter: {
    color: "#ECAD7A",
    imageSize: {
      small: {
        height: "224px",
      },
    },
  },
  Saturn: {
    color: "#FCCB6B",
    imageSize: {
      small: {
        height: "256px",
      },
    },
  },
  Uranus: {
    color: "#65F0D5",
    imageSize: {
      small: {
        height: "176px",
      },
    },
  },
  Neptune: {
    color: "#497EFA",
    imageSize: {
      small: {
        height: "173px",
      },
    },
  },
};

export default App;
