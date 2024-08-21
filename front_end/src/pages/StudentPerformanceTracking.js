import '../style.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentPerformanceTracking = () => {
    const [examScores, setExamScores] = useState([]);

    const [courseMetrics, setCourseMetrics] = useState([]);
    const [courseDetails, setCourseDetails] = useState([]);
    const mergeData = () => {
        return courseMetrics.map(metric => {
            const courseDetail = courseDetails.find(detail => detail.id === String(metric.course_id));
            return {
                ...metric,
                courseName: courseDetail ? courseDetail.courseName : 'Unknown'
            };
        });
    };

    const mergedData = mergeData();



    useEffect(() => {
        const fetchData = async () => {
            // Fetch course metrics
            const metricsResponse = await axios.get('https://jxg2714.uta.cloud/backend/analytics.php?analyticsType=course_enrollment');
            setCourseMetrics(metricsResponse.data);

            // Fetch course details
            const detailsResponse = await axios.get('https://jxg2714.uta.cloud/backend/courses.php');
            setCourseDetails(detailsResponse.data);
            const examScoresResponse = await axios.get('https://jxg2714.uta.cloud/backend/analytics.php?analyticsType=exam_scores');
            setExamScores(examScoresResponse.data);
        };

        fetchData();
    }, []);
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        {/* <li><a href="/instructor_dashboard">Dashboard</a></li> */}
                        <li><a href="/contact_us">Contact Us</a></li>
                    </ul>
                    <div className="icons">
                        <a href="/profile"><i className="fa fa-user"></i></a>
                        <a href="/messages"><i className="fa fa-envelope"></i></a>
                        <a href='home'><i className="fa fa-sign-out"></i></a>
                    </div>
                </nav>
                <h1>Performance Metrics</h1>
            </header>
            <main>
                <section className="metrics-section">
                    <h2>Course Performance</h2>
                    {mergedData.map((course, index) => (
                        <div className="metric-card" key={index}>
                            <h3>{course.courseName}</h3>
                            <p>Total Students: {course.total_students}</p>
                        </div>
                    ))}
                </section>
                <section className="metrics-section">
                    <h2>Exam Scores</h2>
                    {examScores.map((exam, index) => (
                        <div className="metric-card" key={index}>
                            <h3>Exam ID: {exam.exam_id}</h3>
                            <p>Min Score: {exam.min_score}</p>
                            <p>Max Score: {exam.max_score}</p>
                            <p>Average Score: {exam.avg_score}</p>
                        </div>
                    ))}
                </section>
            </main>

            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
}

export default StudentPerformanceTracking;


