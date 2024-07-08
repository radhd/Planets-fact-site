import iconSource from "../assets/icon-source.svg";
import styled from "styled-components";

export default function Information({ data }) {
  return (
    <InformationWrapper>
      <PlanetImage images={data.images} name={data.name}></PlanetImage>

      {/* <ImageContainer>
        <img src={data.images.planet} alt="" />
      </ImageContainer> */}
      <Title>{data.name}</Title>
      <p>{data.overview.content}</p>
      <div>
        <p>
          Source: <a href={data.overview.source}>Wikipedia</a>
        </p>
        <img src={iconSource} alt="" />
      </div>
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

const PlanetImage = styled.div`
  background-image: url(${(props) => props.images.planet});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: ${(props) => props.theme[props.name].imageSize.small.height};
`;

const InformationWrapper = styled.section`
  text-align: center;
`;

const ImageContainer = styled.div`
  max-width: 111px;
  margin: 95px auto;
`;

const Title = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 2.5rem;
  text-align: center;
`;
