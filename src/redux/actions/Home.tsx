import { 
    SET_NEW_EMPLOYEE_DETAILS
} from "../ConstantTypes";

export const setNewEmployeeDetails:any = (data:any) => (dispatch:any) => {
  dispatch({
    type: SET_NEW_EMPLOYEE_DETAILS,
    payload: data,
  });
};

