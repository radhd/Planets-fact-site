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
                  <StyledLink onClick={menuHandler} to={`/${name}`}>
                    <Planets>
                      <PlanetsMiniImage planetColors={planetColors[name]} />

                      <PlanetName>{name}</PlanetName>
                    </Planets>
                  </StyledLink>
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
  min-height: 100vh;
`;

const PlanetsMiniImage = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => {
    return props.planetColors;
  }};
  border-radius: 50%;
`;

const Planets = styled.div`
  padding: 44px 24px;
  display: flex;
  align-items: center;
  gap: 25px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
