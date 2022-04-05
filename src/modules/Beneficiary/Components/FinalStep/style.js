import styled from "styled-components";

export const Wrapper = styled.div`
    height:80vh;
    width: 100% ;
`;

export const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #FF5000;
    text-align: center;
    margin-bottom: 8px;
`;

export const Container = styled.div`
    width: 100%;
    height:  ${props => props.noOverflow? 'auto': '74vh'};
    border: 1px solid #D2D2D2;
    border-radius: 4px;
    padding: 24px;
    overflow: ${props => props.noOverflow? '': 'auto'};

    @media (min-width: 1920px) {
        height:  ${props => props.noOverflow? 'auto': '82vh'};
    }

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
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.row ? props.justify : 'flex-start'};
    margin-bottom: ${props => props.noMargin ? '24px' : '36px'};
    position: relative;

`;

export const TextBox = styled.div`
    margin-left: ${props => props.marginLeft};
    margin-bottom: ${props => props.marginBottom};
    height: 48px;
    position: relative ;

    ${props => props.flex && `
        display: flex;
        align-items: center;

        p{
            margin: 0;
            margin-left: 10px;
        }
    `}
`;

export const Title = styled.h3`
    font-size: 14px;
    font-weight: 600;
    color: #001E64;
`;

export const Value = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #323232;
    margin-top: 16px;
`;

export const Mounths = styled.p `
     font-size: 14px;
    font-weight: 600;
    color: #001E64;
    position: absolute;
    top: 35px;
    left: 25px;
`;

export const Line = styled.div`
    width: 100%;
    height: 0;
    border: 1px solid #EFEFEF;
    margin-top: 24px;
    margin-bottom: 24px;

`;

export const Checkbox = styled.input`
    margin-left: 10px;
    width: 15px;
    height: 15px;
`;

// PDF

export const PDFContainer = styled.div`
    width: 59vw;
    min-width: 805.94px;
    padding: 34px;
    padding-left: 17px;

    @media (min-width: 1920px) {
        width: 42vw;
    }
`;

export const LogosBox = styled.div`
    width: 100% ;
    display: flex ;
    justify-content: space-between;
    align-items: center;
`;