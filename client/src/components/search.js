import React from 'react';
import './search.css';
import { useDataLayerValue } from '../dataLayer';

const Search = () => {
	const [ state, dispatch ] = useDataLayerValue();
	return (
		<div className="search">
			<input
				className="input"
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
				onClick={ () => {
					dispatch({
						type: 'SET_FILTERED',
					});
				} }>Search</button>
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
					}>treatment</span>
					<span
					className={ state.searchBy === 'location' ? 'color' : '' }
					onClick= { () => {
						dispatch({
							type: 'SET_SEARCH_BY',
							searchBy: 'location',
						}); }
					}>Location</span>
			</div>
		</div>
	);
};

export default Search;