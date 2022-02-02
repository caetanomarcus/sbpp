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
