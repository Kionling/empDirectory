import React from 'react';
import logo from './logo.svg';
import './App.css';
import Workplace from "./pages/GlobalState";
import Navbar from "./components/navbar"
import Jumbotron from "./components/Jumbotron"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron /> 
      <Workplace />
    </div>
  );
}

export default App;
