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
	const nationality = useSelector(state => state.beneficiary.nationality);


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
					/>

					<Input
						type="text"
						width="35%"
						label="Email"
					/>
				</S.Row>
				<S.Row>
					<Input
						type="checkbox"
						width="95%"
						label="Possui nome social?"
						row
					/>
				</S.Row>
				<S.Row>
					<Input
						type="text"
						width="60%"
						label="Nome social"
						optional
					/>
				</S.Row>
				<S.Row>
					<Input
						type="text"
						width="20%"
						label="Data de Nascimento"
						placeholder="DD/MM/AAAA"
					/>
					<S.Label row>Sexo
						<S.LabelRadio>
							<S.RadioInput type='radio' name='sexo' />
							Masculino
						</S.LabelRadio>
						<S.LabelRadio>
							<S.RadioInput type='radio' name='sexo' />
							Feminino
						</S.LabelRadio>
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
						action={setNationality}
						isOpened={openNationality}
					/>
				</S.Row>

			</S.Fieldset>
		</S.Form>
	)
}

export default Form