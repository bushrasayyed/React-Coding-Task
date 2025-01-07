import React from "react";
import "./App.css"; 
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard"; 

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Header />
      <div className="main-content">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
