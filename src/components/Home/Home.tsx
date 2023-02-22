import React, { useRef } from 'react'
import { Button } from 'antd';
import {
    UserAddOutlined
} from '@ant-design/icons';
import Table from '../Table/Table'
import './Home.css'


const Home = () => {
    const childRef: any = useRef();
    const loggedinUserDetails: any = JSON.parse(localStorage.getItem("userDetails") || '{}')
    const { role } = loggedinUserDetails

    return (
        <div className='employee_home_page'>
            {(role === 'Admin') && <div className='employee_details_add'>
                <div>
                    <h2>Employee Details</h2>
                </div>
                <div>
                    <Button type="primary" shape="round" icon={<UserAddOutlined />} size='large' onClick={() => { childRef.current.handleAdd() }}>
                        Add Employee
                    </Button>
                </div>
            </div>}
            <Table
                ref={childRef}
            />
        </div>
    )
}

export default Home
