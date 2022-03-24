import styled from "styled-components";

export const Buttons = styled.button`
    width: 142px;
    height: 40px;
    border: ${props => props.sent? '1px solid #001E64': 'none'};
    background:${props => props.sent? '': '#5A5A5A'};
    margin-top: ${props => props.marginTop};
    border-radius: 20px;
    font-weight: 400;
    font-size: 14px;
    font-family: 'Aestetico', sans-serif;
    color: ${props => props.sent? '#001E64': "#FFFFFF"};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-right: ${props => props.back? '30px': '12px'};


    ${props => props.back && `
        border: 1px solid #FF5000;
        background: transparent;
        color: #FF5000;
    `};

    @media (max-width: 480px) {
        width: 95%;
    }
`;

export const Image = styled.img``;