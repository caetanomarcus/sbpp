import styled from "styled-components";

import logoLeave from '../../../../assets/icons/leave.png';
import logoLeaveGray from '../../../../assets/icons/leave-gray.png';
import arrowIcon from '../../../../assets/icons/arrow.svg';

export const Container = styled.aside`
    position: relative;
    width: 264px;
    height: 100vh;
    padding: 16px 22px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 2px 0px 4px #0000001A;
`;

export const Logo = styled.img`
    
`;

export const SulaLogo = styled.img`
    width: 104px;
    height: 31px;
`;

export const ButtonBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`;

export const DropDownArrow = styled.button`
    position: absolute;
    top: 44px;
    right: 5px;
    display: flex;
    justify-content: center;
    border:none;
    width: 7px;
    height: 10px;
    background: transparent;
    cursor: pointer;
    z-index: 5;

    :after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 7px;
        height: 11px;
        background-image: url(${arrowIcon});
        background-repeat: no-repeat;
        background-size: contain;
        transform: ${props => props.openDropDown ? 'translateY(120%)' : 'rotate(180deg) translateY(-60%)'};
        cursor: pointer;
    }
`;

export const ButtonTextBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: calc(100% + 42px);
    height: 32px;
    margin-left: -20px;
    padding-left: 20px;
    margin-bottom: ${props => props.first ? '16px' : '0'};
    background: ${props => props.screen ? '#EFEFEF' : 'transparent'};
`;

export const MenuButon = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    width: 27px;
    height: 27px;
    border: none;
    border-radius: 15px;
    background: transparent;
    cursor: pointer;
    text-align: center;

    :after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: ${props => props.width};
        height: ${props => props.height};
        background-image: url(${props => props.background});
        background-repeat: no-repeat;
        background-size: contain;
        transform: translateY(-60%);
    }
`;



export const TextBtn = styled.p`
    font: 700 15px 'Aestetico', sans-serif;
    color: #FF5000;
    cursor: pointer;
`;

export const DropDownBox = styled.div`
    position: absolute;
    bottom: -67px;
    left: 28px;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;

export const DropDownItems = styled.button`
    position: relative;
    width: 100%;
    height: 24px;
    border:none;
    background: none;
    margin-left: -29px;
    padding-left: 55px;
    text-align:left;
    font: 400 12px 'Aestetico', sans-serif;
    color: #5A5A5A;
    outline:none;
    cursor: pointer;

    :after {
        content: '' ;
        position: absolute;
        left: 40px;
        top: 50%;
        width: 5px;
        height: 5px;
        background: transparent;
        border-radius: 50%;
        transform: translateY(-65%);
    };

    ${props => props.screen && `
        background: #EFEFEF;
        color: #FF5000;
        font-weight: 700;

        :after {
            background: #FF5000;
        }

    `};
`;


export const MenuFooter = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 7px 15px;
    border-top: 1px solid #D1D1D1;
`;

export const LeaveButton = styled.button`
    position: relative;
    width: 61px;
    height: 27px;
    padding-right: 12px;
    border: 1px solid #828282;
    border-radius: 15px;
    background: transparent;
    cursor: pointer;
    color: #828282;
    text-align: right;
   
    :after {
        content: '';
        position: absolute;
        top: 50%;
        left: 5px;
        width: 16px;
        height: 14px;
        background-image: url(${logoLeaveGray});
        background-repeat: no-repeat;
        background-size: contain;
        transform: translateY(-50%);
    }

    :hover {
        border: 1px solid #FF5000;
        color: #FF5000;

        :after {
            background-image:url(${logoLeave});
        }
    }
`