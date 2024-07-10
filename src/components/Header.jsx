import PlanetName from "./PlanetName";
import iconHamburger from "../assets/icon-hamburger.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import iconChevron from "../assets/icon-chevron.svg";

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
          <ImgBurger
            onClick={menuHandler}
            src={iconHamburger}
            alt="hamburger menu"
          />
        </HeaderStyles>
        <NavMenu isOpen={isOpen}>
          <UlFlex>
            {data.map((name, index) => {
              return (
                <li key={index}>
                  <StyledLink onClick={menuHandler} to={`/${name}`}>
                    <Planets>
                      <FlexDiv>
                        <PlanetsMiniImage planetColors={planetColors[name]} />
                        <PlanetName>{name.toUpperCase()}</PlanetName>
                      </FlexDiv>
                      <ChevronNavigation />
                    </Planets>
                  </StyledLink>
                </li>
              );
            })}
          </UlFlex>
        </NavMenu>
      </header>
    </>
  );
}

const UlFlex = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 33px;
  }
`;

const ImgBurger = styled.img`
  background-image: url("../assets/icon-hamburger.svg");

  @media (min-width: 768px) {
    display: none;
  }
`;

const HeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Antonio", sans-serif;
  padding: 16px 24px;
  border-bottom: 1px solid #38384f;
  @media (min-width: 768px) {
    justify-content: center;
    font-size: 1.75rem;
    border-bottom: 0px solid #38384f;
  }
`;

const NavMenu = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  min-height: 100vh;
  @media (min-width: 768px) {
    min-height: 0;
    display: ${({ isOpen }) => (isOpen ? "block" : "block")};
    padding: 40px 51px 27px;
    border-bottom: 1px solid #38384f;
  }
`;

const PlanetsMiniImage = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => {
    return props.planetColors;
  }};
  border-radius: 50%;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Planets = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #38384f;
  @media (min-width: 768px) {
    justify-content: center;
    font-size: 0.6875rem;
    opacity: 70%;
    padding: 0px;
    border-top: 0px solid #38384f;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: "League Spartan", sans-serif;
  color: white;
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.3636363744735718px;
`;

const ChevronNavigation = styled.div`
  background-image: url(${iconChevron});
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;
