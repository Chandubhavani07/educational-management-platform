import React, { useState } from 'react';
import '../style.css';

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: '',
        mobile: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        mobile: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    const validateField = (fieldName, value) => {
        const newErrors = { ...errors };

        switch (fieldName) {
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
            default:
                break;
        }

        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Forgot password form submitted:', formData);
        // You can add further logic to submit the form data if there are no validation errors.
    };

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="/contact_us">Contact Us</a></li>
                        <li><a href="/about">About Us</a></li>
                    </ul>
                    <div className="icons">
                        <a href="/profile"><i className="fas fa-user"></i></a>
                        <a href="/messages_dashboard"><i className="fas fa-envelope"></i></a>
                    </div>
                </nav>
                <h1>Forgot Password</h1>
            </header>
            <main>
                <div className="forgot-password-container">
                    <form action="/forgot-password" method="POST" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}

                        <label htmlFor="mobile">Mobile Number:</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            pattern="[0-9]{10}"
                            required
                            onChange={handleChange}
                        />
                        {errors.mobile && <p className="error-message">{errors.mobile}</p>}

                        <button type="submit" className="forgot-password-btn">Submit</button>
                    </form>
                    <p>Remember your password? <a href="login">Login</a></p>
                </div>
            </main>
        </div>
    );
};

export default ForgotPassword;
