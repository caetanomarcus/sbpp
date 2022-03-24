import styled from "styled-components";

export const Container = styled.div `
    height: 72vh;
    overflow: auto;
    /* margin-top: 36px; */

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

    @media (min-width: 1920px) {
        height: 80vh;
    }

`;

export const Fieldset = styled.fieldset`
    margin-bottom: 40px;
    border: none;
    border-right: 1px solid #EFEFEF;
    padding: 20px 20px 0 10px;
    position: relative ;
    font-size: 14px;

    :before{
        content: "";
        width: 1px;
        height: 100%;
        border-right: 1px solid #EFEFEF;
        position: absolute ;
        left: 0 ;
        top: 0 ;
        
    }
`;

export const Legend = styled.legend`
    border: none;
    color: #5a5a5a;
    margin-bottom: 16px;
`;

export const Row = styled.div`
    padding: 0 0 0 10px;
    padding-left: ${props => props.paddingLeft};
    padding-top: ${props => props.paddingTop};
    display: flex;
    width: ${props => props.width};
    align-items: ${props => props.alignItems};
    margin-bottom: ${props => props.last ? "8px" : "32px"};
    position: relative ;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: #001E64;
    display:flex;
    flex-direction: ${props => props.row? 'row': 'column'};
    margin-right: ${props => props.noLabel ? '0': '65px'};
    align-items: ${props => props.row? 'center': 'flex-start'};
    justify-content: flex-start;
    margin-bottom: ${props => props.marginBottom};
    font-weight: ${props => props.smallWeight ? '400': '500'};
    width: ${props => props.width};

`;

export const Input = styled.input`
    margin-left: ${props => props.marginLeft};
    outline: none;
    width: ${props => props.width};
    height: ${props => props.height};
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    padding: 5px 10px;
    margin-right: 10px;

    ${props => props.isCheckbox && `
        width: 15px;
        height: 15px;
        border: initial;
        border-radius: 2px;
    `};

    ::placeholder {
        font-size: 14px;
        font-weight: 400;
        color: #828282;
    }
`;

export const PriceTableBox = styled.div`
    width: 686px;
    margin-left: 9px;
`;

export const TextBox = styled.div`
    display: flex;
    margin-bottom: 16px;
`;

export const Title = styled.h3`
     font-size: 14px;
    font-weight: 500;
    color: #001E64;
`;

export const Parentesis = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #001E64;
    margin-left: 5px;
`;

export const PriceTableHead = styled.div`
    width: 100%;
    height: 32px;
    background: #001E64 ;
    border-radius: 4px 4px 0px 0px;
    padding: 7px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const HeadText = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: #FFFFFF;
    width: ${props => props.width};
`;

export const Line = styled.div`
    position: absolute;
    right: 232px;
    width:1px;
    height:32px;
    background: #EFEFEF;
`;

export const PriceTableBody = styled.div`
    width: 100%;
    min-height: 48px;
    border: 1px solid #EFEFEF;
    border-radius: 0px 0px 4px 4px;
    padding: 16px;
`;

export const RowBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #323232;
    font-size: 14px;
    font-family: "Aestetico", sans-serif;
`;

export const RowPrice = styled.p`
    width: 30%;
`;

export const TextArea = styled.textarea`
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    padding: 5px 10px;
    outline: none;
`;

export const TextAreaCounter = styled.p`
    color: #001E64;
    font-weight: 400;
    font-size: 14px;
    position: absolute;
    right: 0;
    bottom: -18px;

`;