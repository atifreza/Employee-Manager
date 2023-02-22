import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard';

export const mapStateToProps = (state:any) => {
    const {
        isUserLoggedIn,
        employeeDetails,
        userLoginDetails
    } = state.loginInData
    return {
        isUserLoggedIn,
        employeeDetails,
        userLoginDetails
    }
}

export const mapDispatchToProps = (dispatch:any) => ({
    // userLogin: (data:any) => dispatch(userLogin(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)