import styled from "styled-components";
import InputMask from 'react-input-mask';

export const Label = styled.div`
    width: ${props => props.width};
    display: flex;
    flex-direction: ${props => props.row? 'row': 'column'};
    color: ${props => props.optional? 'gray': '#001E64'};
    font-weight: ${props => props.optional? '400': '500'};
    align-items: ${props => props.row? 'center': ''};
    font-size: 14px;
    font-family: "Aestetico", sans-serif;
    margin-right: ${props => props.marginRight? props.marginRight: '20px'};
    position: relative;
    opacity: ${props => props.optional? '0.6': ''};
    margin-bottom: ${props => props.marginBottom};
    margin-top: ${props => props.noLabel? '19px': '0'};
    opacity: ${props => props.disabled? '0.6': ''};

`;

export const Input = styled(InputMask)`
    width: ${props => props.widthInput? props.widthInput: '100%' };
    height: ${props => props.heightInput? props.heightInput: '32px' };
    background: transparent;
    border: ${props => props.disabled? 'none' : '1px solid #D1D1D1'};
    border-left: ${props => props.borderLeft};
    border-radius: 3px; 
    outline: none;
    color: #323232;
    font-size: 14px;
    font-family: "Aestetico", sans-serif;
    padding: ${props => props.noPadding? '0' : '0 10px'};
    margin: ${props => props.row? '0 0 0 10px' : '10px 0 0 0'};

    :focus {
        border-color: #001E64;
        background-color: #001E640B;
        box-shadow: inset 0px 1px 3px #00000029, 0px 0.5px 6px #00000008;
    }

    ::placeholder {
        color: #AAAAAA;
    }
`;

export const SearchInput = styled.input`
    width: 90%;
    height: 100% ;
    border: none;
    outline: none;

    ::placeholder {
        color: #AAAAAA;
    }

`;

export const Select = styled.div`
    width: ${props => props.width };
    height: 32px;
    background: transparent;
    outline: none;
    border: 1px solid ;
    border-color: ${props => props.outline? '#001E64': '#D1D1D1'};
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
    cursor: ${props => props.disabled? 'default': 'pointer'};} ;
`

export const Options = styled.div`
    width: 100%;
    height: ${props => props.height}px;
    max-height: 160px;
    overflow: auto;
    background: transparent;
  
    margin-top: 15px;
    border: 1px solid #D1D1D1;
    border-bottom: 0;
    border-radius: 3px;
    position: absolute;  
    top: ${props => props.initialModal? '25px': '55px'};
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

    :hover {
        background: #F0F0F0;
        box-shadow: inset 0px 1px 3px #00000029, 0px 0.5px 6px #00000008;
    }
`

export const AddressDetails = styled.p`
    width: 100%;
    font-size: 12px;
    color: #5a5a5a;
    margin-top: 5px;
`

export const Cross = styled.img`
    width: 8px;
    height: 8px;
    position: absolute;
    right: 16px;
    top: 75%;
    transform: translateY(-75%);
    cursor: pointer;
`;