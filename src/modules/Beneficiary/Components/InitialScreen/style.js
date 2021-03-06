import styled from "styled-components";
import arrow from '../../../../assets/icons/arrow.svg'

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background: #EFEFEF;
    padding: 18px;
    padding-top: 26px;
`;

export const Header = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MsgBox = styled.div`
    display: flex;
    align-items: center;
`;

export const WelcomeMsg = styled.h2 `
    font: 700 22px 'Aestetico', sans-serif;
    color: #828282;
`;

export const User = styled.p`
    font: 400 22px 'Aestetico', sans-serif;
    color: #828282;
    margin-left: 4px;
`;

export const FilterBtn = styled.button`
    width: 90px;
    height: 33px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid ;
    border-color: ${props => props.isOpen? '#FF8C00' : '#D2D2D2'};
    border-radius: 40px;
    font: 700 16px 'Aestetico',sans-serif;
    color: ${props => props.isOpen? '#FF8C00': '#828282'};
    cursor: pointer;
    transition: 0.5s;
    
    
    :hover {
        border-color: #FF8C00;
    }
    `;

export const ArrowFilterBtn = styled.img`
    transform: ${props => props.isOpen? 'translateY(-25%)': 'rotate(180deg)'};
    transition: 0.5s;
    fill: 'red';
`;

export const MainContainer = styled.div`
    width: 100%;
    height: 65%;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px #0000001A;
    border-radius: 4px;
    padding: 24px;
    padding-top:16px;
    margin-top: 23px;
`;

export const LeftTitle = styled.h2`
    font:700 16px 'Aestetico', sans-serif;
    color: #FF5000;
`;  

export const ResultsAndPagination = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #82828233;
    margin-bottom: 16.5px;
    
`;

export const LocalStep = styled.div`
    width: 480px;
    display: flex;
    justify-content: space-between;
    padding-left: 8px;
 
`;

export const StepBox = styled.button`
    position: relative;
    font: 12px 'Aestetico', sans-serif;
    font-size: ${props => props.isSelected? '700': '400'};
    color: #828282;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
`;

export const StepLine = styled.div`
    width: 110%;
    height: 4px;
    position: absolute;
    top: 20px;
    left: 0;
    background: ${props => props.isSelected? '#828282': 'transparent'};
    transform: translateX(-5%);
    cursor: default;

`;

export const PaginationCounter = styled.p`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font: 400 12px 'Aestetico', sans-serif;
    color: #5A5A5A;
`;

export const Pagination = styled.div`
    width: 15%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export const PaginationButton = styled.button`
    position: relative;
    width: 50px;
    height: 30px;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    color: #5A5A5A;
    font: 400 12px 'Aestetico', sans-serif;
    transform: rotate(${props => props.left ? '-90deg' : '90deg'});

    :after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: ${props => props.left ? 'translate(-45%, -50%)' : 'translate(-50%, -50%)'};
        width: 8px;
        height: 8px;
        background: url(${arrow});
        background-size: cover;
        background-position: center;
    }
`;


export const ClientBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MenssageBox = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Menssage = styled.p`
    font: 400 14px 'Aestetico', sans-serif;
    color: #AAAAAA;
`;

export const ClientBoxHead = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #001E6434;
    border-radius: 4px;
    padding-left: 48px;
    padding-right: 42.2px;
    margin-bottom: 8px;
`;

export const Titles = styled.h2`
    font: 700 13px 'Aestetico, sans-serif';
    color: #323232;
    text-transform: uppercase;
    text-align: ${props => props.align || 'left'};
    width: ${props => props.width};
`;

export const Clients = styled.button`
    width: 100%;
    height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.isSelected? '#FF8C004A': props.odd? '#EFEFEF':'#FFFFFF' };
    border: none;
    border-radius: 4px;
    padding-left: 48px;
    padding-right: 42.2px;

    /* :hover {
        background: ${props => props.isSelected? '#FF8C004A': '#D2D2D2'};
    } */
`;

export const ClientTexts = styled.p`
    font: 13px 'Aestetico, sans-serif';
    color: #333333;
    font-weight: ${props => props.weight || 300};
    width: ${props => props.width};
    text-align: left;
`;

export const StatusBox = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Status = styled.div `
    width: 8px;
    height: 8px;
    background: #AAAAAA;
    border-radius: 50%;
`;

export const Line = styled.div`
    width: 100%;
    height: 0;
    border: 1px solid #D1D1D1;
`;

export const ClassificationContainer = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
`;

export const Classification = styled.div`
    width: 256px;
    height: 134px;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px #0000001A;
    border-radius: 4px;
    padding: 10px 16px;
    position: relative;
`;

export const Number = styled.p`
    font: 700 53px 'Aestetico', sans-serif;
    color: #FF5000;
    text-align: center;
    margin-top: 33px;
   
`;
