import styled from 'styled-components';

export const Fieldset = styled.fieldset`
    margin-top: 32px;
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
    font: 400 14px 'Aestetico', sans-serif;
    color: ${props => props.isDisabled? '#32323255': '#323232'};
    display: flex;
    align-items: center;
    margin-right: 45px;
`;

export const RadioInput = styled.input`
    margin-right: 10.5px;
`;
