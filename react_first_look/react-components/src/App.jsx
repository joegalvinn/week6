import "./App.css";
import { StrictMode } from "react";
import Nav from "./components/Nav.jsx";
import BodyText from "./components/BodyText.jsx";

export default function App() {
  return (
    <>
      <StrictMode>
        <Nav image="https://www.pbs.org/wnet/nature/files/2022/12/pexels-zetong-li-10186375-1-scaled.jpg" />
        <BodyText />
        <Nav image="https://www.animalspot.net/wp-content/uploads/2022/03/Fennec-Fox-Photos.jpg" />
      </StrictMode>
    </>
  );
}
