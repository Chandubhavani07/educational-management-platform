import React from 'react';
import '../style.css';

const StudentExamManagement = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Upcoming Exams */}
        <DashboardCard
          title="Upcoming Exams"
          description="Brace yourself, exams are coming. Click to get all prepped up."
          link="student_upcoming_exams"
          linkText="View Exams"
        />

        {/* Past Exams */}
        <DashboardCard
          title="Past Exams"
          description="Where you crushed it and where you got crushed. Click for a trip down memory lane."
          link="student_past_exams"
          linkText="Learn More"
        />

        {/* Exam Resources */}
        <DashboardCard
          title="Exam Resources"
          description="The armory for your academic warfare. Click to arm yourself."
          link="student_exam_resources"
          linkText="Learn More"
        />

        {/* Provide Exam Feedback */}
        <DashboardCard
          title="Provide Exam Feedback"
          description="Your feedback helps to make the education better."
          link="student_exam_feedback"
          linkText="Provide feedback"
        />
      </main>
      <footer>
        <p>© 2023 Educational Management Platform</p>
      </footer>
    </div>
  );
};

const DashboardCard = ({ title, description, link, linkText }) => (
  <section className="dashboard-card">
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={link}>{linkText}</a>
  </section>
);
const Header = () => (
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
);

export default StudentExamManagement;
