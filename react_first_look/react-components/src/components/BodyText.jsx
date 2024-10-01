import "./BodyText.css";

export default function Body(props) {
  return (
    <div className="cooldiv" id="cooldiv">
      <h1 id={props.h1id}>
        This is HTML, just it has been returned from a component
      </h1>
      :<h2>Testing multiple elements!</h2>
    </div>
  );
}
