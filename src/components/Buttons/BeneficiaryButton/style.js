import styled from "styled-components";

export const RegisterBtn = styled.button`
    width: ${props => props.width};
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: #001E64 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 4px;
    margin-top: 7px;
    outline: none;
    font: 500 12px 'Aestetico, sans-serif';
    color: #FFFFFF;
    cursor: pointer;
    
`;

export const RightIcon = styled.img `
    width: 24px;
    height: 20px;
`;