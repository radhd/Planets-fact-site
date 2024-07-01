import PlanetName from "./PlanetName";
import iconHamburger from "../assets/icon-hamburger.svg";

export default function Header(props) {
  const data = props.planetNames;

  return (
    <header>
      The Planets
      <nav>
        <img src={iconHamburger} alt="" />
        <ul>
          {data.map((name, index) => {
            return (
              <li key={index}>
                <PlanetName>{name}</PlanetName>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
