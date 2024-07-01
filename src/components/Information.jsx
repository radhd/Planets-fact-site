import iconSource from "../assets/icon-source.svg";

export default function Information({ data }) {
  return (
    <div>
      <img src={data[0].images.planet} alt="" />
      <h1>{data[0].name}</h1>
      <p>{data[0].overview.content}</p>
      <div>
        <p>
          Source: <a href={data[0].overview.source}>Wikipedia</a>
        </p>
        <img src={iconSource} alt="" />
      </div>
      <div>
        <span>Rotation Time</span> <span>{data[0].rotation}</span>
      </div>
      <div>
        <span>Revolution Time</span> <span>{data[0].revolution}</span>
      </div>
      <div>
        <span>Radius</span> <span>{data[0].radius}</span>
      </div>
      <div>
        <span>Average Temp</span> <span>{data[0].rotation}</span>
      </div>
    </div>
  );
}
