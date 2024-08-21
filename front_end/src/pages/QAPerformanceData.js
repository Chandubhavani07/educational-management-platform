import React, { useState } from 'react';
import '../style.css';

const QAPerformanceData = () => {
    // Manage state for the filters
    const [selectedCourse, setSelectedCourse] = useState('all');
    const [selectedTime, setSelectedTime] = useState('weekly');

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="qa_dashboard">Dashboard</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                    <div class="icons">
                        <a href="profile"><i class="fa fa-user"></i></a>
                        <a href="messages_dashboard"><i class="fa fa-envelope"></i></a>
                        <a href='home'><i className="fa fa-sign-out"></i></a>
                    </div>
                </nav>
            </header>            <h1>Performance Data Overview</h1>

            <main>
                {/* Filters */}
                <section id="filters">
                    <label htmlFor="select-course">Select Course:</label>
                    <select
                        id="select-course"
                        value={selectedCourse}
                        onChange={e => setSelectedCourse(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="course1">Course 1</option>
                        <option value="course2">Course 2</option>
                    </select>

                    <label htmlFor="select-time">Select Time-Period:</label>
                    <select
                        id="select-time"
                        value={selectedTime}
                        onChange={e => setSelectedTime(e.target.value)}
                    >
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </section>

                {/* KPIs */}
                <section id="key-performance-indicators">
                    <h2>Key Performance Indicators</h2>
                    <KPI title="Average Test Scores" value="82%" />
                    <KPI title="Student Retention Rate" value="91%" />
                    <KPI title="Pass/Fail Ratio" value="7:1" />
                </section>

                {/* Data Visualization */}
                <section id="data-visualization">
                    <h2>Data Visualization</h2>
                    <div id="chart-area">
                        {/* Placeholder for charts */}
                        <p>Charts or graphs will go here.</p>
                    </div>
                </section>

                {/* Recommendations */}
                <section id="recommendations">
                    <h2>Recommendations for Improvement</h2>
                    <p>Based on the data, here are some recommended actions.</p>
                    <ul>
                        <li>Revise course materials for Course 1.</li>
                        <li>Conduct training sessions for instructors.</li>
                    </ul>
                </section>
            </main>

            {/* Footer */}
            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

const KPI = ({ title, value }) => (
    <div className="kpi">
        <h3>{title}</h3>
        <p>{value}</p>
    </div>
);

export default QAPerformanceData;
