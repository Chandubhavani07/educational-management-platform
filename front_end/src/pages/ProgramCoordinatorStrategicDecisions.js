import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style.css';
import { Link } from 'react-router-dom';

const StrategicDecisions = () => {
    const [programTitle, setProgramTitle] = useState('');
    const [programDirection, setProgramDirection] = useState({});
    const [risks, setRisks] = useState([]);
    const [stakeholderFeedback, setStakeholderFeedback] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({
        programName: '',
        futureVision: '',
        currentObjective: '',
        highRisk: '',
        mediumRisk: '',
        lowRisk: '',
        stakeholderFeedback: ''
    });

    useEffect(() => {
        axios.get('https://jxg2714.uta.cloud/backend/strategic_decisions.php')
            .then(response => {
                const data = response.data[0]; // Assuming the API returns an array and you want the first object
                setProgramDirection({
                    'Future Vision': data.future_vision,
                    'Current Objective': data.current_objective
                });
                setRisks([
                    { level: 'High Risk', description: data.high_risk },
                    { level: 'Medium Risk', description: data.medium_risk },
                    { level: 'Low Risk', description: data.low_risk }
                ]);
                setStakeholderFeedback([
                    { comment: JSON.parse(data.stakeholder_feedback.split("-")[0]), author: data.stakeholder_feedback.split("-")[1] }
                ]);
                setProgramTitle(data.program_name);
            })
            .catch(error => {
                console.error('There was an error fetching the data:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(`Course: ${selectedCourse}, Findings: ${findings}`);
        console.log('formData', formData);
        
        try {
            const reqBody = {
                ...formData,
                id: 1
            };
            console.log('reqBody', reqBody);
            const { data: putData } = await axios.put('https://jxg2714.uta.cloud/backend/strategic_decisions.php', reqBody)
            alert('Startegic decisions updated successfully');
            console.log('Response:', putData);
        } catch (err) {
            alert('Failed to update startegic decisions');
            console.log('Error:', err);
        }  
    };

    const toggleForm = (e) => {
        setShowForm(!showForm);
    }

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
                <h1>Strategic Decisions</h1>
            </header>
            <main>
                <h2>{programTitle}</h2>
                <Section title="Program Direction" content={programDirection} />
                <RiskSection title="Risk Assessment" risks={risks} />
                <FeedbackSection title="Stakeholder Feedback" feedbacks={stakeholderFeedback} />
                <button id="update-decisions" onClick={toggleForm}>Update Decisions</button>
            </main>
            <div className='strategic-form'>
                {showForm ? (
                    <form id="strategic-form" onSubmit={handleSubmit}>
                    <label htmlFor="programName">Enter program name:</label>
                    <textarea id="programName" name="programName" onChange={handleChange}></textarea>
                    <label htmlFor="futureVision">Enter future vision:</label>
                    <textarea id="futureVision" name="futureVision" onChange={handleChange}></textarea>

                    <label htmlFor="currentObjective">Enter current objective:</label>
                    <textarea id="currentObjective" name="currentObjective" onChange={handleChange}></textarea>

                    <label htmlFor="highRisk">Enter problems of high risk:</label>
                    <textarea id="highRisk" name="highRisk" onChange={handleChange}></textarea>

                    <label htmlFor="mediumRisk">Enter problems of medium risk:</label>
                    <textarea id="mediumRisk" name="mediumRisk" onChange={handleChange}></textarea>

                    <label htmlFor="lowRisk">Enter problems of low risk:</label>
                    <textarea id="lowRisk" name="lowRisk" onChange={handleChange}></textarea>

                    <label htmlFor="stakeholderFeedback">Enter stakeholder feedback:</label>
                    <textarea id="stakeholderFeedback" name="stakeholderFeedback" onChange={handleChange}></textarea>

                    <button type="submit">Submit strategic decisions</button>
                </form>
                ) : <></>}
                
            </div>
            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

const Section = ({ title, content }) => (
    <section id={title.toLowerCase().replace(/ /g, '-')}>
        <h2>{title}</h2>
        {Object.entries(content).map(([key, value]) => (
            <p key={key}><strong>{key}:</strong> {value}</p>
        ))}
    </section>
);

const RiskSection = ({ title, risks }) => (
    <section id={title.toLowerCase().replace(/ /g, '-')}>
        <h2>{title}</h2>
        {risks.map((risk, index) => (
            <li key={index}><strong>{risk.level}:</strong> {risk.description}</li>
        ))}
    </section>
);

const FeedbackSection = ({ title, feedbacks }) => (
    <section id={title.toLowerCase().replace(/ /g, '-')}>
        <h2>{title}</h2>
        {feedbacks.map((feedback, index) => (
            <blockquote key={index}>
                {`"${feedback.comment}" - ${feedback.author}`}
            </blockquote>
        ))}
    </section>
);

export default StrategicDecisions;
