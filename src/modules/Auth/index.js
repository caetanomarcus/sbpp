import React, {useState} from 'react';

//Components
import Login from './Components/Login';
import ForgetPassword from './Components/ForgetPassword';
import ChangePassword from './Components/ChangePassword';

//Styles 
import * as S from './style';

//Images 
import logoSbpp from '../../assets/images/sbpp-logo.png';
import logoSula  from '../../assets/images/sulamerica-logo.png';



const LoginScreen = () => {
    const [screen, setScreen] = useState('login');

    return (
        <S.Wrapper>
            <S.LoginContainer>
                <S.Header>
                    <S.Logo src={logoSbpp} />
                    <S.Line />
                </S.Header>
                {screen === 'login' ? (
                    <Login setScreen={setScreen} />
                ):(
                    <ForgetPassword setScreen={setScreen} />
                )
                }
                {/* <ChangePassword /> */}
                <S.loginFooter>
                    <S.Logo src={logoSula} width='138px' />
                </S.loginFooter>
            </S.LoginContainer>
        </S.Wrapper>
    )
}

export default LoginScreen