import { createGlobalStyle } from "styled-components";


import aesteticoregular from '../assets/fonts/Aestetico-Regular.otf'
import aesteticobold from '../assets/fonts/Aestetico-Bold.otf'
import aesteticomedium from '../assets/fonts/Aestetico-Medium.otf'
import aesteticosemibold from '../assets/fonts/Aestetico-SemiBold.otf'
import aesteticolight from '../assets/fonts/Aestetico-Light.otf'

export const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Aestetico', sans-serif;
  font-weight: 400;
}

`

export const FontStyle = createGlobalStyle`
    @font-face {
    font-family: 'Aestetico';
    src: url(${aesteticolight}) format('opentype');
    font-weight: 300;
    
}

    @font-face {
    font-family: 'Aestetico';
    src: url(${aesteticoregular}) format('opentype');
    font-weight: 400;
    
}

    @font-face {
    font-family: 'Aestetico';
    src: url(${aesteticomedium}) format('opentype');
    font-weight: 500;
    
}

@font-face {
    font-family: 'Aestetico';
    src: url(${aesteticosemibold}) format('opentype');
    font-weight: 600;
    
}

    @font-face {
    font-family: 'Aestetico';
    src: url(${aesteticobold}) format('opentype');
    font-weight: 700;
    
}
`

