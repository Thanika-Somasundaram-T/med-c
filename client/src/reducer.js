export const initialState = {
	option: undefined,
};

const reducer = ( state, action ) => {
	console.log(action);
	
	switch(action.type) {
		case 'SET_OPTION':
			return ({
				...state,
				option: action.option,
			});
			
		default:
			return state;  
	}
}

export default reducer;