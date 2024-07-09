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
          <DataOverviewParagraph>
            Source:{" "}
            <DivWikipedia>
              <ParagraphA href={data.overview.source}>Wikipedia</ParagraphA>
              <img src={iconSource} alt="" />
            </DivWikipedia>
          </DataOverviewParagraph>
        </div>
      </Wrapper>
      <WrapperRotations>
        <RotationsBorders>
          <RotationsColor>Rotation Time</RotationsColor>{" "}
          <RotationDays>{data.rotation}</RotationDays>
        </RotationsBorders>
        <RotationsBorders>
          <RotationsColor>Revolution Time</RotationsColor>{" "}
          <RotationDays>{data.revolution}</RotationDays>
        </RotationsBorders>
        <RotationsBorders>
          <RotationsColor>Radius</RotationsColor>{" "}
          <RotationDays>{data.radius}</RotationDays>
        </RotationsBorders>
        <RotationsBorders>
          <RotationsColor>Average Temp</RotationsColor>{" "}
          <RotationDays>{data.rotation}</RotationDays>
        </RotationsBorders>
      </WrapperRotations>
    </InformationWrapper>
  );
}

const RotationDays = styled.span`
  font-size: 1.25rem;
`;

const RotationsColor = styled.span`
  color: white;
  opacity: 70%;
`;

const RotationsBorders = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  border: 1px solid gray;
  padding: 9px 24px 13px;
  margin-bottom: 8px;
`;

const WrapperRotations = styled.div`
  padding: 0 24px 47px;
`;

const DivWikipedia = styled.div`
  display: inline-flex;
  align-items: center;
`;

const ParagraphA = styled.a`
  color: white;
`;

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
