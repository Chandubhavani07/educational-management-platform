import React, { useState } from 'react';
import '../style.css';

const StudentExamFeedback = () => {
    const [formData, setFormData] = useState({
        courseName: '',
        examType: '',
        rating: 0,
        feedback: '',
        improvementArea: []
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox'
            ? [...formData.improvementArea, e.target.value]
            : e.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform the POST request logic here
        console.log("Submitted:", formData);
    };

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="/student_dashboard">Dashboard</a></li>
                        <li><a href="/contact_us">Contact Us</a></li>
                    </ul>
                    <div className="icons">
                        <a href="profile"><i className="fa fa-user"></i></a>
                        <a href="messages_dashboard"><i className="fa fa-envelope"></i></a>
                        <a href='home'><i className="fa fa-sign-out"></i></a>
                    </div>
                </nav>
            </header>

            <div className="feedback-container">
                <h1>Exam Feedback</h1>
                <form onSubmit={handleSubmit}>

                    {/* Course Name */}
                    <label htmlFor="courseName">Course Name:</label>
                    <input
                        type="text"
                        id="courseName"
                        name="courseName"
                        required
                        onChange={handleChange}
                    />

                    {/* Exam Type */}
                    <label htmlFor="examType">Exam Type:</label>
                    <select id="examType" name="examType" required onChange={handleChange}>
                        <option value="" disabled selected>Select Exam Type</option>
                        {/* ...other options */}
                    </select>

                    {/* Rating Section */}
                    <label>Rate Your Exam Experience:</label>
                    <div className="rating">
                        {/* ...other ratings */}
                    </div>

                    {/* General Feedback */}
                    <label htmlFor="feedback">General Feedback:</label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        rows="4"
                        required
                        onChange={handleChange}
                    ></textarea>

                    {/* Areas for Improvement */}
                    <label>Areas for Improvement:</label>
                    <div className="checkbox-container">
                        {/* ...checkboxes */}
                    </div>

                    <button type="submit" className="feedback-btn">Submit Feedback</button>
                </form>
            </div>
        </div>
    );
};

export default StudentExamFeedback;
