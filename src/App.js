import React from 'react'
import { GlobalStyle } from './components/GlobalStyle';
import PrivateRoute from './components/PrivateRoute'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Beneficiary from './modules/Beneficiary';
import LoginScreen from "./modules/Auth";



function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<LoginScreen />} />
      <Route path='/beneficiary' 
      element={ <PrivateRoute> 
        <Beneficiary />
      </PrivateRoute> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
