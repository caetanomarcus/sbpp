import styled from "styled-components";

export const Label = styled.label`
    width: ${props => props.width};
    display: flex;
    flex-direction: ${props => props.row? 'row': 'column'};
    color: ${props => props.optional? 'gray': '#001E64'};
    font-weight: ${props => props.optional? '400': '600'};
    align-items: ${props => props.row? 'center': ''};
    font-size: 14px;
    font-family: "Aestetico", sans-serif;
    padding-right: 20px;
    position: relative;
    opacity: ${props => props.optional? '0.6': ''};

`;

export const Input = styled.input`
    width: ${props => props.widthInput? props.widthInput: '100%' };
    height: ${props => props.heightInput? props.heightInput: '32px' };
    background: transparent;
    border: ${props => props.isDisabled? 'none' : '1px solid #D1D1D1'};
    border-radius: 3px; 
    outline: none;
    color: #323232;
    font-size: 14px;
    font-family: "Aestetico", sans-serif;
    padding: ${props => props.noPadding? '0' : '0 10px'};
    margin: ${props => props.row? '0 0 0 10px' : '10px 0 0 0'};
`;

export const Select = styled.button`
    width: ${props => props.width };
    height: 32px;
    background: transparent;
    outline: none;
    border: 1px solid #D1D1D1;
    border-radius: 3px;
    font-weight: ${props => props.optional? '400': '600'};
    margin-top: 10px;
    padding: 0 10px;
    color: #323232;
    text-align: left;
    position: relative;   
`

export const Arrow = styled.img`
    transform: ${props => props.isOpened? 'translateY(-25%)': 'rotate(180deg)'};
    transition: 0.5s;
    position: absolute;
    right: 10px;
    top: 40%;
`

export const Options = styled.div`
    width: 95%;
    height: ${props => props.height}px;
    max-height: 160px;
    overflow: auto;
    background: transparent;
  
    margin-top: 15px;
    border: 1px solid #D1D1D1;
    border-bottom: 0;
    border-radius: 3px;
    position: absolute;  
    top: 55px;
    z-index: 5;

    /* width */
    ::-webkit-scrollbar {
        width: 4px;
        border-radius: 3px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #D1D1D1;
        border-radius: 3px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`

export const Button = styled.button`
    width: 100%;
    height: 32px;
    background: white;
    outline: none;
    border: none;
    border-bottom: 1px solid #D1D1D1;
    color: #323232;
    text-align: left;
    padding: 0 10px;
    cursor: pointer;
`

export const AddressDetails = styled.p`
    width: 100%;
    font-size: 12px;
    color: #5a5a5a;
    margin-top: 5px;
`