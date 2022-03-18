import styled from "styled-components";
import logoLeave from '../../../../assets/icons/leave.png';
import logoLeaveGray from '../../../../assets/icons/leave-gray.png';


export const Container = styled.aside`
    position: relative;
    width: 100%;
    height: 58px;
    padding: 16px 22px;
    background: #FFFFFF ;
    box-shadow: 0 1px 4px #0000001A;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* max-width: 1366px; */
    margin: 0 auto;
`;

export const Logo = styled.img`
    
`;

export const SulaLogo = styled.img`
    width: 104px;
    height: 31px;
    margin-bottom: 4px;
`;


export const MenuFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 7px 0;
`;

export const LeaveButton = styled.button`
    position: relative;
    width: 61px;
    height: 27px;
    padding-right: 12px;
    border: 1px solid #828282;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    color: #828282;
    text-align: right;
    margin-left: 16px;
    font-family: 'Aestetico', sans-serif;
   
    :after {
        content: '';
        position: absolute;
        top: 50%;
        left: 2px;
        width: 26px;
        height: 24px;
        background-image: url(${logoLeaveGray});
        background-repeat: no-repeat;
        background-size: contain;
        transform: translateY(-50%);
    }

    :hover {
        border: 1px solid #FF5000;
        color: #FF5000;
       

        :after {
            background-image:url(${logoLeave});
        }
    }
`