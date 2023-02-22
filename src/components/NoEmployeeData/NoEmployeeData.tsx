import React from 'react'
import './NoEmployeeData.css';

interface Props {
    role: any
}

const NoEmployeeData = ({
    role
}: Props) => {
    return (
        <div className='no_data_content'>
            {role === 'Admin' ?
                <>
                    <h3>No records has been added yet.</h3>
                    <p>Add a new record by simply clicking the button on top right side.</p>
                </>
                : <h3>No records has been added yet.</h3>}
        </div>
    )
}

export default NoEmployeeData
