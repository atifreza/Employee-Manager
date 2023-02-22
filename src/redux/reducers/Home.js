import {
    SET_NEW_EMPLOYEE_DETAILS
} from "../ConstantTypes";


const initialState = {
    employeeDetails: JSON.parse(localStorage.getItem('employeeDetails')) || [
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Chris',
            lastName: 'Hester',
            emailAddress: 'chris@gmail.com',
            phoneNumber: 1341312312,
            gender: 'Male',
            dateOfJoining: "2017-05-03"
        },
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Stephen',
            lastName: 'Johnson',
            emailAddress: 'stephen@gmail.com',
            phoneNumber: 5678456345,
            gender: 'Male',
            dateOfJoining: "2019-05-12"
        },
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Serena',
            lastName: 'Williams',
            emailAddress: 'henry@gmail.com',
            phoneNumber: 74837367258,
            gender: 'Female',
            dateOfJoining: "2023-02-23"
        },
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Dian',
            lastName: 'Bartley',
            emailAddress: 'dian@gmail.com',
            phoneNumber: 9274873627,
            gender: 'Female',
            dateOfJoining: "2023-02-23"
        },
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Anthony',
            lastName: 'Clark',
            emailAddress: 'anthony@gmail.com',
            phoneNumber: 4653722223,
            gender: 'Male',
            dateOfJoining: "2023-02-23"
        },
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Chris',
            lastName: 'Hester',
            emailAddress: 'chris@gmail.com',
            phoneNumber: 1341312312,
            gender: 'Male',
            dateOfJoining: "2017-05-03"
        },
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Stephen',
            lastName: 'Johnson',
            emailAddress: 'stephen@gmail.com',
            phoneNumber: 5678456345,
            gender: 'Male',
            dateOfJoining: "2019-05-12"
        },
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Serena',
            lastName: 'Williams',
            emailAddress: 'henry@gmail.com',
            phoneNumber: 74837367258,
            gender: 'Female',
            dateOfJoining: "2023-02-23"
        },
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Dian',
            lastName: 'Bartley',
            emailAddress: 'dian@gmail.com',
            phoneNumber: 9274873627,
            gender: 'Female',
            dateOfJoining: "2023-02-23"
        },
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Anthony',
            lastName: 'Clark',
            emailAddress: 'anthony@gmail.com',
            phoneNumber: 4653722223,
            gender: 'Male',
            dateOfJoining: "2023-02-23"
        },
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Chris',
            lastName: 'Hester',
            emailAddress: 'chris@gmail.com',
            phoneNumber: 1341312312,
            gender: 'Male',
            dateOfJoining: "2017-05-03"
        },
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Stephen',
            lastName: 'Johnson',
            emailAddress: 'stephen@gmail.com',
            phoneNumber: 5678456345,
            gender: 'Male',
            dateOfJoining: "2019-05-12"
        },
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Serena',
            lastName: 'Williams',
            emailAddress: 'henry@gmail.com',
            phoneNumber: 74837367258,
            gender: 'Female',
            dateOfJoining: "2023-02-23"
        },
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Dian',
            lastName: 'Bartley',
            emailAddress: 'dian@gmail.com',
            phoneNumber: 9274873627,
            gender: 'Female',
            dateOfJoining: "2023-02-23"
        },
        {
            id: Math.floor(Math.random() * 1000) + 1,
            firstName: 'Anthony',
            lastName: 'Clark',
            emailAddress: 'anthony@gmail.com',
            phoneNumber: 4653722223,
            gender: 'Male',
            dateOfJoining: "2023-02-23"
        }
    ],
};

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NEW_EMPLOYEE_DETAILS:
            return {
                ...state,
                employeeDetails: action.payload,
            }
        default:
            return state;
    }
}
