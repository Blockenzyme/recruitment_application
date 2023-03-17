import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Landing,Error} from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Landing</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
