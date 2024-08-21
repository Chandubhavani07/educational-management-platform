import React from 'react';
import '../style.css'; // Make sure this path is correct!

const StudentProfile = () => {
    return (
        <>
            <header>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="/student_dashboard">Dashboard</a></li>
                    <li><a href="/contact_us">Contact Us</a></li>
                </ul>
                <h1>Student Profile</h1>
            </header>
            <main>
                <div className="profile-info">
                    {/* Insert profile information here */}
                </div>
            </main>
            <footer>
                <p>© 2023 Your Platform</p>
            </footer>
        </>
    );
};

export default StudentProfile;
