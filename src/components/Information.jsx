import iconSource from "../assets/icon-source.svg";
import styled from "styled-components";

export default function Information({ data, isActive }) {
  return (
    <InformationWrapper>
      <PlanetImage
        images={data.images}
        name={data.name}
        altText={data.name}
        isActive={isActive}
      >
        <PlanetGeology images={data.images} isActive={isActive} />
      </PlanetImage>

      <Wrapper>
        <Title>{data.name}</Title>
        <DataOverviewParagraph>{data.overview.content}</DataOverviewParagraph>
        <div>
          <p>
            Source: <a href={data.overview.source}>Wikipedia</a>
          </p>
          <img src={iconSource} alt="" />
        </div>
      </Wrapper>
      <div>
        <span>Rotation Time</span> <span>{data.rotation}</span>
      </div>
      <div>
        <span>Revolution Time</span> <span>{data.revolution}</span>
      </div>
      <div>
        <span>Radius</span> <span>{data.radius}</span>
      </div>
      <div>
        <span>Average Temp</span> <span>{data.rotation}</span>
      </div>
    </InformationWrapper>
  );
}

const DataOverviewParagraph = styled.p`
  font-size: 0.6875rem;
  margin: 16px 0 32px;
  opacity: 70%;
`;

const PlanetImage = styled.div`
  background-image: url(${(props) =>
    props.isActive === "OVERVIEW"
      ? props.images.planet
      : props.isActive === "SURFACE"
        ? props.images.internal
        : props.images.planet});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: ${(props) => props.theme[props.name].imageSize.small.height};
  margin: 76px 0;
`;

const PlanetGeology = styled.div`
  background-image: url(${(props) =>
    props.isActive === "STRUCTURE" ? props.images.geology : null});
  background-size: contain;
  background-repeat: no-repeat;
  height: 70px;
  margin: 76px 0;
  position: absolute;
  top: 5%;
  left: 43%;
  aspect-ratio: 1;
`;

const InformationWrapper = styled.section`
  text-align: center;
  position: relative;
`;

const Title = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 2.5rem;
`;

const Wrapper = styled.div`
  padding: 0 24px 28px;
`;
