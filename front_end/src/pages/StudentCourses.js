import React from 'react';
import '../style.css';
import { useLocation } from "react-router-dom"

// Sample data to simulate dynamic course fetching
const courses = [
    {
        name: 'Intro to Python',
        professor: 'John Smith',
        level: 'Beginner',
        rating: '★★★★☆',
        duration: '6 weeks',
        description: 'Be the Python wizard you were born to be. No more snake charmer, be the snake!',
        thumbnail: '../images/course1_thumbnail.jpg',
    },
    // Add more course objects here
];

const StudentCourses = () => {
    const location = useLocation();
    const course = location.state.course;
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
                <h1>Course Central: Where Legends are Born!</h1>
            </header>

            <main>
                <section className="dashboard-section" id="course-access-list">
                    <h2>The Knowledge Buffet</h2>
                    <p>Feast your intellect on these course delicacies!</p>
                    {/* <ul className="course-list">
                        {courses.map((course, index) => (
                            <li className="course-item" key={index}>
                                <img src={course.thumbnail} alt={`${course.name} Thumbnail`} className="course-thumbnail" />
                                <div className="course-details">
                                    <h3>{course.name}</h3>
                                    <p>Professor: {course.professor}</p>
                                    <p>Level: {course.level}</p>
                                    <p>Rating: {course.rating}</p>
                                    <p>Duration: {course.duration}</p>
                                    <p>Description: {course.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul> */}
                    <ul className="course-list">
                        {[course].map((course, index) => (
                            <li className="course-item" key={index}>
                                <div className="course-details">
                                    <h3>{course.course.courseName}</h3>
                                    <p>Duration: {course.course.courseDuration} months</p>
                                    <p>Description: {course.course.courseDescription}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            <footer>
                <p>© 2023 Educational Management Platform. Shaping Futures, One Course at a Time.</p>
            </footer>
        </div>
    );
};

export default StudentCourses;
