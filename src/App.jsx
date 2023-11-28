import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };
  
  return (
    <>
      <Header open={open} handleMenu={handleMenu} />
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/career' element={<Career open={open} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
