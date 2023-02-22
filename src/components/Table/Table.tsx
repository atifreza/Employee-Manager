import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Popconfirm, notification } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import { setNewEmployeeDetails } from '../../redux/actions/Home';
import AddEditModal from '../AddEditModal/AddEditModal'
import NoEmployeeData from '../NoEmployeeData/NoEmployeeData';
import './Table.css'

const employeeInitialState = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: 0,
    gender: '',
    dateOfJoining: '',
    id: 0,
}

const Table = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const { employeeDetails } = useSelector((state: any) => state.homeData);
    const [editEmployeeRow, setEditEmployeeRow] = useState(employeeInitialState)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addEditModalOpen, setAddEditModalOpen] = useState('')

    const loggedinUserDetails: any = JSON.parse(localStorage.getItem("userDetails") || '{}')
    const { role } = loggedinUserDetails

    useImperativeHandle(
        ref,
        () => ({
            handleAdd() {
                setAddEditModalOpen('add');
                setIsModalOpen(true);
            }
        }),
    )

    const handleEdit: Function = (id: any) => {
        setAddEditModalOpen('edit');
        const editRow = employeeDetails.find((data: any) => data.id === id)
        setEditEmployeeRow(editRow)
        setIsModalOpen(true);
    }

    const onDelete = (id: any) => {
        let newEmployeeDetails = employeeDetails.filter((employee: any, index: any) => employee.id !== id)
        localStorage.setItem("employeeDetails", JSON.stringify(newEmployeeDetails));
        dispatch(setNewEmployeeDetails(newEmployeeDetails));
        showNotification('Employee deleted successfully')
    }

    const handleOk = () => {
        setIsModalOpen(false);
        setEditEmployeeRow(employeeInitialState)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setEditEmployeeRow(employeeInitialState)
    };

    const showNotification = (notificationMsg: any) => {
        notification.open({
            message: notificationMsg,
            style: {
                backgroundColor: 'lightgreen'
            }
        });
    }
    return (
        <div className='table_content'>
            {employeeDetails.length > 0 ? <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                        <th>Joined Date</th>
                        {role === 'Admin' && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {employeeDetails?.map((employee: any, index: any) => {
                        return (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailAddress}</td>
                                <td>{employee.phoneNumber}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.dateOfJoining}</td>
                                {role === 'Admin' && <td>
                                    <span
                                        className='admin_action'
                                        onClick={() => handleEdit(employee.id)}
                                    >
                                        <EditOutlined />
                                    </span>
                                    <span
                                        className='admin_action delete_employee'
                                    >
                                        <Popconfirm
                                            title="Delete the Employee"
                                            description="Are you sure to delete this Employee?"
                                            okText="Yes"
                                            cancelText="No"
                                            onConfirm={() => onDelete(employee.id)}
                                        >
                                            <DeleteOutlined />
                                        </Popconfirm>

                                    </span>
                                </td>}
                            </tr>
                        )
                    })}
                </tbody>
            </table> : <NoEmployeeData role={role} />}
            {isModalOpen && <AddEditModal
                editEmployeeRow={editEmployeeRow}
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
                employeeDetails={employeeDetails}
                showNotification={showNotification}
                addEditModalOpen={addEditModalOpen}
            />}

        </div>
    )
})

export default Table;
