import React from 'react';
import './display.css';
import { useDataLayerValue } from '../dataLayer';

const displayHospitals = (hospital) => {

	return (
		<div className="display-item">
			<div>
				<span>name: { hospital.hospitalName }</span>
				<span>location: { hospital.location }</span>
			</div>
		</div>
	);
}

const Display = () => {
	const [ state, dispatch ] = useDataLayerValue();
	return (
		<div className="display">
			{ state.hospitals.map(displayHospitals) }
		</div>
	);
};

export default Display;