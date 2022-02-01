import styled from "styled-components";

import house from '../../../../assets/icons/circled-house.svg'

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background: #EFEFEF;
    padding: 18px;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px #0000001A;
    border-radius: 4px;
    padding: 24px;
    padding-top:16px;
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;
    border: none;
`;

export const Fieldset = styled.fieldset`
    margin-bottom: 20px;
    border: 1px solid #EFEFEF;
    padding: 20px 20px 20px 10px;
`;

export const Legend = styled.legend`
    width: 100%;
    border: none;
    color: #5a5a5a;
`;

export const Label = styled.label`
    width: ${props => props.width};
    height: ${props => props.row? '15px': '60px;'};

    display: flex;
    flex-direction: ${props => props.row? 'row': 'column'};
    justify-content: ${props => props.row? '': 'space-between;'}; 
    
    color: ${props => props.optional? 'gray': '#001E64'};
    font-weight: ${props => props.optional? '400': '600'};
    
    padding-right: 20px;
`;


export const Input = styled.input`
    width: 100%;
    display: flex;

    background: transparent;
    border: ${props => props.disabled? 'none' : '1px solid #D1D1D1'};
    border-radius: 3px; 

    color: #323232;
    padding: 8px 10px;
`;

export const Row = styled.div`
    width: 100%;
    padding: 0 0 20px 10px;
    display: flex;
`;

export const InputCheck = styled.input`
    width: 20px;
    height: 20px;
    margin-left: 5px;
`;


export const Header = styled.div`
    width: 100%;;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const IconAndTitle = styled.div`
    display: flex;
`;

export const PersonIcon = styled.button`
    margin-right: 5px;
    position: relative;
    width:21px;
    height: 21px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    :after {
        content: '';
        position: absolute;
        top:0;
        right: 0;
        width: 21px;
        height: 21px;
        background-image:url(${house});
        transform: translateY(-5%);
    }
`;

export const HeaderTitle= styled.p `
    font: 700 16px 'Aestetico', sans-serif;
    color: #FF5000;
    margin-right: 5px;
`;

export const RegistrationFluxBox = styled.div`
    display: flex;
    align-items: center;
`;

export const Circle = styled.div `
    position: relative;
    width: 6px;
    height: 6px;
    background: ${props => props.step? '#FF5000' : '#AAAAAA'};
    border-radius: 50%;
`;

export const Step = styled.h3`
    position: absolute;
    bottom: -18px;
    right: -30px;
    font: 700 10px 'Aestetico', sans-serif;
    color: ${props => props.step? '#FF5000': '#828282'};
`;

export const Line = styled.div`
    width: 130px;
    height: 2px;
    background: #EFEFEF;
`;

export const CancelButton = styled.button`
    position: relative;
    height: 19px;
    border: none;
    background: transparent;
    font: 500 14px 'Aestetico', sans-serif;
    color: #828282;
    cursor: pointer;
`;
