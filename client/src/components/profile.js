import React from 'react';
import './profile.css';
import { useDataLayerValue } from '../dataLayer';

const User = () => {
	const [ { profileDetails }, dispatch ] = useDataLayerValue();

	return(
		<div className="profile">
			<button className="back" onClick={() => { dispatch({
				type: 'SET_DISPLAY_HOSPITAL',
				profileDetails: '',
			})}}>GO BACK</button>
			<img className="image" src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" alt="img"/>
				<div className="profile-item">
					HospitalName: { profileDetails.hospitalName }
				</div>
			<div className="profile-item">
					Location: { profileDetails.location }
			</div>
			<div className="profile-item">
				Ratings: { profileDetails.ratings }
			</div>
			<div className="profile-item grid">
				Treatments Offered: { profileDetails.treatment.map((treat)=> <div>{ treat }</div>) }
			</div>
			<div className="profile-item grid">
				Doctors: { profileDetails.doctor.map((doc)=> <div>{ doc }</div>) }
		</div>
		</div>
	);
};

export default User;