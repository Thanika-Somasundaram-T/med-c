import React from 'react';
import './chooseOption.css';
import { useDataLayerValue } from '../dataLayer';


const ChooseOption = () => {
	const [ {}, dispatch ] = useDataLayerValue();
	return(
		<div className="choose-option">
			<div
				onClick={ () => {
					dispatch({
					type: 'SET_OPTION',
					option: true,
					})}
				}
			>
				SEARCH HOSPITALS
			</div>
			<div
				onClick={ () => {
					dispatch({
					type: 'SET_OPTION',
					option: false,
					})}
				}
			>
				ADD YOUR ORGANIZATION
			</div>
		</div>
	);
};

export default ChooseOption;