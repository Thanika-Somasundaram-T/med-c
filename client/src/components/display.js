import React from 'react';
import './display.css';
import { useDataLayerValue } from '../dataLayer';

const displayHospitals = (hospital) => {

	return (
		<div className="display-item">
			<div>
				<img className="img" src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" alt="img"/>
				<span>name: { hospital.hospitalName }</span>
				<span>location: { hospital.location }</span>
				<span>treatment: { hospital.treatment }</span>
			</div>
		</div>
	);
}

const Display = () => {
	const [ state ] = useDataLayerValue();
	return (
		<div className="display">
			{ state.filtered.map(displayHospitals) }
		</div>
	);
};

export default Display;