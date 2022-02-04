import styled from "styled-components";
import house from '../../../../assets/icons/circled-house.svg'
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

export const SearchBox = styled.div `
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    margin-top: 24px;
    align-items: center;
    background: #EFEFEF;
    border-radius: 4px;
`

export const InputBox = styled.div `
    display: flex;
    align-items: center;
    height: 33px;
    border-radius: 4px;
`

export const Input = styled.input `
    width: 332px;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px 0.5px 6px #00000008;
    border: 1px solid transparent;
    outline: none;
    padding: 8px;
    border-radius: ${props => props.borderRadius};
    box-shadow: 0px 0px 6px #D2D2D2;

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
    font: 13px 'Aestetico, sans-serif';
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
