import PlanetName from "./PlanetName";
import iconHamburger from "../assets/icon-hamburger.svg";
import { Link } from "react-router-dom";

export default function Header(props) {
  const data = props.planetNames;

  return (
    <header>
      The Planets
      <nav>
        <img src={iconHamburger} alt="" />
        <ul>
          {data.map((name, index) => {
            console.log(name);
            return (
              <li key={index}>
                <Link to={`/${name.toLowerCase()}`}>
                  <PlanetName>{name}</PlanetName>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
