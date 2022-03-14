import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #AAAAAA8A;
    /* mix-blend-mode: multiply; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 7;
    font-family: "Aestetico", sans-serif;

`;

export const Box = styled.div`
    width: 400px;
    height: 125px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px #00000019;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h3`
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    color: #333333;
`;

export const SubTile = styled.p`
    font-weight: 400;
    font-size: 13px;
    color: #333333;
`;

export const ButtonBox = styled.div`
    width: 52%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const Button = styled.button`
    width: ${props => props.finishBtn? '255px' : '96px'};
    height: 32px;
    border: none;
    border-radius: 4px;
    background: ${props => props.yes? '#001E64': 'transparent'};
    color: ${props => props.yes? '#FFFFFF': '#001E64'};
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    outline: none;
`