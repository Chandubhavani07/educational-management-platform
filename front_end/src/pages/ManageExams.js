import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style.css';

const ManageExams = () => {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        // Fetch exams from the API when the component mounts
        axios.get('https://jxg2714.uta.cloud/backend/exams.php')
            .then(response => {
                setExams(response.data);
            })
            .catch(error => {
                console.error('Error fetching exams:', error);
            });
    }, []);

    const removeExam = (examId) => {
        axios.delete('https://jxg2714.uta.cloud/backend/exams.php', {
            data: { id: examId }
        })
            .then(() => {
                setExams(exams.filter(exam => exam.id !== examId));
            })
            .catch(error => {
                console.error('Error deleting exam:', error);
            });
    };


    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="admin_dashboard">Dashboard</a></li>
                        <li><a href="/contact_us">Contact Us</a></li>
                        <li><a href="/about">About Us</a></li>                    </ul>
                </nav>
                <h1>Manage Exams</h1>
            </header>
            <main>
                <section className="exam-management">
                    <h2>Existing Exams</h2>
                    <ul className="exam-list">
                        {exams.map(exam => (
                            <li key={exam.id} className="exam-card">
                                <h3>{exam.examName}</h3>
                                <p><strong>Description:</strong> {exam.examDescription}</p>
                                <p><strong>Date:</strong> {exam.examDate}</p>
                                <p><strong>Total Marks:</strong> {exam.totalMarks}</p>
                                <p><strong>Duration:</strong> {exam.durationMinutes} minutes</p>
                                <button onClick={() => removeExam(exam.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>

                </section>
            </main>
            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

export default ManageExams;
