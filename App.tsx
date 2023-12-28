import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Netflix} from "./view/Netflix";

function App() {
  return (

 <BrowserRouter>

   <Netflix/>

 </BrowserRouter>

  );
}

export default App;
