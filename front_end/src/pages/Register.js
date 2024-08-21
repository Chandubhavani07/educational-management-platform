import React, { useState } from 'react';
import '../style.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstname: '',
        lastname: '',
        mobile: '',
        email: '',
        password: '',
        confirm_password: '',
        role: '',
        dob: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        mobile: '',
        password: '',
        confirm_password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create an object with the data
        const userData = {
            username: formData.username,
            firstname: formData.firstname,
            lastname: formData.lastname,
            mobile: formData.mobile,
            email: formData.email,
            password: formData.password,
            confirm_password: formData.confirm_password,
            role: formData.role,
            dob: formData.dob,
        };

        // Send the data to the server
        fetch('https://jxg2714.uta.cloud/backend/register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the server
                console.log('Response from server:', data);
            })
            .catch(error => {
                // Handle any errors
                console.error('Error:', error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        validateField(name, value);
    };

    const validateField = (fieldName, value) => {
        const newErrors = { ...errors };

        switch (fieldName) {
            case 'username':
                // Username validation regex
                const usernameRegex = /^[a-zA-Z0-9_]+$/; // Only allows letters, numbers, and underscores
                if (!usernameRegex.test(value)) {
                    newErrors.username = 'Invalid username. Username can only contain letters, numbers, and underscores.';
                } else {
                    newErrors.username = '';
                }
                break;
            case 'email':
                // Email validation regex
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!emailRegex.test(value)) {
                    newErrors.email = 'Invalid email address';
                } else {
                    newErrors.email = '';
                }
                break;
            case 'mobile':
                // Mobile number validation regex for 10 digits
                const mobileRegex = /^\d{10}$/;
                if (!mobileRegex.test(value)) {
                    newErrors.mobile = 'Invalid mobile number. Please enter 10 digits.';
                } else {
                    newErrors.mobile = '';
                }
                break;
            case 'password':
                // Password validation regex (example: at least 8 characters with one letter and one digit)
                const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                if (!passwordRegex.test(value)) {
                    newErrors.password = 'Invalid password. Password must be at least 8 characters long and contain at least one letter and one digit.';
                } else {
                    newErrors.password = '';
                }
                break;
            case 'confirm_password':
                if (value !== formData.password) {
                    newErrors.confirm_password = 'Passwords do not match';
                } else {
                    newErrors.confirm_password = '';
                }
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="about">About Us</a></li>

                    </ul>
                    <div class="icons">
                        <a href="profile"><i class="fas fa-user"></i></a>
                        <a href="messages_dashboard.html"><i class="fas fa-envelope"></i></a>
                    </div>
                </nav>
                <h1>Sign Up</h1>
            </header>
            <main>
                <div className="registration-container">
                    <form onSubmit={handleSubmit}>
                        {/* Rendered all the labels and input fields here */}
                        {Object.keys(formData).map((key) => (
                            key !== 'role' && key !== 'dob' ? (
                                <div key={key}>
                                    <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                                    <input
                                        type={key === 'password' || key === 'confirm_password' ? 'password' : 'text'}
                                        id={key}
                                        name={key}
                                        value={formData[key]}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors[key] && <p className="error-message">{errors[key]}</p>}
                                </div>
                            ) : null
                        ))}

                        {/* Role Dropdown */}
                        <label htmlFor="role">Role:</label>
                        <select id="role" name="role" value={formData.role} onChange={handleChange} required>
                            <option value="" disabled>Select your role</option>
                            <option value="student">Student</option>
                            <option value="instructor">Instructor</option>
                            <option value="qa-officer">QA officer</option>
                            <option value="program-coordinator">Program Coordinator</option>
                            <option value="admin">Admin</option>
                        </select>

                        {/* DOB Input */}
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />


                        <button type="submit" className="register-btn">Register</button>
                    </form>
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </main>
        </div>
    );
};

export default Register;
