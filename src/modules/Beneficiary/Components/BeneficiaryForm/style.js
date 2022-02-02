import styled from "styled-components";

export const Form = styled.div`
    width: 100%;
    height: 75vh;
    border: none;
    margin-top: 36px;
    overflow: auto;
    /* width */
    ::-webkit-scrollbar {
        width: 8px;
        border-radius: 1px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 1px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #AAAAAA;
        border-radius: 1px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const Fieldset = styled.fieldset`
    margin-bottom: 20px;
    border: 1px solid #EFEFEF;
    padding: 20px 20px 20px 10px;
`;

export const Legend = styled.legend`
    border: none;
    color: #5a5a5a;
`;

export const Label = styled.label`
    width: ${props => props.width};
    height: ${props => props.row? '15px': '60px;'};

    display: flex;
    flex-direction: ${props => props.row? 'row': 'column'};
    justify-content: ${props => props.row? '': 'space-between;'}; 
    
    color: ${props => props.optional? 'gray': '#001E64'};
    font-weight: ${props => props.optional? '400': '600'};
    
    padding-right: 20px;
`;


export const Input = styled.input`
    width: 100%;
    display: flex;

    background: transparent;
    border: ${props => props.disabled? 'none' : '1px solid #D1D1D1'};
    border-radius: 3px; 

    color: #323232;
    padding: 8px 10px;
`;

export const Row = styled.div`
    width: 100%;
    padding: 0 0 20px 10px;
    display: flex;
`;

export const InputCheck = styled.input`
    width: 20px;
    height: 20px;
    margin-left: 5px;
`;
