import React, { useState } from 'react';
import '../style.css';

const QAAudit = () => {
    const [course, setCourse] = useState('course1');
    const [comments, setComments] = useState('');

    const handleCourseChange = (e) => {
        setCourse(e.target.value);
    };

    const handleCommentsChange = (e) => {
        setComments(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit your audit data here
        console.log(`Audit for ${course} with comments: ${comments}`);
    };

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
                <h1>Course Audit</h1>
            </header>
            <main>
                <form id="audit-form" onSubmit={handleSubmit}>
                    <FormGroup
                        label="Select Course for Audit:"
                        type="select"
                        id="audit-course"
                        name="auditCourse"
                        options={['course1', 'course2']}
                        value={course}
                        onChange={handleCourseChange}
                    />
                    <Checklist label="Compliance Checklist:" items={[
                        "Are course objectives aligned with program objectives?",
                        "Is the assessment strategy effective?",
                        "Are industry standards met?"
                    ]} />
                    <FormGroup
                        label="Review Comments:"
                        type="textarea"
                        id="audit-comments"
                        name="auditComments"
                        value={comments}
                        onChange={handleCommentsChange}
                    />
                    <button type="submit">Submit Audit</button>
                </form>
            </main>
        </div>
    );
};

const FormGroup = ({ label, type, id, name, options, value, onChange }) => (
    <section className="form-group">
        <label htmlFor={id}>{label}</label>
        {type === 'select' ? (
            <select id={id} name={name} value={value} onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        ) : (
            <textarea id={id} name={name} value={value} onChange={onChange}></textarea>
        )}
    </section>
);

const Checklist = ({ label, items }) => (
    <section className="form-group">
        <label>{label}</label>
        {items.map((item, index) => <li key={index}>{item}</li>)}
    </section>
);

export default QAAudit;
