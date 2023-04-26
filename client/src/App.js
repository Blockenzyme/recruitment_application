import React from 'react';
import { Routes, Route,Navigate} from "react-router-dom";
import { Home,Contact,About } from './pages';
import Header from "./components/Header/Header";


import './App.css';

function App(args) {

  return (
    <div className="App">
    <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<Navigate to='/'/> } />
      </Routes>
    </div>
  );
}

export default App;
