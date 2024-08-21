import React from 'react';
import '../style.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
    return (
        <div>
            <Header />
            <Main />
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

const Main = () => (
    <main>
        <Aside />
        <DashboardSection id="course-access" title="Course Catalog" description="Check out the latest courses and program objectives here." />
        <DashboardSection id="exam-management" title="Exam Management" description="Take your pending exams or review past exams." />
        <DashboardSection id="performance-tracking" title="Performance Tracking" description="View your academic performance and grades." />
    </main>
);

const Aside = () => (
    <aside className="sidebar">
        <ul>
            <li><a href="student_course_access">Course Catalog</a></li>
            <li><a href="student_exam_management">Exam Management</a></li>
            <li><a href="student_performance_tracking">Performance Tracking</a></li>
        </ul>
    </aside>
);

const DashboardSection = ({ id, title, description }) => (
    <section className="dashboard-section" id={id}>
        <h2>{title}</h2>
        <p>{description}</p>
    </section>
);

const Footer = () => (
    <footer>
        <p>© 2023 Educational Management Platform</p>
    </footer>
);

export default App;
