import styled from "styled-components";

import logo from '../../../../assets/icons/back-button.png'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 40px;

    @media (max-width: 480px) {
        margin: 0 24px;
        padding-left: 10px;
        
    }
`;

export const Box = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 16px;
    margin-top: 16px;
    
`;

export const BackButton = styled.button`
    position: relative;
    width: 26px;
    height: 21px;
    border: none;
    background: transparent;
    cursor: pointer;

    :after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 26px;
        height: 21px;
        background: url(${logo});
        background-size: contain;
        transform: translateX(-25%);
    }

`;

export const TextBold = styled.p`
    font: 700 16px 'Aestetico', sans-serif;
    color: #001E64;
`;

export const Text = styled.p `
    font: 400 16px 'Aestetico', sans-serif;
    color: #323232;
    margin-bottom: 16px;

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

export const RedText = styled.p`
    font: 400 12px 'Aestetico', sans-serif;
    color: #FF5000;
    visibility: ${props => props.isVisible? 'visible': 'hidden'};
`;

export const SentMgsBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    visibility: ${props => props.sent? 'visible': 'hidden'};
    margin-top: 7px;
`;

export const SentMsg = styled.p`
    font: 500 15px 'Aestetico', sans-serif;
    color: #323232;
`;

export const ResendBtn = styled.button `
    border: none;
    background: transparent;
    outline: none;
    font: 500 15px 'Aestetico';
    color: #323232;
    text-decoration: underline;
    cursor: pointer;
`;