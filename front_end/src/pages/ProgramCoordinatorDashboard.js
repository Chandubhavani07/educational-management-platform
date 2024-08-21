
import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

// { label: 'Student Queries', description: 'Address concerns or inquiries related to the program from students.', route: '/student_queries' },
const CoordinatorDashboard = () => {
    const dashboardLinks = [
        { label: 'Edit Courses', description: 'Update course content and objectives.', route: '/manage_courses' },
        { label: 'Student Performance', description: 'Monitor and provide guidance.', route: '/student_performance_tracking' },
        { label: 'Strategic Decisions', description: 'Work closely with administrators for program development and growth.', route: '/program_coordinator_strategic_decisions' },
    ];

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="#features">Features</Link></li>
                        <li><Link to="/program_coordinator_dashboard">Dashboard</Link></li>
                        <li><Link to="/contact_us">Contact Us</Link></li>
                    </ul>
                    <div className="icons">
                        <Link to="/profile"><i className="fa fa-user"></i></Link>
                        <Link to="/messages_dashboard"><i className="fa fa-envelope"></i></Link>
                        <a href='/home'><i className="fa fa-sign-out"></i></a>
                    </div>
                </nav>
                <h1>Welcome Program Coordinator</h1>
            </header>
            <main>
                <section className="coordinator-section" id="coordinator-dashboard">
                    <h2>Welcome, Coordinator</h2>
                    <div className="coordinator-menu">
                        {dashboardLinks.map((link, index) => (
                            <div className="menu-item" id={link.label.replace(' ', '-').toLowerCase()} key={index}>
                                <h3>{link.label}</h3>
                                <p>{link.description}</p>
                                <Link to={link.route}><button>Go</button></Link>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

export default CoordinatorDashboard;
