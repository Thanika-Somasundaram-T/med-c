import React from 'react';
import { useDataLayerValue } from './dataLayer';
import './App.css';
import ChooseOption from './components/chooseOption';
import User from './components/user';
import Organization from './components/organization';



function App() {
	const [ state ] = useDataLayerValue();
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
