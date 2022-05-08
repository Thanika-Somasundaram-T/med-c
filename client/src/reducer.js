export const initialState = {
	test: 'context api is working'
};

const reducer = ( state, action ) => {
	console.log(action);
	
	switch(action.type) {

		default:
			return state;  
	}
}

export default reducer;