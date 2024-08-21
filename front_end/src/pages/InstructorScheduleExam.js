import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style.css';

const InstructorScheduleExam = () => {
    const [formData, setFormData] = useState({
        course_id: '',
        examName: '',
        examDescription: '',
        examDate: '',
        totalMarks: '',
        durationMinutes: ''
    });

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('https://jxg2714.uta.cloud/backend/courses.php')
            .then(response => setCourses(response.data))
            .catch(error => console.error('There was an error fetching courses:', error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://jxg2714.uta.cloud/backend/exams.php', formData);
            alert('Exam scheduled successfully');
            console.log('Response:', response.data);
        } catch (error) {
            alert('Failed to schedule the exam');
            console.log('Error:', error);
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
                        <a href='/home'><i className="fa fa-sign-out"></i></a>
                    </div>
                </nav>
                <h1>Welcome</h1>
            </header>

            <main>
                <section className="exam-scheduling-section" id="schedule-exam">
                    <h2>Schedule a New Exam</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="course_id">Course:</label>
                        <select id="course_id" name="course_id" onChange={handleChange} required>
                            <option value="">Select Course</option>
                            {courses.map(course => (
                                <option key={course.id} value={course.id}>
                                    {course.courseName}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="examName">Exam Name:</label>
                        <input type="text" id="examName" name="examName" onChange={handleChange} required />

                        <label htmlFor="examDescription">Exam Description:</label>
                        <textarea id="examDescription" name="examDescription" onChange={handleChange} required></textarea>

                        <label htmlFor="examDate">Exam Date:</label>
                        <input type="date" id="examDate" name="examDate" onChange={handleChange} required />

                        <label htmlFor="totalMarks">Total Marks:</label>
                        <input type="number" id="totalMarks" name="totalMarks" onChange={handleChange} required />

                        <label htmlFor="durationMinutes">Duration (Minutes):</label>
                        <input type="number" id="durationMinutes" name="durationMinutes" onChange={handleChange} required />

                        <button type="submit" style={{ backgroundColor: '#676d74' }}>Schedule Exam</button>
                    </form>
                </section>
            </main>
            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

export default InstructorScheduleExam;
