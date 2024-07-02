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
        <Route
          path="/"
          element={
            <DataContext.Provider value={data[0]}>
              <Planet data={data[0]} />
            </DataContext.Provider>
          }
        />
        <Route
          path="/earth"
          element={
            <DataContext.Provider value={data[2]}>
              <Planet data={data[2]} />
            </DataContext.Provider>
          }
        />
      </Routes>
    </>
  );
}

export default App;
