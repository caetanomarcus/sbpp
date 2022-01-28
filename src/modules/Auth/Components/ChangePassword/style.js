import styled from "styled-components";

export const Container = styled.form`
    position: relative;
    margin: 0 40px;
    display: flex;
    flex-direction: column;
   
    @media (max-width: 480px) {
        margin: 24px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    height: 19px;
    justify-content:center;
    align-items: center;
    margin-top: 8px;

    @media (max-width: 480px) {
        margin-top: 15px;
        width: 95%;
        justify-content: unset;
    }
`

export const BlueBox = styled.div `
    position: absolute;
    right: -470px;
    width: 408px;
    height: 208px;
    padding: 10px 15px;
    padding-right: 5px;
    background: #001E64;
    border-radius: 4px;

    @media (max-width: 480px) {
        top:110%;
        left:50%;
        width: 96vw;
        padding: 11px;
        transform: translateX(-50%);
    }
`;

export const TrianguleBox = styled.div`
    position: absolute;
    top:20px;
    left: 0;
    width: 0; 
    height: 0; 
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent; 
    border-right:7px solid #001E64; 
    transform: translateY(-50%) translateX(-100%);

    @media (max-width: 480px) {
        top: -5px;
        left: 50%;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 10px solid #001E64;
        transform: translateY(-50%) translateX(-50%);
    }
`;

export const Text = styled.p`
    font: 400 14px 'Aestetico', sans-serif;
    color: ${props => props.isMatch? '#00E1B9' : '#FFFFFF'};
    margin-bottom: 12px;

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

export const RedText = styled.p`
    font: 400 12px 'Aestetico', sans-serif;
    color: #FF5000;
    visibility: ${props => props.isVisible? 'visible': 'hidden'};
`;

export const ConfirmedLogo = styled.img `
    width: 16px;
    transform: translateY(20%);
    visibility: ${props => props.isMatch? 'visible' : 'hidden'};
`;

export const BackBtn = styled.button `
    visibility: ${props => props.sent? 'visible': 'hidden'};
    border: none;
    background: transparent;
    margin-top: 8px;
    outline: none;
    font: 400 14px 'Aestetico';
    color: #001E64;;
    text-decoration: underline;
    cursor: pointer;
`;