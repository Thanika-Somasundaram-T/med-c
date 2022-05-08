import React, { startTransition } from 'react';
import './organization.css';
import { useDataLayerValue } from '../dataLayer';
import Axios from 'axios';

const makeLists = (treatment) => {
	return(
		<div className="treatment">
			{ treatment }
		</div>
	);
}

const addHospital = (state) => {
	Axios.post("http://localhost:5000/addHospital", {
		hospitalName: state.hospitalName,
		location: state.location,
		treatment: state.treatment,
		doctor: state.doctor,
	}).then((res) => alert("success"));
};

const Organization = () => {
	const [ state, dispatch ] = useDataLayerValue();

	return(
		<div className="organization">
			<div className="form">
				<div>Hospital Name: </div>
				<input
					className="input"
					value={ state.hospitalName }
					onChange={ (evt) => {
						dispatch({
							type: 'SET_HOSPITAL_NAME',
							hospitalName: evt.target.value,
						})
					}}
				/>
			</div>
			<div className="form">
				<div>Location: </div>
				<input
					className="input"
					value={ state.location }
					onChange={ (evt) => {
						dispatch({
							type: 'SET_LOCATION',
							location: evt.target.value,
						})
					}}
				/>
			</div>
			<div className="form">
				<div>Treatment Offered: </div>
				<input
					className="input"
					value={ state.treatmentName }
					onChange={ (evt) => {
						dispatch({
							type: 'SET_TREATMENT_NAME',
							treatmentName: evt.target.value,
						})
					}} />
				<div
					onClick={ () => {
						dispatch({
							type: 'SET_TREATMENT',
							treatmentName: state.treatmentName,
						})}
					}
				>add</div>
			</div>
			<div className="form b">
				{ state.treatment ? state.treatment.map(makeLists) : null }
			</div>
			<div className="form">
					<div>Doctors: </div>
					<input
						className="input"
						value={ state.doctorName }
						onChange={ (evt) => {
							dispatch({
								type: 'SET_DOCTOR_NAME',
								doctorName: evt.target.value,
							})
						}} />
					<div
						onClick={ () => {
							dispatch({
								type: 'SET_DOCTOR',
								doctorName: state.doctorName,
							})}
						}
					>
						add
					</div>
			</div>
			<div className="form b">
				{ state.doctor ? state.doctor.map(makeLists) : null }
			</div>
			<button
				className="button"
				onClick={ () => {
					addHospital(state);
					dispatch({
						type: 'RESET',
						option: state.option,
					})}
				}
			>
				Submit
			</button>
			<button
			className="button"
			onClick={ () => {
				dispatch({
					type: 'GO_BACK',
				})}
			}
		>
			go Back
		</button>
		</div>
	);
};

export default Organization;