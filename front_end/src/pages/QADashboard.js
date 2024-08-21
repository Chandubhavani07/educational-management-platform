import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

// { path: "/QA_quality_processes", title: "Quality Processes", description: "Develop and implement QA policies to maintain standards." },
const QADashboard = () => {
    const dashLinks = [
        { path: "/QA_course_review", title: "Course Review", description: "Review and validate course content, objectives, and assessments." },
        { path: "/QA_audit", title: "Audits", description: "Conduct audits or evaluations to identify areas for improvement." },
        { path: "/QA_performance_data", title: "Performance Data", description: "Monitor and analyze student performance data." },
    ];

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
                <h1>Welcome, Quality Assurance Officer</h1>
            </header>
            <main>
                {dashLinks.map((link, index) => (
                    <DashLink key={index} {...link} />
                ))}
            </main>
            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

const DashLink = ({ path, title, description }) => (
    <Link to={path} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
        <section id={title.toLowerCase().replace(' ', '-')}>
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    </Link>
);

export default QADashboard;
