import styled from "styled-components";
import orange from './../../assets/images/orange-footer.png'


export const Container = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* max-width: 1366px; */
    height: 100%;
    max-height: 100vh;
    padding: 16px;
    margin: 0 auto;
    background-color: #EFEFEF;
    background-image: url(${orange});
    background-size: 100% 40%;
    background-repeat: no-repeat;
    background-position: bottom; 
    /* overflow: hidden ; */
`;

export const ContentContainer = styled.div`

`;