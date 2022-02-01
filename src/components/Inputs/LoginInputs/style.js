import styled from 'styled-components';

//Images
import displayIcon from '../../../assets/icons/display.png';
import hideDisplayIcon from '../../../assets/icons/hide-display.png';

export const Container = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.marginBottom};
`;

export const Label = styled.label `
    margin-bottom: 8px;
    text-align: left;
    font: 700 16px 'Aestetico', sans-serif;
    color: #001E64;

    @media (max-width: 480px) {
        align-items: unset;
        font-size: 14px;
    }
`;

export const LoginInput = styled.input `
    width: 280px;
    height: 40px;
    border: 1px solid #AAAAAA;
    padding-left: 14px;
    border-color: ${props => props.error? '#FF5000': 'initial'};
    border-radius: 4px;
    box-shadow: ${props => props.error? '0px 0px 6px #D2D2D2': 'none'};
    box-sizing: border-box;
    font: 400 16px 'Aestetico', sans-serif;
    color: #323232;
    outline: none;

    :focus{
        box-shadow: 0px 0px 6px #D2D2D2;
        border-color: #001E64;
    }

    @media (max-width: 480px) {
        width: 95%;
        font-size: 14px;
    }
`;

export const CrossError = styled.div`
    position: absolute;
    top: 50%;
    right: 15px;
    width: 12px;
    height: 12px;
    color: #FF5000;
    transform: translate(-50%);
    
`;

export const CrossOne = styled.div `
    position: absolute;
    top:50%;
    left:50%;
    width: 1px;
    height: 16px;
    background: #FF5000;
    transform: rotate(45deg);
`

export const CrossTwo = styled.div `
    position: absolute;
    top:50%;
    left:50%;
    width: 1px;
    height: 16px;
    background: #FF5000;
    transform: rotate(-45deg);
`

export const DisplayBtn = styled.button `
    position: absolute;
    right: 37px;
    top: 25%;
    width: 25px;
    height: 25px;
    background: transparent;
    border: none;
    outline: none;
    transform: translateY(-25%);

    :after {
        content: '';
        position: absolute;
        top: ${props => props.isHide? '54%': '50%'};
        left: 50%;
        background: url(${props => props.isHide? hideDisplayIcon: displayIcon});
        background-repeat: no-repeat;
        background-size: contain;
        width: 25px;
        height: 25px;
        transform: translate(50%, 50%);
        cursor: pointer;
    }
`;