import React, { useEffect } from 'react';
import { useDataLayerValue } from './dataLayer';
import './App.css';
import ChooseOption from './components/chooseOption';
import User from './components/user';
import Organization from './components/organization';
import Axios from 'axios';

function App() {
	const [ state, dispatch] = useDataLayerValue();
	useEffect(() => {
		Axios.get("http://localhost:5000/getHospitals")
		.then((res) => {
			dispatch({
				type: 'SET_HOSPITALS',
				hospitals: res.data,
			});
		});
	}, []);
	return (
		<div className="App">
			{
				state.option !== undefined
					? state.option
						? <User />
						: <Organization />
					: <ChooseOption />
			}
		</div>
	);
}

export default App;
