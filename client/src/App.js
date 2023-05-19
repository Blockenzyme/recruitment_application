import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Landing,
  About,
  HireEmployees,
  FindJobs,
  JobDescription,
} from "./pages";
import { NavbarComponent } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/hire-employees" element={<HireEmployees />} />
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path="/job-desc" element={<JobDescription />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
