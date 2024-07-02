import iconSource from "../assets/icon-source.svg";

export default function Information({ data }) {
  return (
    <div>
      <img src={data.images.planet} alt="" />
      <h1>{data.name}</h1>
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
    </div>
  );
}
