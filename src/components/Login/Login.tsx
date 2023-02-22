import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import LoginLogo from '../../assets/images/loginImage.svg';
import './Login.css'

interface Props {
    isUserLoggedIn: boolean,
    userLogin: any,
    userDetails: any,
    userLoginDetails: any
}

const loginUserDetails = [
    {
        firstName: 'Williams',
        lastName: 'John',
        username: 'williams_standard',
        password: 'William@07',
        role: 'Standard'
    },
    {
        firstName: 'John',
        lastName: 'Cena',
        username: 'john_admin',
        password: 'John@07',
        role: 'Admin'
    },
    {
        firstName: 'Fedde',
        lastName: 'Corey',
        username: 'corey_admin',
        password: 'Corey@07',
        role: 'Admin'
    },
    {
        firstName: 'Chris',
        lastName: 'Hester',
        username: 'chris_standard',
        password: 'Chris@07',
        role: 'Standard'
    },
    {
        firstName: 'Stephen',
        lastName: 'Wicks',
        username: 'stephen_admin',
        password: 'Stephen@07',
        role: 'Admin'
    }
]

localStorage.setItem("loginUserDetails", JSON.stringify(loginUserDetails));

export const Login = ({
    isUserLoggedIn,
    userLogin,
    userDetails,
}: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    let role = "";
    const onFinish = (values: any) => {
        const { username, password } = values;
        const userFound = loginUserDetails.find(user => user.username === username && user.password === password)
        if (userFound) {
            localStorage.setItem("userDetails", JSON.stringify(userFound));
            userLogin(userFound)
        } else {
            setIsModalOpen(true);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    if (localStorage.getItem("userDetails")) {
        const loggedinUserDetails: any = JSON.parse(localStorage.getItem("userDetails") || '{}')
        role = loggedinUserDetails.role
    }
    useEffect(() => {
        if (isUserLoggedIn && (role === 'Standard' || role === 'Admin')) {
            navigate("/home");
        } else if (isUserLoggedIn && role === 'Admin') {
            navigate("/chart");
        }
    }, [isUserLoggedIn]);

    return (
        <>
            {userDetails === 0 ?
                <div className="App">
                    <div className="login_main">

                        <img src={LoginLogo} alt="Login"/>
                    </div>
                    <div className="App-header">
                        <div className="signIn_content">
                            <header className="header">Sign In</header>
                            {isModalOpen && <p className="not_logged_in">The username/password is incorrect</p>}
                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                style={{ maxWidth: 600 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input placeholder="Username" />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password placeholder="Password" />
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div> : <Navigate to="/home" />}
        </>
    )
}

export default Login
