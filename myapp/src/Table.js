import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Table() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('https://dummy.restapiexample.com/api/v1/employees')
            .then(response => setEmployees(response.data.data))
            .catch(error => console.error(error))
    }, [])


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td><Link to={`/employee/${employee.id}`}>{employee.id}</Link></td>
                            <td>{employee.employee_name}</td>
                            <td>{employee.employee_salary}</td>
                            <td>{employee.employee_age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
