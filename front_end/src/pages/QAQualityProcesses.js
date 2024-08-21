import React from 'react';
import '../style.css';

const QAQualityProcesses = () => {
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
                <h1>Quality Processes</h1>
            </header>

            <main>
                {/* Overview Section */}
                <section id="overview">
                    <h2>Overview</h2>
                    <p>Find everything you need to understand the intricacies of Quality Assurance policies here.</p>
                </section>

                {/* Compliance Matrix Article */}
                <article id="compliance-matrix">
                    <h2>Compliance Matrix</h2>
                    <p>We track various KPIs to evaluate performance.</p>
                    <div id="compliance-chart">
                        {/* Insert your favorite chart library here */}
                    </div>
                </article>

                {/* FAQ Article */}
                <article id="faqs">
                    <h2>Frequently Asked Questions</h2>
                    <FAQItem question="What is the purpose of QA policies?" answer="QA policies are designed to uphold the quality and standards of academic programs." />
                    <FAQItem question="How often are QA audits conducted?" answer="QA audits are usually conducted bi-annually but can vary depending on the program." />
                    <FAQItem question="Who oversees the implementation of QA policies?" answer="The Quality Assurance Officer, in collaboration with administrators and Program Coordinators, oversees the implementation." />
                </article>
            </main>

            {/* Footer... also candidate for a reusable component */}
            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

// Created a reusable FAQItem component for semantic clarity
const FAQItem = ({ question, answer }) => (
    <dl>
        <dt>{question}</dt>
        <dd>{answer}</dd>
    </dl>
);

export default QAQualityProcesses;
