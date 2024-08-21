import React from 'react';
import '../style.css';

const StudentExamResources = () => {
    const examResourceData = [
        {
            title: 'Data Structures - Study Guide',
            format: 'PDF',
            pages: '50',
            description: 'A comprehensive guide covering Arrays, Linked Lists, Queues, and Stacks.'
        },
        // You can add more resource data objects here
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
                <section className="exam-resources-section" id="exam-resources-list">
                    <h2>Exam Resources</h2>
                    <div className="exam-resource-list">
                        {examResourceData.map((resource, index) => (
                            <ExamResourceCard key={index} resource={resource} />
                        ))}
                    </div>
                </section>
            </main>

            <footer>
                <p>© 2023 Educational Management Platform. Forging Champions.</p>
            </footer>
        </div>
    );
};

const ExamResourceCard = ({ resource }) => {
    const { title, format, pages, description } = resource;
    return (
        <div className="exam-resource-card">
            <div className="exam-resource-content">
                <div className="exam-resource-row">
                    <div className="exam-resource-title">{title}</div>
                    <div className="exam-resource-info">
                        <ResourceInfoRow keyName="Format" value={format} />
                        <ResourceInfoRow keyName="Pages" value={pages} />
                        <ResourceInfoRow keyName="Description" value={description} />
                    </div>
                </div>
            </div>
            <button className="download-resource-button">Download</button>
        </div>
    );
};

const ResourceInfoRow = ({ keyName, value }) => (
    <div className="exam-resource-row">
        <div className="exam-resource-key">{keyName}:</div>
        <div className="exam-resource-value">{value}</div>
    </div>
);

export default StudentExamResources;
