import { connect } from 'react-redux';
import Home from '../components/Home/Home';

export const mapStateToProps = (state:any) => {
    const {
        isUserLoggedIn
    } = state.loginInData
    return {
        isUserLoggedIn
    }
}

export const mapDispatchToProps = (dispatch:any) => ({
    // userLogin: (data:any) => dispatch(userLogin(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)