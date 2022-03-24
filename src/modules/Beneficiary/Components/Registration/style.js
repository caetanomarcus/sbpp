import styled from "styled-components";

import registration from '../../../../assets/icons/registration.svg'

export const Container = styled.section`
    width: 100%;
    height: calc(100vh - 90px);
    background: #EFEFEF;
    padding: 16px 0;
    padding-bottom: 0;
    /* overflow: hidden; */
    border-radius: 4px;
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
    justify-content: center;
    margin-top: 4px;
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
    font-weight: 700;
    font-size: 16px;
    color: #FF5000;
    margin-right: 5px;
`;

export const RegistrationFluxBox = styled.div`
    display: flex;
    align-items: center;
`;

export const Circle = styled.div `
    position: relative;
    width: 41px;
    height: 41px;
    background: ${props => props.steps? '#FF5000' : 'transparent'};
    border-radius: 50%;
    margin-left: 20px;
    margin-right: 10px;

    :after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        height: 80%;
        background: url(${props => props.background});
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const StepBox = styled.div`
    /* margin-left: 10px; */
`;

export const StepNumber = styled.p`
    color: #5A5A5A;
    font-size: 10px;
    font-weight: 400;
`;

export const Step = styled.h3`
    /* position: absolute;
    top: 50%;
    left: 50px; */
    font-weight: 700;
    font-size: 10px;
    color: ${props => props.steps? '#FF5000': '#828282'};
`;

export const Line = styled.div`
    width: 72px;
    height: 2px;
    background: ${props => props.selected? '#AAAAAA' : '#EFEFEF'};
`;

export const MiddleBox = styled.div`
    display:flex ;
    height: ${props => props.isFinal? '101.6%' : '100%'};
    position: relative;
`;

export const FormStepBox = styled.div`
    width: 14%;
    height: 100%;
    display:flex ;
    flex-direction: column;
    justify-content: flex-start ;
    padding-top: 4px;
`;

export const UperBox = styled.div`
    display: flex ;
    flex-direction: column;
    height: 100% ;
`;

export const FormBox = styled.div`
    width: 72%;
    /* height: 50% ; */
    border-bottom: ${props => props.isFinal? 'none' : '#828282 1px solid'};
`;

export const NextButtonBox = styled.div`
     width: 14%;
     
`;

export const CleanCloseBox = styled.div`
    position: absolute ;
    top: -40px;
`;

export const CleanButton = styled.button`
    font-size: 10px;
    color: #828282;
    border: none;
    outline: none;
    background: transparent ;
    text-decoration: underline;
    cursor: pointer;
`;

export const XIcon = styled.img`

`;

export const ButtonContainer = styled.div`
    position: absolute;
     bottom: 0;
     right: 20px;
`;

export const SideListItem = styled.button`
    margin-bottom: 16px;
    width:fit-content ;
    border: none;
    background: transparent;
    cursor: pointer;
    outline:none ;
    display:flex ;
    align-items: center;
`;

export const ListCircle = styled.div`
    width: 8px;
    height: 8px;
    background: #D2D2D2;
    border-radius: 50%;
    visibility: ${props => props.selected? 'visible' : 'hidden'};
    margin-right: 4px;
`;

export const SideListItemText = styled.p`
    font-weight: 600;
    font-size: 12px;
    color: #828282;
    cursor:pointer ;
    text-align: left;
`;

export const CancelButton = styled.button`
    height: 26px;
    border: none;
    margin-right: 16px;
    background: transparent;
    font-weight: 500;
    font-size: 14px;
    color: #001E64;
    cursor: pointer;
    position: absolute;
    bottom: 0;
`;

export const Footer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;
