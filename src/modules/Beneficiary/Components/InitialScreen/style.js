import styled from "styled-components";

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