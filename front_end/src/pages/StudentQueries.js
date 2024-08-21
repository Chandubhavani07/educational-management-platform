import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style.css'; // Update this path if needed

const StudentQueries = () => {
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        axios.get('https://jxg2714.uta.cloud/backend/queries.php')
            .then(response => {
                setQueries(response.data);
            })
            .catch(error => {
                console.error('API Error:', error);
            });
    }, []);

    const resolvedQueries = queries.filter(q => q.status !== 'Open');
    const pendingQueries = queries.filter(q => q.status === 'Open');

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="program_coordinator_dashboard">Dashboard</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                    <div className="icons">
                        <a href="profile"><i className="fa fa-user"></i></a>
                        <a href="messages_dashboard"><i className="fa fa-envelope"></i></a>
                        <a href='home'><i className="fa fa-sign-out"></i></a>
                    </div>
                </nav>
                <h1>Student Queries</h1>
            </header>

            <main>
                <section id="query-overview">
                    <h2>Query Overview</h2>
                    <p>Total Queries: {queries.length}</p>
                    <p>Resolved: {resolvedQueries.length}</p>
                    <p>Pending: {pendingQueries.length}</p>
                </section>

                <section id="query-list">
                    <h2>Recent Queries</h2>
                    {queries.map((query, index) => (
                        <li key={index}>
                            User {query.user_id} - "{query.query}"
                        </li>
                    ))}
                </section>

                <section id="action-items">
                    <h2>Action Items</h2>
                    {pendingQueries.map((query, index) => (
                        <li key={index}>
                            Follow-up with User {query.user_id} about "{query.query}".
                        </li>
                    ))}
                </section>

                <button id="resolve-queries">Resolve Queries</button>
            </main>
        </>
    );
};

export default StudentQueries;
