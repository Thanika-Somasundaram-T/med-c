import React from 'react';
import { useDataLayerValue } from '../dataLayer';

const User = () => {
	const [ state ] = useDataLayerValue();

	return(
		<div className="profile">
			<h1>Profile</h1>
		</div>
	);
};

export default User;