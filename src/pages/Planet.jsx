import { useContext, useState } from "react";
import { DataContext } from "../App";
import Information from "../components/Information";
import ButtonOverview from "../components/ButtonOverview";
import styled from "styled-components";

export default function Planet() {
  const [isActive, setIsActive] = useState("OVERVIEW");

  const data = useContext(DataContext);

  const toggleHandler = (e) => {
    setIsActive(e.target.textContent);
  };

  return (
    <main>
      <OverviewSection>
        <ButtonOverview
          onClick={toggleHandler}
          isActive={isActive === "OVERVIEW"}
          name={data.name}
        >
          OVERVIEW
        </ButtonOverview>
        <ButtonOverview
          onClick={toggleHandler}
          isActive={isActive === "STRUCTURE"}
          name={data.name}
        >
          STRUCTURE
        </ButtonOverview>
        <ButtonOverview
          onClick={toggleHandler}
          isActive={isActive === "SURFACE"}
          name={data.name}
        >
          SURFACE
        </ButtonOverview>
      </OverviewSection>
      <Information data={data} isActive={isActive} />
    </main>
  );
}

const OverviewSection = styled.section`
  border-bottom: 1px solid #38384f;
  padding: 17px 24px;
  display: flex;
  justify-content: space-between;
`;
