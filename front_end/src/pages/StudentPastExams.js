import React from 'react';
import '../style.css'; // Importing your style here, assuming it lives there.

const PastExams = () => {
    const pastExamData = [
        {
            title: 'Data Structures - Midterm',
            date: 'March 15, 2023',
            score: '85/100'
        },
    ];

    return (
        <div>
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
            </header>

            <main>
                <section className="past-exams-section" id="past-exams-list">
                    <h2>Past Exams</h2>
                    <div className="past-exam-list">
                        {pastExamData.map((exam, index) => (
                            <PastExamCard key={index} exam={exam} />
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

const PastExamCard = ({ exam }) => {
    const { title, date, score } = exam;
    return (
        <div className="past-exam-card">
            <h3>{title}</h3>
            <p>Date: {date}</p>
            <p>Score: {score}</p>
            {/* <button className="review-exam-button">Review Exam</button> */}
        </div>
    );
};

export default PastExams;
