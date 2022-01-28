import React, {Fragment} from 'react'
import { GlobalStyle } from './components/GlobalStyle';
import InitialScreen from './modules/Beneficiary';
import LoginScreen from "./modules/Auth";



function App() {
  return (
    <Fragment>
      <GlobalStyle />
      {/* <LoginScreen /> */}
      <InitialScreen />
    </Fragment>
  );
}

export default App;
