import styled from "styled-components";

export const Form = styled.form`
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

export const Row = styled.div`
    width: 100%;
    padding: 0 0 20px 10px;
    display: flex;
`;

export const Label = styled.label`
    width: ${props => props.width};
    display: flex;
    flex-direction: ${props => props.row? 'row': 'column'};
    color: #001E64;
    font-weight: ${props => props.optional? '400': '600'};
    border: solid red;
`;

export const LabelRadio = styled.label`
    font: 400 14px 'Aestetico', sans-serif;
    display: flex;
    align-items: center;
    margin-right: 45px;
`;

export const RadioInput = styled.input`
    margin-right: 10.5px;
`;
