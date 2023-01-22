import React from 'react';
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import { Landing,Error,Dashboard,Register } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/landing">Landing</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
