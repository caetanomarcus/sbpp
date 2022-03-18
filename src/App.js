import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Beneficiary from './modules/Beneficiary';
import LoginScreen from "./modules/Auth";
import './assets/css/fonts.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginScreen />} />
      <Route path='/beneficiary' element={ <Beneficiary />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
