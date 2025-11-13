import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/AdminDashboard/DashboardLayout";

import "./App.css"
import LandingPage from "./components/Landing/LandingPage";
function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Dashboard Layout with nested routes */}
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </Routes>
     

     
      
      
    </div>
  );
}

export default App;
