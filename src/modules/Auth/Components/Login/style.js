import styled from "styled-components";

export const Container = styled.form`
    position: relative;
    margin: 0 40px;
    display: flex;
    flex-direction: column;
   
    @media (max-width: 480px) {
        margin: 24px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    height: 19px;
    justify-content:center;
    align-items: center;
    margin-top: 8px;

    @media (max-width: 480px) {
        margin-top: 15px;
        width: 95%;
        justify-content: unset;
    }
`

export const ForgotPassword = styled.button`
    border: none;
    background: transparent;
    margin: 12px auto;
    text-align: center;
    font: 400 14px 'Aestetico', sans-serif;
    color: #001E64;
    cursor: pointer;
`;

export const ErroBox = styled.div`
    position: absolute;
    top: 70%;
    left: 110%;
    width: 384px;
    padding: 14px 5px;
    padding-left: 14px;
    background: #FF5000;
    border-radius: 4px;

    @media (max-width: 480px) {
        top:95%;
        left:50%;
        width: 85%;
        padding: 11px;
        transform: translateX(-50%);
    }
`;

export const TrianguleErroBox = styled.div`
    position: absolute;
    top:50%;
    left: 0;
    width: 0; 
    height: 0; 
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent; 
    border-right:10px solid #FF5000; 
    transform: translateY(-50%) translateX(-100%);

    @media (max-width: 480px) {
        top: -8px;
        left: 50%;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 10px solid #FF5000;
        transform: translateY(-50%) translateX(-50%);
    }
`;

export const ErrorMsg = styled.p`
    font: 400 16px 'Aestetico', sans-serif;
    color: #FFFFFF;

    @media (max-width: 480px) {
       text-align: center;
    }
`;
