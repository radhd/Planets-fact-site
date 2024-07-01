import Header from "../components/Header";
import data from "../assets/data/data.json";
import ButtonOverview from "../components/ButtonOverview";
import Information from "../components/Information";

export default function Mercury() {
  const planetsNames = data.map((name) => {
    return name.name;
  });

  return (
    <>
      <Header planetNames={planetsNames} />
      <ButtonOverview>Overview</ButtonOverview>
      <ButtonOverview>Structure</ButtonOverview>
      <ButtonOverview>Surface</ButtonOverview>
      <Information data={data} />
    </>
  );
}
