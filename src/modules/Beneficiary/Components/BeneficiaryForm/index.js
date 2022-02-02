import React, { useState } from 'react';
import { useSelector , useDispatch} from "react-redux";
import { setNationality } from '../../Dataflow/reducers-and-actions/beneficiary';

import * as S from './style'
import { Input, Select } from "../../../../components/Inputs/InputRegistration"
import grayArrow from '../../../../assets/icons/gray-arrow.svg'


const Form = () => {

	// Local State
	const [openNationality, setOpenNationality] = useState(false);

	//Redux State and dispatch
	const client = useSelector(state => state.beneficiary.selectedClient);
	const nationality = useSelector(state => state.beneficiary.beneficiaryData.nationality);


	const paises = ["Brasil", "Argentina", "Uruguai", "aaaa", "bbbb", "cccc", "ddddd", "eeeee"]

	const handleOpenSelect = (e) => {
		e.preventDefault();
		setOpenNationality(!openNationality);
	}

	const handleClick = (e, setValue) => {
		e.preventDefault();
		return setValue()
	}
	return (
		<S.Form>
			<S.Fieldset>
				<S.Legend>Participante</S.Legend>

				<S.Row>
					<Input
						type="text"
						width="20%"
						label="Matrícula"
						value={client.registration}
						disabled={true}
						handleChange=""
						noPadding
					/>

					<Input
						type="text"
						width="20%"
						label="CPF/CNPJ"
						value={client.cpfOrCnpj}
						disabled={true}
						handleChange=""
						noPadding
					/>
				</S.Row>

			</S.Fieldset>

			<S.Fieldset>
				<S.Legend>Dados </S.Legend>
				<S.Row>
					<Input
						type="text"
						width="60%"
						label="Nome"
						value={client.name}
						handleChange=""
					/>

					<S.Label htmlFor="" width="35%"> Email
						<S.Input id=""></S.Input>
					</S.Label>
				</S.Row>
				<S.Row>
					<S.Label htmlFor="" width="100%" row > Possui nome social?
						<S.InputCheck type="checkbox"></S.InputCheck>
					</S.Label>

				</S.Row>
				<S.Row>
					<S.Label htmlFor="" width="60%" optional> Nome social
						<S.Input id=""></S.Input>
					</S.Label>
				</S.Row>
				<S.Row>
					<S.Label htmlFor="" width="20%"> Data de Nascimento
						<S.Input id="" placeholder="DD/MM/AAAA"></S.Input>
					</S.Label>

					<S.Label htmlFor="" width="5%" > Sexo
						<S.Row>
							<S.InputCheck type="radio" value="feminino"></S.InputCheck>
							<S.InputCheck type="radio" value="masculino"></S.InputCheck>
						</S.Row>
					</S.Label>
				</S.Row>

				<S.Row>
					<Select
						width="40%"
						label="Naturalidade"
						value={nationality}
						handleClickSelect={ handleOpenSelect }
						options={paises}
						source={grayArrow}
						action ={setNationality}
						isOpened={openNationality}
					/>
				</S.Row>

			</S.Fieldset>
		</S.Form>
	)
}

export default Form