import React, { useState } from 'react';
import axios from 'axios';  // Import axios
import '../style.css';

const InstructorAddCourse = () => {
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseDuration, setCourseDuration] = useState('');
    const [courseStartDate, setCourseStartDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic form validations
        if (!courseName || !courseDescription || !courseDuration || !courseStartDate) {
            alert('All fields are required.');
            return;
        }

        if (courseDuration <= 0) {
            alert('Course duration must be greater than zero.');
            return;
        }

        const userId = localStorage.getItem('userId');
        const payload = {
            user_id: userId,
            courseName,
            courseDescription,
            courseDuration: Number(courseDuration),
            courseStartDate
        };

        try {
            const response = await axios.post('https://jxg2714.uta.cloud/backend/courses.php', payload);
            console.log('Course added successfully', response.data);
            alert('Course added successfully');
        } catch (error) {
            console.error('There was an error adding the course', error);
            alert('There was an error adding the course');
        }
    };

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/instructor_dashboard">Dashboard</a></li>
                        <li><a href="/contact_us">Contact Us</a></li>
                        <li><a href="/about">About Us</a></li>
                    </ul>
                    <div className="icons">
                        <a href="/profile"><i className="fa fa-user"></i></a>
                        <a href="/messages_dashboard"><i className="fa fa-envelope"></i></a>
                        <a href='home'><i className="fa fa-sign-out"></i></a>
                    </div>
                </nav>
                <h1>Welcome</h1>
            </header>
            <main>
                <section className="add-course-section" id="add-course">
                    <h2>Add a New Course</h2>
                    <form id="add-course-form" onSubmit={handleSubmit}>
                        <label htmlFor="course-name">Course Name:</label>
                        <input type="text" id="course-name" name="course-name" required
                            value={courseName} onChange={(e) => setCourseName(e.target.value)} />

                        <label htmlFor="course-description">Course Description:</label>
                        <textarea id="course-description" name="course-description" required
                            value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} />

                        <label htmlFor="course-duration">Duration (in weeks):</label>
                        <input type="number" id="course-duration" name="course-duration" required
                            value={courseDuration} onChange={(e) => setCourseDuration(e.target.value)} />

                        <label htmlFor="course-start-date">Start Date:</label>
                        <input type="date" id="course-start-date" name="course-start-date" required
                            value={courseStartDate} onChange={(e) => setCourseStartDate(e.target.value)} />

                        <button type="submit" className="add-course-button">Add Course</button>
                    </form>
                </section>
            </main>
            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

export default InstructorAddCourse;
