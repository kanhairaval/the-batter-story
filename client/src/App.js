import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" Component={Home}/>
      </Routes>       
    </Router>
  );
};

export default App;
