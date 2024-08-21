import React from 'react';
import '../style.css'; // Update the import path if needed

const StudentUpcomingExams = () => {
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
                <h1>Time to Test Your Mettle!</h1>
            </header>
            <main>
                <section className="exams-section" id="upcoming-exams-list">
                    <h2>Upcoming Exams</h2>
                    <div className="exam-list">
                        {/* The following exam-card can be mapped from a data array later on */}
                        <div className="exam-card">
                            <h3>Data Structures - Midterm</h3>
                            <p>Date: October 5, 2023</p>
                            <p>Time: 2:00 PM</p>
                            <p>Duration: 2 hours</p>
                            <p>Topics Covered: Arrays, Linked Lists, Queues, Stacks</p>
                            <p>Instructions: Closed book, no calculators</p>
                            <div className="countdown" id="countdown1">Time left: 2 days<span></span></div>
                            <button className="take-exam-button">Take Exam</button>
                        </div>
                        {/* ... You can add more cards here */}
                    </div>
                </section>
            </main>
            <footer>
                <p>© 2023 Educational Management Platform. Forging Champions.</p>
            </footer>
        </>
    );
};

export default StudentUpcomingExams;
