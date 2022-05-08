export const initialState = {
	option: undefined,
	treatment: [],
	treatmentName: '',
	doctor: [],
	doctorName: '',
	hospitalName: '',
	location: '',
};

const reducer = ( state, action ) => {
	console.log(state.treatment);
	
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