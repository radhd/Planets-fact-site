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
      medium: {
        height: "184px",
      },
      large: {
        height: "290px",
      },
    },
  },
  Venus: {
    color: "#F7CC7F",
    imageSize: {
      small: {
        height: "154px",
      },
      medium: {
        height: "253px",
      },
      large: {
        height: "400px",
      },
    },
  },
  Earth: {
    color: "#545BFE",
    imageSize: {
      small: {
        height: "173px",
      },
      medium: {
        height: "285px",
      },
      large: {
        height: "450px",
      },
    },
  },
  Mars: {
    color: "#FF6A45",
    imageSize: {
      small: {
        height: "129px",
      },
      medium: {
        height: "213px",
      },
      large: {
        height: "336px",
      },
    },
  },
  Jupiter: {
    color: "#ECAD7A",
    imageSize: {
      small: {
        height: "224px",
      },
      medium: {
        height: "369px",
      },
      large: {
        height: "582px",
      },
    },
  },
  Saturn: {
    color: "#FCCB6B",
    imageSize: {
      small: {
        height: "256px",
      },
      medium: {
        height: "422px",
      },
      large: {
        height: "665px",
      },
    },
  },
  Uranus: {
    color: "#65F0D5",
    imageSize: {
      small: {
        height: "176px",
      },
      medium: {
        height: "290px",
      },
      large: {
        height: "458px",
      },
    },
  },
  Neptune: {
    color: "#497EFA",
    imageSize: {
      small: {
        height: "173px",
      },
      medium: {
        height: "285px",
      },
      large: {
        height: "450px",
      },
    },
  },
};

export default App;
