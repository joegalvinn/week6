import "./Nav.css";

export default function Nav(props) {
  return (
    <section className="wholeNav">
      <div className="navImg">
        <img src={props.image} alt="Fennec fox cubs" />
      </div>

      <div>
        <nav>
          <a href="#top">HOME </a>
          <a href="#top">NEWS </a>
          <a href="#where">WHERE </a>
          <a href="#how">HOW</a>
        </nav>
      </div>
    </section>
  );
}
