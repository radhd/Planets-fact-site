import PlanetsData from "../assets/data/data.json";
import PlanetName from "./PlanetName";

export default function Header() {
  const data = PlanetsData;
  console.log(data[0]);
  return (
    <header>
      The Planets
      <nav>
        <ul>
          {data.map(name => {
            return <li><PlanetName>{name.name}</PlanetName></li>;
          })}
        </ul>
      </nav>
    </header>
  );
}
