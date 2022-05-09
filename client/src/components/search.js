import React from 'react';
import './search.css';
import { useDataLayerValue } from '../dataLayer';

const Search = () => {
	const [ state, dispatch ] = useDataLayerValue();
	return (
		<div className="search">
			<div className="bar">
				<input
					className="search-input"
					value={ state.searchValue }
					onChange={ (evt) => {
							dispatch({
								type: 'SET_SEARCH',
								searchValue: evt.target.value,
						})}
					}
				/>
				<button
					className="search-button"
					disabled={ state.searchBy ? false : true }
					onClick={ () => {
						dispatch({
							type: 'SET_FILTERED',
						});
					} }>Search</button>
			</div>
			<div className="search-by">
				<span
					className={ state.searchBy === 'hospitals' ? 'by-items color' : 'by-items' }
					onClick= { () => {
						dispatch({
							type: 'SET_SEARCH_BY',
							searchBy: 'hospitals',
						}); }
					}>Hospitals</span>
					<span
					className={ state.searchBy === 'treatment' ? 'by-items color' : 'by-items' }
					onClick= { () => {
						dispatch({
							type: 'SET_SEARCH_BY',
							searchBy: 'treatment',
						}); }
					}>Treatment</span>
					<span
					className={ state.searchBy === 'location' ? 'by-items color' : 'by-items' }
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