import { useContext } from "react";
import { DataContext } from "../App";
import Information from "../components/Information";
import ButtonOverview from "../components/ButtonOverview";

export default function Planet() {
  const data = useContext(DataContext);
  return (
    <>
      <ButtonOverview>Overview</ButtonOverview>
      <ButtonOverview>Structure</ButtonOverview>
      <ButtonOverview>Surface</ButtonOverview>
      <Information data={data} />
    </>
  );
}
