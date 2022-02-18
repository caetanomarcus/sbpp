import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 40px;
    right: 0;
    width: 200px;
    height: 258px;
    padding: 16px;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px #00000033;
    border-radius: 4px;
    z-index: 10;

    #span{
        height: 23px;
        width: 20px;
    }
`;

export const TitleModal = styled.h2`
    font:  600 14px 'Aestetico, sans-serif';
    color: #001E64;
    margin-bottom: 15px;
`;

export const RadioBox = styled.div`
    display: flex;
    align-items: center;
`;

export const RadioInput = styled.input `
    font: 400 14px 'Aestetico', sans-serif;
    color: #001E64;
    accent-color: #828282;
`;

export const Label = styled.label`
    font: 400 14px 'Aestetico', sans-serif;
    color: #001E64;
    margin-left: 5px;
`;

export const SelectBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const DateBox = styled.label`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 14px;
    font: 400 14px 'Aestetico', sans-serif;
    color: #5A5A5A;
`;

export const DateText = styled.p `
    width: 30px;
`;

export const DateInput = styled.input`
    width: 86%;
    margin-left: 8px;
`;


