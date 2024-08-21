import React, { useEffect, useState } from 'react';
import '../style.css';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const Services = () => {
    // const courses = [
    //     {
    //         id: 1,
    //         thumbnail: 'course1_thumbnail.jpg',
    //         title: 'Course 1: Intro to Python',
    //         description: 'Learn Python programming from scratch. Ideal for beginners.'
    //     },
    //     {
    //         id: 2,
    //         thumbnail: 'course2_thumbnail.jpg',
    //         title: 'Course 2: Front-End Development',
    //         description: 'Master HTML, CSS, and JavaScript to build modern web apps.'
    //     },
    //     {
    //         id: 3,
    //         thumbnail: 'course3_thumbnail.jpg',
    //         title: 'Course 3: Data Science',
    //         description: 'Get to know the basics of data science using Python and R.'
    //     }
    // ];

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data: courseResponse } = await axios.get('https://jxg2714.uta.cloud/backend/courses.php');
            setCourses(courseResponse);
        }
        
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <Main courses={courses} />
            <Footer />
        </div>
    );
};

const Header = () => (
    <header>
        <Nav />
        <h1>Welcome</h1>
    </header>
);

const handleClick = (course) => {   
    console.log(course);
}

const Nav = () => (
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
);

const Main = ({ courses }) => (
    <main>
        <CourseSection courses={courses} />
    </main>
);

const CourseSection = ({ courses }) => (
    <section className="dashboard-section" id="course-access-list">
        <h2>Available Courses</h2>
        <ul className="course-list">
            {courses.map(course => (
                <CourseItem key={course.id} course={course} />
            ))}
        </ul>
    </section>
);

const CourseItem = ({ course }) => (
    <li className="course-item">
        {/* <img src={`../images/${course.thumbnail}`} alt={`${course.title} Thumbnail`} className="course-thumbnail" /> */}
        <div className="course-details">
            <div className="course-title">{course.courseName}</div>
            <div className="course-description">{course.courseDescription}</div>
            {/* <button onClick={() => window.location.href = 'student_courses'} className="access-button">Access</button> */}
            {/* <button onClick={() => handleClick(course)} className="access-button">Access</button> */}
            <Link to={{
                pathname: "/student_courses",
                state: { course: {course}}
            }}
            className="access-button">Access</Link>
        </div>
    </li>
);

const Footer = () => (
    <footer>
        <p>© 2023 Educational Management Platform</p>
    </footer>
);

export default Services;
