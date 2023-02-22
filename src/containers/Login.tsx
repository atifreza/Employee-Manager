import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { userLogin } from '../redux/actions/Login';

export const mapStateToProps = (state:any) => {
    const {
        isUserLoggedIn,
        userLoginDetails
    } = state.loginInData
    return {
        isUserLoggedIn,
        userLoginDetails
    }
}

export const mapDispatchToProps = (dispatch:any) => ({
    userLogin: (data:any) => dispatch(userLogin(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)