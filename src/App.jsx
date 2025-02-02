import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Design from "./components/Design";
import Coding from "./components/Coding";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft />
        <main className="flex-[3]">
          <Home />
          <Experience />
          <Design />
          <Coding />
          <Contact />
        </main>

      </div>
    </>

  );
}


export default App;
