export const initialState = {
	option: undefined,
	treatment: [],
	treatmentName: '',
	doctor: [],
	doctorName: '',
	hospitalName: '',
	location: '',
	searchValue: '',
	searchBy: undefined,
	hospitals: [],
};

const reducer = ( state, action ) => {
	console.log(action);
	
	switch(action.type) {
		case 'SET_OPTION':
			return ({
				...state,
				option: action.option,
			});
			case 'SET_HOSPITAL_NAME':
				return ({
					...state,
					hospitalName: action.hospitalName,
				});
				case 'SET_LOCATION':
					return ({
						...state,
						location: action.location,
					});
			case 'SET_TREATMENT_NAME':
				return ({
					...state,
					treatmentName: action.treatmentName,
				});
			case 'SET_TREATMENT':
				return ({
					...state,
					treatment: state.treatment.concat(action.treatmentName),
					treatmentName: '',
				});
				case 'SET_DOCTOR_NAME':
				return ({
					...state,
					doctorName: action.doctorName,
				});
			case 'SET_DOCTOR':
				return ({
					...state,
					doctor: state.doctor.concat(action.doctorName),
					doctorName: '',
				});
			case 'SET_SEARCH':
				return ({
					...state,
					searchValue: action.searchValue,
				});
			case 'SET_SEARCH_BY':
				return ({
					...state,
					searchBy: action.searchBy,
				});
			case 'SET_HOSPITALS':
				return ({
					...state,
					hospitals: state.hospitals.concat(action.hospitals),
				});
			case 'RESET':
				return ({
					...initialState,
					option: action.option,
				});
			case 'GO_BACK':
				return ({
					...initialState,
				});
		default:
			return state;  
	}
}

export default reducer;