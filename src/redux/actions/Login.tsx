import { 
    SAVE_LOGIN_USER,
    RESET_LOGIN_USER,
} from "../ConstantTypes";

export const userLogin = (data:any) => (dispatch:any) => {
  dispatch({
    type: SAVE_LOGIN_USER,
    payload: data,
  });
};

export const resetLoggedInUsers:any = () => (dispatch:any) => {
    dispatch({
      type: RESET_LOGIN_USER,
    });
  };

