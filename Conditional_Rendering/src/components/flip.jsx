import data from "./lib/data.json";
import "./flip.css";

export default function Flip() {
  return (
    <div className="container">
      <div className="innercontainer">
        <div className="front face">
          {data.map((flavour) => (
            <div key={flavour.id}>
              <h1>{flavour.flavour}</h1>
            </div>
          ))}
        </div>
        <div className="back face">BACK</div>
      </div>
    </div>
  );
}
