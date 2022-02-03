import styled from "styled-components";

import registration from '../../../../assets/icons/registration.svg'

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background: #EFEFEF;
    padding: 18px;
    overflow: hidden;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px #0000001A;
    border-radius: 4px;
    padding: 24px;
    padding-top:16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
        background-image:url(${registration});
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
    background: ${props => props.steps? '#FF5000' : '#AAAAAA'};
    border-radius: 50%;
`;

export const Step = styled.h3`
    position: absolute;
    bottom: -18px;
    right: -30px;
    font: 700 10px 'Aestetico', sans-serif;
    color: ${props => props.steps? '#FF5000': '#828282'};
`;

export const Line = styled.div`
    width: 130px;
    height: 2px;
    background: #EFEFEF;
`;

export const CancelButton = styled.button`
    height: 26px;
    border: none;
    margin-right: 16px;
    background: transparent;
    font: 500 14px 'Aestetico', sans-serif;
    color: #828282;
    cursor: pointer;
`;

export const Footer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;
