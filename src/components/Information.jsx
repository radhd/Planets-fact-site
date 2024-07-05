import iconSource from "../assets/icon-source.svg";
import styled from "styled-components";

export default function Information({ data }) {
  return (
    <InformationWrapper>
      <ImageContainer>
        <img src={data.images.planet} alt="" />
      </ImageContainer>
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

const InformationWrapper = styled.section`
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 111px;
  height: 111px;
  margin: 95px auto;
`;

const Title = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 2.5rem;
  text-align: center;
`;
