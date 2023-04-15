import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Error,Home,Contact,About } from './pages';
import Header from "./components/Header";


import './App.css';

function App(args) {
  return (
    <div className="App">
    <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
