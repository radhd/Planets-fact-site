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
      <section>
        <ButtonOverview
          onClick={toggleHandler}
          isActive={isActive === "Overview"}
        >
          Overview
        </ButtonOverview>
        <ButtonOverview
          onClick={toggleHandler}
          isActive={isActive === "Structure"}
        >
          Structure
        </ButtonOverview>
        <ButtonOverview
          onClick={toggleHandler}
          isActive={isActive === "Surface"}
        >
          Surface
        </ButtonOverview>
      </section>
      <Information data={data} />
    </>
  );
}
