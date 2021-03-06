import styled from "styled-components";

export const Text = styled.p`
    font: 400 16px 'Aestetico', sans-serif;
    color: #5A5A5A;
    text-align: center;
`;

export const Container = styled.div`
    width: 100%;
    height: 450px;
    border: 1px solid #D2D2D2;
    border-radius: 4px;
    padding: 24px;
    overflow: auto;

     /* width */
     ::-webkit-scrollbar {
        width: 8px;
        border-radius: 4px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #AAAAAA;
        border-radius: 4px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.row ? props.justify : 'flex-start'};
    margin-bottom: ${props => props.NoMargin ? '0px' : '36px'};
    position: relative;

`;

export const TextBox = styled.div`
    margin-left: ${props => props.marginLeft};
    margin-bottom: ${props => props.marginBottom};
    height: 48px;

    ${props => props.flex && `
        display: flex;
        align-items: center;

        p{
            margin: 0;
            margin-left: 10px;
        }
    `}
`;

export const Title = styled.h3`
    font: 600 14px 'Aestetico', sans-serif;
    color: #001E64;
`;

export const Value = styled.p`
    font: 400 14px 'Aestetico', sans-serif;
    color: #323232;
    margin-top: 16px;
`;

export const Line = styled.div`
    width: 100%;
    height: 0;
    border: 1px solid #EFEFEF;
    margin-top: 24px;
    margin-bottom: 24px;

`;

export const Checkbox = styled.input`
    margin-left: 10px;
    width: 15px;
    height: 15px;
`;