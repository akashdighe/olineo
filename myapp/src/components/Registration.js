import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useHistory from react-router-dom
import './Registration.css';
import axios from 'axios';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();  // Create a history object

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the registration API endpoint
            const response = await axios.post('http://localhost:8000/api/create', {
                name: name,
                email: email,
            });

            if (response.status === 200) {
                // Registration successful, send OTP via email
                const responseMail = await axios.post('http://localhost:8000/api/sendemail', {
                    name: name,
                    email: email,
                    otpSpin:response.data.otpSpin
                });

                if (responseMail.status === 200) {
                    alert('Registration and OTP sent successfully');
                    navigate('/success')
                } else {
                    alert('Registration successful, but OTP sending failed');
                }

                console.log('Registration successful:', response.data);
            }
        } catch (error) {
            // Handle errors
            console.error('Registration failed:', error.message);
        }
    };

    return (
        <div className="registration-container">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:&nbsp;
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Email: &nbsp;
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;
