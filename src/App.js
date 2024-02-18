import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import './styles/App.css';
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <div className="relative">
          <Hero />
        </div>
        {/*<div className="relative">*/}
          <Gallery/>
        {/*</div>*/}
      </div>
    </NextUIProvider>
  );
}

export default App;
