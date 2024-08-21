import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ManageCourses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch initial data
        axios.get('https://jxg2714.uta.cloud/backend/courses.php')
            .then(response => setCourses(response.data))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="/contact_us">Contact Us</a></li>
                        <li><a href="/about">About Us</a></li>                    </ul>
                </nav>
                <h1>Manage Courses</h1>
            </header>
            <main>
                <section className="course-management">
                    <h2>Existing Courses</h2>
                    <ul className="course-list">
                        {courses.map(course => (
                            <li key={course.id}>
                                <a href={`edit_courses?courseId=${course.id}`}>{course.courseName}</a>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

export default ManageCourses;
