import styled from "styled-components";
import house from '../../../../assets/icons/circled-house.svg';
import erase from '../../../../assets/icons/erase.svg'
import arrow from '../../../../assets/icons/arrow.svg'

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background: #EFEFEF;
    padding: 18px;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px #0000001A;
    border-radius: 4px;
    padding: 24px;
    padding-top:16px;
`;

export const Header = styled.div`
    width: 100%;;
    display: flex;
    align-items: center;

`;

export const HouseIcon = styled.button`
    margin-right: 5px;
    position: relative;
    width:21px;
    height: 21px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    :after {
        content: '';
        position: absolute;
        top:0;
        right: 0;
        width: 21px;
        height: 21px;
        background-image:url(${house});
        transform: translateY(-5%);
    }
`;

export const HeaderTitle= styled.p `
    font: 16px 'Aestetico', sans-serif;
    font-weight: ${props => props.weight};
    color: #FF5000;
    margin-right: 5px;
`;


export const HeadBox = styled.div `
    width: 100%;
   
    display: flex;
    justify-content: space-between;
    padding:  16px;
    margin-top: 24px;
    align-items: center;
    background: #EFEFEF;
    border-radius: 4px;
`

export const InputBox = styled.div `
    width: 664px;
    display: flex;
    flex-direction: column;
    /* justify-content: ${props => props.justify}; */
    /* align-items: center; */
    border-radius: 4px;
    /* flex-wrap: wrap; */
    box-shadow: 0px 0px 6px #D2D2D2;

`

export const UpperBox = styled.div`
  display: flex;

  align-items: flex-start;
`;

export const BottomBox = styled.div`   
    display: flex;

  align-items: flex-start;
`;

export const FilterOptionsBox = styled.div`
display: flex;
background: #FFFFFF;
padding: 8px;
border-radius: 0 0 4px 4px;
`;

export const OptionsTitle = styled.p`
    font: 400 12px 'Aestetico', sans-serif;
    color: #828282;
    margin: 4px;
    margin-right: 20px;
`;

export const FilterOptions = styled.button`
height: 22px;
background: ${props => props.selected? '#001E6426': '#FFFFFF'};
border: 1px solid;
border-color: ${props => props.selected? '#001E64' : '#D2D2D2'};
font: 400 12px 'Aestetico', sans-serif;
color: ${props => props.selected? '#001E64' : '#828282'};
padding: 4px;
border-radius: 4px;
margin-right: 16px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

:hover {
    border-color: #001E64;
    color: #001E64;
}
`

export const Input = styled.input `
    width: 332px;
    height: 50%;
    background: #FFFFFF;
    /* box-shadow: 0px 0.5px 6px #00000008; */
    border: 1px solid #00000008;
    outline: none;
    padding: 8px;
    border-radius: ${props => props.borderRadius};

    ::placeholder {
        margin-right: 8px;
    }

    :focus {
        border-color: #001E64;
    }
`;


export const CleanButton = styled.button`
    position: relative;
    height: 16px;
    border: none;
    background: transparent;
    text-decoration: underline;
    cursor: pointer;

    :after {
        content: '';
        position: absolute;
        top:0;
        left: -20px;
        width: 21px;
        height: 21px;
        background-image:url(${erase});
        background-repeat: no-repeat;
    }
`;

export const ResultsAndPagination = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    p{
        font: 400 12px 'Aestetico', sans-serif;
        color: #5A5A5A;
    }
`;

export const PaginationCounter = styled.p`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font: 400 12px 'Aestetico', sans-serif;
    color: #5A5A5A;
`;

export const Pagination = styled.div`
    width: 15%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export const PaginationButton = styled.button`
    position: relative;
    width: 50px;
    height: 30px;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    color: #5A5A5A;
    font: 400 12px 'Aestetico', sans-serif;
    transform: rotate(${props => props.left ? '-90deg' : '90deg'});

    :after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: ${props => props.left ? 'translate(-45%, -50%)' : 'translate(-50%, -50%)'};
        width: 8px;
        height: 8px;
        background: url(${arrow});
        background-size: cover;
        background-position: center;
    }
`;


export const ClientBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MenssageBox = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Menssage = styled.p`
    font: 400 14px 'Aestetico', sans-serif;
    color: #AAAAAA;
`;

export const ClientBoxHead = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #001E6434;
    border-radius: 4px;
    padding-left: 48px;
    padding-right: 42.2px;
    margin-bottom: 8px;
`;

export const Titles = styled.h2`
    font: 700 13px 'Aestetico, sans-serif';
    color: #323232;
    text-transform: uppercase;
    text-align: ${props => props.align || 'left'};
    width: ${props => props.width};
`;

export const Clients = styled.button`
    width: 100%;
    height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.isSelected? '#FF8C004A': props.odd? '#EFEFEF':'#FFFFFF' };
    border: none;
    border-radius: 4px;
    padding-left: 48px;
    padding-right: 42.2px;
    cursor: pointer;

    :hover {
        background: ${props => props.isSelected? '#FF8C004A': '#D2D2D2'};
    }
`;

export const ClientTexts = styled.p`
    font-size: 13px;
    color: #333333;
    font-weight: ${props => props.weight || 300};
    width: ${props => props.width};
    text-align: left;
`;

export const StatusBox = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Status = styled.div `
    width: 8px;
    height: 8px;
    background: #AAAAAA;
    border-radius: 50%;
`;

export const Line = styled.div`
    width: 100%;
    height: 0;
    border: 1px solid #D1D1D1;
`;


