import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 70%;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Fieldset = styled.fieldset`
    margin-top: 32px;
    border: 1px solid #EFEFEF;
    padding: 20px 0px 0 10px;
`;

export const Legend = styled.legend`
    border: none;
    color: #5a5a5a;
`;

export const Row = styled.div`
    padding: 0 0 20px 10px;
    display: ${props => props.disabled? 'none': 'flex'};
    align-items: center;
`;

export const Label = styled.label`
    font: 14px 'Aestetico', sans-serif;
    font-weight: ${props => props.checkbox? 600: 400};
    color: ${props => props.checkbox? '#001E64': props.isDisabled? '#32323255': '#323232'};
    display: flex;
    align-items: center;
    margin-right: 45px;
    margin-left: 10px;
    margin-top: 15px;
`;

export const RadioInput = styled.input`
    margin-right: 10.5px;

    ${ props => props.checkbox && `
    margin-right: 0;
    margin-left: 10.5px;
    width: 15px;
    height: 15px;
    `}
`;

