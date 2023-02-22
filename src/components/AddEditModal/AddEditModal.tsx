import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Button, Form, Input, InputNumber, Modal, Select } from 'antd';
import 'dayjs/locale/zh-cn';
import { setNewEmployeeDetails } from '../../redux/actions/Home';
import './AddEditModal.css'

const { Option } = Select;

interface Props {
    editEmployeeRow: any,
    isModalOpen: boolean,
    handleOk: any,
    handleCancel: any,
    employeeDetails: any,
    showNotification: any,
    addEditModalOpen: any
}
const AddEditModal = ({
    editEmployeeRow,
    isModalOpen,
    handleOk,
    handleCancel,
    employeeDetails,
    showNotification,
    addEditModalOpen
}: Props) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm()
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    /* eslint-enable no-template-curly-in-string */

    const onFinish = (values: any) => {
        const fieldsValue = {
            ...values,
        };
        if (addEditModalOpen === 'edit') {
            const { id } = fieldsValue
            const findIndex = employeeDetails.findIndex((employee: any) => employee.id === id)
            let newEmployeeDetails = JSON.parse(JSON.stringify(employeeDetails))
            newEmployeeDetails[findIndex] = fieldsValue
            localStorage.setItem("employeeDetails", JSON.stringify(newEmployeeDetails));
            dispatch(setNewEmployeeDetails(newEmployeeDetails));
            handleOk()
            showNotification('Employee Edited successfully')
        } else {
            const newUserId = Math.floor(Math.random() * 1000) + 1;
            fieldsValue.id = newUserId
            let newAddedEmployeeDetails = JSON.parse(JSON.stringify(employeeDetails))
            newAddedEmployeeDetails.push(fieldsValue)
            localStorage.setItem("employeeDetails", JSON.stringify(newAddedEmployeeDetails));
            dispatch(setNewEmployeeDetails(newAddedEmployeeDetails));
            form.resetFields()
            handleOk()
            showNotification('Employee Added successfully')

        }
    };
    useEffect(() => {
        form.setFieldsValue(editEmployeeRow)
    }, [editEmployeeRow]);

    const createFieldRules: any = (editRowKeys: any, id: any) => {
        return editRowKeys[id] === 'emailAddress' ?
            { required: true, type: 'email' } :
            editRowKeys[id] === 'phoneNumber' ?
                { required: true, pattern: new RegExp(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/), message: "Phone number should be of 10 digit" } :
                editRowKeys[id] === 'dateOfJoining' ?
                    { required: true, pattern: new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/), message: "Please enter the date in 'YYYY-MM-DD' format" } :
                    { required: true }
    }

    const createFields: any = (editRowKeys: any, index: any) => {
        switch (editRowKeys[index]) {
            case 'phoneNumber':
                return <InputNumber />
            case 'gender':
                return <Select
                    placeholder="Select Gender"
                    allowClear
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select>
            default:
                return <Input placeholder={editRowKeys[index]} />
        }
    }

    const createEditForms: Function = () => {
        let editRowKeys = Object.keys(editEmployeeRow)
        let createdForm = editRowKeys.map((edit: any, index) => {
            return <Form.Item
                hidden={editRowKeys[index] === 'id' && true}
                key={index}
                name={editRowKeys[index]}
                label={editRowKeys[index].toUpperCase()}
                rules={[createFieldRules(editRowKeys, index)]}
            >
                {createFields(editRowKeys, index)}
            </Form.Item>
        })
        return createdForm
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Modal title={addEditModalOpen === 'edit' ? "Edit Employee" : "Add Employee"} open={isModalOpen} onCancel={handleCancel}>
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                    style={{ maxWidth: 600 }}
                    validateMessages={validateMessages}
                    initialValues={editEmployeeRow}
                >
                    {createEditForms()}
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AddEditModal
