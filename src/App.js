
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Career from './pages/Career';
import Header from './components/Header/Header';
import Index from "./pages/Ignite";
import Ignite from "./pages/Ignite";


function App() {
  return (
    
    <>
    <Header/>
    <div className='pages'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/ignite" element={<Ignite/>}/>
      
    </Routes>
    </div>
    </>
  
  );
}

export default App;
