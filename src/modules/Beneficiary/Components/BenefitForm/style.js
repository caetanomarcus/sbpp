import styled from "styled-components";

export const Fieldset = styled.fieldset`
    margin-top: 32px;
    border: 1px solid #EFEFEF;
    padding: 20px 0px 20px 10px;
`;

export const Legend = styled.legend`
    border: none;
    color: #5a5a5a;
`;

export const Row = styled.div`
    padding: 0 0 20px 10px;
    display: flex;
    width: ${props => props.width};
`;