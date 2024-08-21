import React, { useState } from 'react';
import '../style.css';

const EditUser = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        role: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                    <div className="icons">
                        {/* <a href="/profile"><FontAwesomeIcon icon={faUser} /></a> */}
                        {/* <a href="/messages_dashboard"><FontAwesomeIcon icon={faEnvelope} /></a> */}
                    </div>
                </nav>
                <h1>Welcome to the Educational Management Platform</h1>
            </header>
            <main>
                <section className="edit-user">
                    <h2>Edit User Details</h2>
                    <form action="/edit_user" method="POST" onSubmit={handleSubmit}>
                        <label htmlFor="new_password">New Password:</label>
                        <input type="password" id="new_password" name="newPassword" onChange={handleChange} />

                        <label htmlFor="confirm_new_password">Confirm New Password:</label>
                        <input type="password" id="confirm_new_password" name="confirmNewPassword" onChange={handleChange} />

                        <button type="submit" className="edit-btn">Save Changes</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default EditUser;
