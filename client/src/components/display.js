import React from 'react';
import './display.css';
import { useDataLayerValue } from '../dataLayer';

const displayHospitals = (hospital, dispatch) => {
	return (
		<div className="display-item">
			<div className="item" onClick={ () => { dispatch({
				type: 'SET_DISPLAY_HOSPITAL',
				profileDetails: hospital,
			})} }>
				<img className="img" src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" alt="img"/>
				<span>name: { hospital.hospitalName }</span>
				<span>location: { hospital.location }</span>
				<span>treatment: { hospital.ratings }</span>
			</div>
		</div>
	);
}

const Display = () => {
	const [ state, dispatch ] = useDataLayerValue();
	return (
		<div className="display">
			{ state.filtered.map((hospital) => displayHospitals(hospital, dispatch)) }
		</div>
	);
};

export default Display;