import { 
    SAVE_LOGIN_USER,
    RESET_LOGIN_USER
} from "../ConstantTypes";


const initialState = {
  userLoginDetails: localStorage.getItem("userDetails") || {},
  isUserLoggedIn: false,
};

export default function loginReducer(state = initialState, action:any) {
  switch (action.type) {
    case SAVE_LOGIN_USER:
      return {
        ...state,
        userLoginDetails: action.payload,
        isUserLoggedIn: true,
      };
    case RESET_LOGIN_USER:
        return {
            ...state,
            userLoginDetails: {},
            isUserLoggedIn: false,
        };
    default:
      return state;
  }
}
