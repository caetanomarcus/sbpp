import React from "react";
import * as S from "./style";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { setModalClose, setModalType, setResetStates } from "../../modules/Beneficiary/Dataflow/reducers-and-actions/beneficiary";

const typeLeave ={
    title: 'Tem certeza que deseja sair?',
}

const typeCancel = {
    title: 'Tem certeza que deseja cancelar o cadastro?',
}

const typeClean = {
    title: 'Tem certeza que deseja limpar todos os campos?',
}

const typeFinish = {
    title: 'Tem certeza que deseja finalizar o cadastro?',
    subTitle: 'A partir daqui, os dados serão enviados para pagamento e não será possível editar as informações',
    buttonText: 'Sim, retornar ao menu inicial'
}

const Modal = () => {
    const modalType = useSelector(state => state.beneficiary.modalType);
    const isModalOpen = useSelector(state => state.beneficiary.modalOpen);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickClose = () => {
        dispatch(setModalClose());
        dispatch(setModalType(''));
    }

    const handleClickLeave = () => {
        dispatch(setModalClose());
        dispatch(setModalType(''));
        navigate('/')
    }


    const renderModal = () => {

        switch (modalType) {
            case 'leave':
                return (
                <S.Box>
                    <S.Title>{typeLeave.title}</S.Title>
                    <S.ButtonBox>
                        <S.Button onClick={handleClickClose} >Não</S.Button>
                        <S.Button yes onClick={handleClickLeave} >Sim</S.Button>
                    </S.ButtonBox>
                    </S.Box>
                    )
            case 'cancel':
                return (
                <S.Box>
                    <S.Title>{typeCancel.title}</S.Title>
                    <S.ButtonBox>
                        <S.Button onClick={handleClickClose} > Não</S.Button>
                        <S.Button yes onClick={() => dispatch(setResetStates())} >Sim</S.Button>
                    </S.ButtonBox>
                    </S.Box>
                    )
            case 'clean':
                return (
                <S.Box>
                    <S.Title>{typeClean.title}</S.Title>
                    <S.ButtonBox>
                        <S.Button onClick={handleClickClose} >Não</S.Button>
                        <S.Button yes >Sim</S.Button>
                    </S.ButtonBox>
                    </S.Box>
                    )
            case 'finish':
                return (
                <S.Box>
                    <S.Title>{typeFinish.title}</S.Title>
                    <S.SubTile>{typeFinish.subTitle}</S.SubTile>
                    <S.ButtonBox>
                        <S.Button onClick={handleClickClose} >Não</S.Button>
                        <S.Button yes finishBtn >{typeFinish.buttonText}</S.Button>
                    </S.ButtonBox>
                    </S.Box>
                    )
            default:
                return null;

                }
    }

    return (
        <S.Container>
            {renderModal()}
        </S.Container>
    )
}

export default Modal