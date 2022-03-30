import React from "react";
import * as S from "./style";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { setModalClose, 
    setModalType, 
    setScreen, 
    setSelectedClient, 
    setClearAllPersonalData,
    setClearAllFinancialData,
    setClearAllBenefitData
 } from "../../modules/Beneficiary/Dataflow/reducers-and-actions";

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
    const step = useSelector(state => state.beneficiary.step);

    const initial = 'inicio';
    const beneficiary = 'beneficiary';
	const financial = 'financial';
	const benefit = 'benefit';

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickClose = () => {
        dispatch(setModalClose());
        dispatch(setModalType(''));
    }

    const handleClickLeave = () => {
        dispatch(setModalClose());
        dispatch(setModalType(''));
        dispatch(setScreen(initial));
        dispatch(setSelectedClient({}));
        navigate('/')
    }

    const handleClickCancel = () => {
        dispatch(setModalClose());
        dispatch(setModalType(''));
		dispatch(setClearAllPersonalData());
		dispatch(setClearAllFinancialData());
		dispatch(setClearAllBenefitData());
		dispatch(setSelectedClient({}));
		dispatch(setScreen(initial));
	}

    const handleClickClean = () => {
        dispatch(setModalClose());
        dispatch(setModalType(''));
		switch (step) {
			case beneficiary:
				dispatch(setClearAllPersonalData())
				break;
			case financial:
				dispatch(setClearAllFinancialData())
				break;
			case benefit:
				dispatch(setClearAllBenefitData())
				break;
			default:
				return null
		}
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
                        <S.Button yes onClick={handleClickCancel} >Sim</S.Button>
                    </S.ButtonBox>
                    </S.Box>
                    )
            case 'clean':
                return (
                <S.Box>
                    <S.Title>{typeClean.title}</S.Title>
                    <S.ButtonBox>
                        <S.Button onClick={handleClickClose} >Não</S.Button>
                        <S.Button yes onClick={handleClickClean} >Sim</S.Button>
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