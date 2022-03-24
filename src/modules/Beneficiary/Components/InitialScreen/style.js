import styled from "styled-components";
import arrow from '../../../../assets/icons/arrow-right.svg'
import arrowLeft from '../../../../assets/icons/arrow-left.svg'
// import orange from '../../../../assets/images/orange-footer.png'
import whiteCross from '../../../../assets/icons/white-cross.svg'


export const Container = styled.section`
    width: 100%;
    height: 100%;
    max-height: 100vh;
    background: #EFEFEF;
    padding-top: 16px;
    /* max-width: 1366px; */
    margin: 0 auto;
    border-radius: 0 0 4px 4px;
    
`;

export const Header = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

export const MsgBox = styled.div`
    display: flex;
    align-items: center;
`;

export const WelcomeMsg = styled.h2 `
    font: 700 18px 'Aestetico', sans-serif;
    color: #001E64;
`;

export const User = styled.p`
    font: 400 18px 'Aestetico', sans-serif;
    color: #001E64;
    margin-left: 4px;
`;

export const FilterBtn = styled.button`
    width: 90px;
    height: 33px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid ;
    border-color: ${props => props.isOpen? '#FF8C00' : '#D2D2D2'};
    border-radius: 40px;
    font: 700 16px 'Aestetico',sans-serif;
    color: ${props => props.isOpen? '#FF8C00': '#828282'};
    cursor: pointer;
    transition: 0.5s;
    
    
    :hover {
        border-color: #FF8C00;
    }
    `;

export const ArrowFilterBtn = styled.img`
    transform: ${props => props.isOpen? 'translateY(-25%)': 'rotate(180deg)'};
    transition: 0.5s;
    fill: 'red';
`;

export const MainContainer = styled.div`
    width: 100%;
    height: 65%;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px #0000001A;
    border-radius: 4px;
    padding: 24px;
    padding-top:16px;
    margin-top: 23px;
`;

export const LeftTitle = styled.p`
    font: 500 16px 'Aestetico', sans-serif;
    color: #FF5000;
`;  

export const SeeList = styled.p`
    font:400 15px 'Aestetico', sans-serif;
    color: #FF5000;
    position: absolute;
    right: 16px;
    bottom: 50%;
    transform: translateY(50%);
`;



export const ResultsAndPagination = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #82828233;
    margin-bottom: 10px;

    p{
        color: #5A5A5A;
        font-size: 12px;
        font-weight: 400;
    }
    
`;

export const LocalStep = styled.div`
    width: 480px;
    display: flex;
    justify-content: space-between;
    padding-left: 8px;
 
`;

export const StepBox = styled.button`
    position: relative;
    font: 12px 'Aestetico', sans-serif;
    font-size: ${props => props.isSelected? '700': '400'};
    color: #828282;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
`;

export const StepLine = styled.div`
    width: 110%;
    height: 4px;
    position: absolute;
    top: 20px;
    left: 0;
    background: ${props => props.isSelected? '#828282': 'transparent'};
    transform: translateX(-5%);
    cursor: default;

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
    width: 10%;
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

    :after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 7px;
        height: 12px;
        background: url(${props => props.left? arrowLeft :arrow});
        background-size: cover;
        background-position: center;
    }
`;


export const ClientBox = styled.div`
    display: flex;
    width: 100% ;
    height:80% ;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #D2D2D2;
    margin-bottom: 6px;

`;

export const ButtonBox = styled.div`
    display: flex;
    height:100% ;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const MenssageBox = styled.div`
    width: 100%;
    height: 250px;
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
    font: 700 13px 'Aestetico', sans-serif;
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
    font-family: 'Aestetico', sans-serif;
    cursor: ${props => props.isPending? 'pointer': 'default'};

    :hover {
        background: ${props => props.isSelected? '#FF8C004A': '#D2D2D2'};
    }
`;

export const ClientTexts = styled.p`
    font: 13px 400 'Aestetico, sans-serif';
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
    background: ${props => props.color};
    border-radius: 50%;
`;

export const Line = styled.div`
    width: 100%;
    height: 0;
`;

export const ClassificationContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

export const ClassificationLine = styled.div`
    width: 100%;
    height: 1px;
    border: 2px solid;
    border-color: ${props => props.isSelected? '#FF5000': 'transparent'};
    position: absolute;
    bottom: 0;
    right:0 ;

`;

export const Classification = styled.button`
    width: 24.2%;
    height: 82px;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px #0000001A;
    border: none;
    border-radius: 4px;
    padding: 10px 16px;
    position: relative;
    outline: none;
    cursor: pointer;
    position: relative;
 

    ${props => !props.isSelected && `
        :hover ${ClassificationLine} {
        border-color: #AAAAAA;
    }
    `};
`;

export const Number = styled.p`
    font: 700 30px 'Aestetico', sans-serif;
    color: #FF5000;
    text-align: left;
    /* margin-top: 33px; */
    margin-bottom: 2px;
   
`;

export const BigStatusBox = styled.div`
    display: flex;
    align-items: center;
`;

export const BigStatus = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-right: 7px;
    
`;

export const MiddleContainer = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1100px) {
        flex-direction: column;
    }
`;

export const SearchContainer = styled.div`
    width: 470px;
    padding: 16px;
    position: relative;
    
    :after {
        content: '';
        width: 1px;
        height: 95%;
        border-right: 1px solid #D1D1D1;
        position: absolute;
        right: 10px;
        top:2.5%;

    }

    @media(max-width: 1100px) {
        display: flex ;
        width: 100% ;
        
    }
`;

export const FiltersButtonsBox = styled.div`
    width: 100%;

`;

export const Label = styled.p`
    font: 500 13px 'Aestetico', sans-serif;
    color: #001E64;
    margin-bottom: 8px;
`;

export const ButtonsBox = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button`
    padding:  3px 8px;
    height: 22px;
    border: 1px solid #D2D2D2;
    border-radius: 4px;
    font: 400 12px 'Aestetico', sans-serif;
    color: #828282;
    cursor: pointer;
    position: relative ;

    ${props => props.isSelected && `
        border-color: #001E64;
        background-color: #001E6426;
        color: #001E64;
    `}

    ${props => !props.isSelected && `
        :hover {
            border-color:#001E64;
            color: #001E64;
        }
    `}

    :after{
        content: '';
        display: ${props => props.isSelected? 'block': 'none'};
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #001E64;
        background-image: url(${whiteCross});
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: center center;
        position: absolute ;
        top: 0;
        right: 0;
        transform: translate(35%, -50%);) ;
    }
`;

export const SearchBox = styled.div`
    width: fit-content;
    margin: 0 auto;
`;

export const ClearButton = styled.button`
    /* width: 106px;
    height: 30px; */
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    background: #5A5A5A;
    border-radius: 19px;
    border: none;
    background-color: transparent;
    font: 400 10px 'Aestetico', sans-serif;
    color: #828282;
    cursor: pointer;
    margin-top: 35px;


    img {
        width: 13px;
        height: 13px;
    }

`;

export const ResultContainer = styled.div`
    width: 100%;
    padding: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
    display:flex ;
    flex-direction: column;
    align-items: center;

`;
