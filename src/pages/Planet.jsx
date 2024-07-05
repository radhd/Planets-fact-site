import { useContext, useState } from "react";
import { DataContext } from "../App";
import Information from "../components/Information";
import ButtonOverview from "../components/ButtonOverview";
import styled from "styled-components";

export default function Planet() {
  const [isActive, setIsActive] = useState("Overview");

  const data = useContext(DataContext);

  const toggleHandler = (e) => {
    setIsActive(e.target.textContent);
  };

  return (
    <>
      <OverviewSection>
        <ButtonOverview
          onClick={toggleHandler}
          isActive={isActive === "Overview"}
          name={data.name}
        >
          Overview
        </ButtonOverview>
        <ButtonOverview
          onClick={toggleHandler}
          isActive={isActive === "Structure"}
          name={data.name}
        >
          Structure
        </ButtonOverview>
        <ButtonOverview
          onClick={toggleHandler}
          isActive={isActive === "Surface"}
          name={data.name}
        >
          Surface
        </ButtonOverview>
      </OverviewSection>
      <Information data={data} />
    </>
  );
}

const OverviewSection = styled.section`
  border-bottom: 1px solid #38384f;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
`;
