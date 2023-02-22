import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import Header from '../Header/Header'
import Home from '../../containers/Home'
import PageNotFound from '../PageNotFound/PageNotFound';
import EmployeesChart from '../EmployeesChart/EmployeesChart';
import './Dashboard.css'

const Dashboard: React.FC = (
    userLoginDetails: any
) => {
    const navigate = useNavigate()
    const location = useLocation();
    const { pathname } = location;
    const loggedinUserDetails: any = JSON.parse(localStorage.getItem("userDetails") || '{}')
    const { role, firstName, lastName } = loggedinUserDetails
    const items = role === 'Admin' ? [
        { label: "Home", key: "/home", icon: <DesktopOutlined /> },
        { label: "Charts", key: "/chart", icon: <PieChartOutlined /> }
    ] : [{ label: "Home", key: "/home", icon: <DesktopOutlined /> }]
    return (
        <>
            <Header />
            <div style={{ display: "flex" }} className='dashboard'>
                <div>
                    <Menu
                        defaultSelectedKeys={[pathname]}
                        // mode="inline"
                        theme="dark"
                        onClick={({ key }) => {
                            navigate(key)
                        }}
                        items={items}
                    />
                </div>
                <div className='main_content'>
                    <h1 className='user_name'>Welcome {firstName} {lastName}!</h1>
                    {pathname === '/home' ? <Home /> : role === 'Admin' ? <EmployeesChart /> : <PageNotFound />}
                </div>
            </div>
        </>
    )
}

export default Dashboard
