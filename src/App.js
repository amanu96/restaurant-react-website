import React from 'react';
import './App.css';
import NavBar from './componet/navaBar/NavBar';
import Footer from './componet/footter/Footer';
import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
import Contact from './page/Contact';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/menu' exact element = {<Menu/>}/>
          <Route path='/about' exact element ={<About/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
