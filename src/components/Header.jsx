import PlanetName from "./PlanetName";
import iconHamburger from "../assets/icon-hamburger.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

export default function Header(props) {
  const data = props.planetNames;
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <HeaderStyles>
          <div>THE PLANETS</div>
          <img onClick={menuHandler} src={iconHamburger} alt="hamburger menu" />
        </HeaderStyles>
        <NavMenu isOpen={isOpen}>
          <ul>
            {data.map((name, index) => {
              return (
                <li key={index}>
                  <Link to={`/${name.toLowerCase()}`}>
                    <PlanetName>{name}</PlanetName>
                  </Link>
                </li>
              );
            })}
          </ul>
        </NavMenu>
      </header>
    </>
  );
}

const HeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Antonio", sans-serif;
  padding: 16px 24px;
`;

const NavMenu = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: red;
`;
