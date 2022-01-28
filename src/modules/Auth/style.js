import styled from "styled-components";

//Images
import orangeWaves from '../../assets/images/orange-waves.png';

export const Wrapper = styled.section `
    height: 100vh;
    display: flex;
    align-items: center;
    padding-left: 15rem;
    background-color: #EFEFEF;
    background-image: url(${orangeWaves});
    background-repeat:no-repeat;
    background-position: right top;
    background-size: contain;

    @media (max-width: 480px) {
        align-items: unset;
        justify-content: center;
        padding-left: 0;
        background-size: cover;
        background-position: calc(35% - 20px) 50%;
    }
`;

export const LoginContainer = styled.div `
    width: 360px;
    height: 448px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 0;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px #00000029;
    border-radius: 4px;

    @media (max-width: 480px) {
        width: 80%;
        height: 80%;
        margin: 0 auto;
        margin-top: 44px;

    }
`;

export const Header = styled.div `
    width: 13.75rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;


export const Logo = styled.img `
    width: ${props => props.width};
`;

export const Line = styled.div`
    width: 280px;
    border: 2px solid #FF8C00;
    margin-top: 20px;

    @media (max-width: 480px) {
        width: 95%;
        
    }
`;

export const loginFooter = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 480px) {
        width: 95%;
        margin-top: 10%;
    }
`;

