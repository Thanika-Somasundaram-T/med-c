import React from 'react';
import Search from './search';
import Display from './display';
import Profile from './profile';
import './user.css';
import { useDataLayerValue } from '../dataLayer';

const User = () => {
	const [ state ] = useDataLayerValue();

	return(
		<div className="user">
			{ state.displayHospital 
				? <Profile />
				: <span>
						<Search />
						<Display />
					</span>
			}
		</div>
	);
};

export default User;