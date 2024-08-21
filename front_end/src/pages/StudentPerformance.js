import React from 'react';
import '../style.css'; // 

const StudentPerformance = () => {
    return (
        <>
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

                <h1>Student Performance</h1>
            </header>

            <main>
                <section id="performance-overview">
                    <h2>Performance Overview</h2>
                    <p>Average GPA: 3.4</p>
                    <p>Students at Risk: 12</p>
                    <p>Top Performers: 20</p>
                </section>

                <section id="student-list">
                    <h2>Individual Student Data</h2>
                    <ul>
                        <li>John Doe - GPA: 3.9</li>
                        <li>Jane Doe - GPA: 2.4</li>
                        <li>Emily Smith - GPA: 3.2</li>
                    </ul>
                </section>

                <section id="guidance-actions">
                    <h2>Guidance Actions</h2>
                    <ul>
                        <li>Schedule academic counselling for at-risk students.</li>
                        <li>Organize reward programs for top performers.</li>
                        <li>Arrange additional tutoring sessions.</li>
                    </ul>
                </section>
            </main>
        </>
    );
};

export default StudentPerformance;
