import React from 'react';
import './search.css';
import { useDataLayerValue } from '../dataLayer';
import Axios from 'axios';

const getHospitalDetails = ([state, dispatch ]) => {
	Axios.get("http://localhost:5000/getHospitals")
		.then((res) => {
			dispatch({
				type: 'SET_HOSPITALS',
				hospitals: res.data,
			});
		});
}

const Search = () => {
	const [ state, dispatch ] = useDataLayerValue();
	return (
		<div>
			<input
				className="search"
				value={ state.searchValue }
				onChange={ (evt) => {
						dispatch({
							type: 'SET_SEARCH',
							searchValue: evt.target.value,
					})}
				}
			/>
			<button
				disabled={ state.searchBy ? false : true }
				onClick={ () => { getHospitalDetails([ state, dispatch ]) } }>Search</button>
			<div className="search-by">
				<span
					className={ state.searchBy === 'hospitals' ? 'color' : '' }
					onClick= { () => {
						dispatch({
							type: 'SET_SEARCH_BY',
							searchBy: 'hospitals',
						}); }
					}>hospitals</span>
					<span
					className={ state.searchBy === 'treatment' ? 'color' : '' }
					onClick= { () => {
						dispatch({
							type: 'SET_SEARCH_BY',
							searchBy: 'treatment',
						}); }
					}>Treatment</span>
			</div>
		</div>
	);
};

export default Search;