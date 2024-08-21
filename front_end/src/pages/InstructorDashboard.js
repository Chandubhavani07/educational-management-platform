import React, { useEffect, useState } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const InstructorDashboard = () => {
    const [courses, setCourses] = useState([]);
    const [exams, setExams] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const userId = localStorage.getItem('userId');
            console.log('userId ', userId);
            const courseResponse = await axios.get('https://jxg2714.uta.cloud/backend/courses.php');
            const filteredCourses = courseResponse.data.filter(course => course.user_id === String(userId));
            console.log('filteredCourses', filteredCourses);
            setCourses(filteredCourses);

            const examResponse = await axios.get('https://jxg2714.uta.cloud/backend/exams.php');
            console.log('examResponse', examResponse);
            const courseIdList = filteredCourses.map((course) => course.id);
            console.log('courseIdList', courseIdList);
            let filteredExams = [];
            (examResponse.data).forEach((exam) => {
                if (courseIdList.includes(exam.course_id)) {
                    filteredExams.push(exam);
                }
            })
            // const filteredExams = examResponse.data.filter(exam => (exam.course_id in courseIdList));
            // const filteredExams = examResponse.data.filter(exam => exam.course_id in filteredCourses.map(c => c.id));
            console.log('filteredExams', filteredExams);
            setExams(filteredExams);
        };

        fetchData();
    }, []);

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/instructor_dashboard">Dashboard</Link></li>
                        <li><Link to="/ contact_us">Contact Us</Link></li>
                        <li><Link to="/about">About Us</Link></li>

                    </ul>
                    <div className="icons">
                        <Link to="/profile"><i className="fa fa-user"></i></Link>
                        <Link to="/messages_dashboard"><i className="fa fa-envelope"></i></Link>
                        <a href='/home'><i className="fa fa-sign-out"></i></a>
                    </div>
                </nav>
                <h1>Welcome</h1>
            </header>
            <main>
                <section className="instructor-section" id="instructor-dashboard">
                    <h2>Welcome, Instructor</h2>
                    <div className="instructor-menu">
                        <div className="menu-item" id="manage-courses">
                            <h3>Manage Courses</h3>
                            {console.log('courses is ', courses)}
                            {courses.map((course, index) => (
                                <p key={index}>{course.courseName}</p>
                            ))}
                            <Link to="/instructor_add_course"><button>Add New Course</button></Link>
                        </div>

                        <div className="menu-item" id="exam-management">
                            <h3>Exam Management</h3>
                            {exams.map((exam, index) => (
                                <p key={index}>{exam.examName} (Date: {exam.examDate})</p>
                            ))}
                            <Link to="/instructor_schedule_exam"><button>Schedule New Exam</button></Link>
                        </div>
                        <div className="menu-item" id="exam-management">
                            <h3>View analytics</h3>
                            <Link to="/student_performance_tracking"><button>View analytics</button></Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

export default InstructorDashboard;
