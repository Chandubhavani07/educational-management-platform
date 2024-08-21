import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

const ProgramReview = () => {
    const objectives = [
        'Improve student engagement by 20%',
        'Update curriculum to align with industry trends',
        'Expand faculty by hiring 5 new instructors'
    ];

    const performanceMetrics = {
        'Student Retention Rate': '87%',
        'Graduation Rate': '90%',
        'Placement Rate': '95%'
    };

    const improvementAreas = [
        'Faculty training and development',
        'Student career services',
        'Incorporate more practical assignments'
    ];

    const actionPlans = [
        'Conduct bi-annual faculty training',
        'Engage industry experts for student mentorship',
        'Revamp the course evaluation process'
    ];

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#features">Features</Link></li>
                        <li><Link to="/program_coordinator_dashboard">Dashboard</Link></li>
                        <li><Link to="#contact">Contact Us</Link></li>
                    </ul>
                    <div className="icons">
                        <Link to="/profile"><i className="fas fa-user"></i></Link>
                        <Link to="/messages_dashboard"><i className="fas fa-envelope"></i></Link>
                        <Link to="/home"><i className="fa fa-sign-out"></i></Link>
                    </div>
                </nav>
                <h1>Program Review</h1>
            </header>
            <main>
                <Section title="Current Program Objectives" content={objectives} />
                <Section title="Program Performance Metrics" content={performanceMetrics} />
                <Section title="Areas for Improvement" content={improvementAreas} />
                <Section title="Action Plans" content={actionPlans} />
            </main>
            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

const Section = ({ title, content }) => (
    <section id={title.toLowerCase().replace(/ /g, '-')}>
        <h2>{title}</h2>
        {Array.isArray(content) ? (
            content.map((item, index) => <p key={index}>{item}</p>)
        ) : (
            Object.entries(content).map(([key, value]) => (
                <p key={key}>{`${key}: ${value}`}</p>
            ))
        )}
    </section>
);

export default ProgramReview;
