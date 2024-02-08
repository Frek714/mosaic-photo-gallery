import React, {useRef} from "react";
import './styles/App.css';
import gsap from "gsap";
import {useGSAP} from "@gsap/react"; // <-- import GSAP
import {ScrollTrigger} from "gsap/ScrollTrigger";
import foto from "./sources/castel-sanangelo-1.jpg";
import Gallery from "./components/Gallery";

gsap.registerPlugin(ScrollTrigger);

function App() {
  
  return (
    <div className="App">
      <Gallery />
    </div>
  );
}

export default App;
