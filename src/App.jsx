import GlobalStyles from "./GlobalStyles";
import data from "./assets/data/data.json";
import Header from "./components/Header";
import Planet from "./pages/Planet";
import { Routes, Route } from "react-router-dom";
import { createContext } from "react";

export const DataContext = createContext();

function App() {
  const planetsNames = data.map((name) => {
    return name.name;
  });

  return (
    <>
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
    </>
  );
}

export default App;
