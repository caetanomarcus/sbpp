import styled from "styled-components";

export const Buttons = styled.button`
    width: 280px;
    height: 48px;
    border: ${props => props.sent? '1px solid #001E64': 'none'};
    background: ${props => props.background};
    margin-top: ${props => props.marginTop};
    border-radius: 24px;
    font: normal normal 700 16px 'Aestetico', sans-serif;
    color: ${props => props.sent? '#001E64': "#FFFFFF"};
    cursor: pointer;

    @media (max-width: 480px) {
        width: 95%;
    }
`;