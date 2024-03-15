import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Learnmore from './pages/Learnmore';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/l' element={<Learnmore/>} />
                <Route path='/a' element={<About/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
