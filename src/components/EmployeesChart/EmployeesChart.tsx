import React, { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart,
    Line,
} from "recharts";
import { Select } from 'antd';
import './EmployeesChart.css'

const data = [
    {
        name: "2022",
        "Employees count": 2400,
    },
    {
        name: "2021",
        "Employees count": 1398,
    },
    {
        name: "2020",
        "Employees count": 9800,
    },
    {
        name: "2019",
        "Employees count": 3200,
    },
    {
        name: "2018",
        "Employees count": 1600,
    },
    {
        name: "2017",
        "Employees count": 4500,
    },
    {
        name: "2016",
        "Employees count": 6000,
    },
    {
        name: "2015",
        "Employees count": 7200,
    },
    {
        name: "2014",
        "Employees count": 8400,
    },
    {
        name: "2013",
        "Employees count": 3200,
    },
];




const EmployeesChart = () => {
    const [displayChart, setDisplayChart] = useState('bar')

    const handleChange = (value: string) => {
        setDisplayChart(value)
    };
    return (
        <>
            <div className="select_chart">
                <div>
                    Data of employees joined in the past 10 years
                </div>
                <div>
                    <div>Select a chart of your wish </div>
                    <Select
                        defaultValue="bar"
                        style={{ width: 150 }}
                        onChange={handleChange}
                        placeholder="Select"
                        options={[
                            { value: 'bar', label: 'Bar Chart' },
                            { value: 'line', label: 'Line Chart' }
                        ]}
                    />
                </div>
            </div>
            <div className="employee_chart_content">
                {displayChart === 'bar' ? <BarChart
                    width={700}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Employees count" fill="#8884d8" />
                </BarChart> :
                    <LineChart
                        width={700}
                        height={400}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="Employees count"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>}
            </div>
        </>
    )
}

export default EmployeesChart
