


const Service = {
	filterByHospitals: ({ hospitals, searchValue }) => 
		hospitals.filter((hospital) => hospital.hospitalName === searchValue),
	filterByTreatment: ({ hospitals, searchValue }) =>
		hospitals.filter((hospital) => hospital.treatment.find((treatment) => treatment === searchValue)),
	filterByLocation: ({ hospitals, searchValue }) =>
		hospitals.filter((hospital) => hospital.location === searchValue),
};

export default Service;