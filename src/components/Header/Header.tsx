import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetLoggedInUsers } from '../../redux/actions/Login'
import './Header.css';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const signOut = () => {
        navigate('/')
        localStorage.removeItem("userDetails");
        localStorage.removeItem("loginUserDetails");
        dispatch(resetLoggedInUsers());

    }
    const loggedinUserDetails: any = JSON.parse(localStorage.getItem("userDetails") || '{}')
    const { role } = loggedinUserDetails

    return (
        <>
            <div>
                <div className='page_header'>
                    <div className='header_logo_content'>
                        <div className='header_logo'>
                            <img src={logo} alt="Employee Manager" />
                        </div>
                        <div className='app_title'>Employee Manager</div>
                    </div>
                    <div className='app_user'>
                        <div className='user_role'>
                            {role}
                        </div>
                        <div className='sign_out' onClick={signOut}>
                            <span >Sign Out</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
