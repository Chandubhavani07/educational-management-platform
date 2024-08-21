import React from 'react';
import '../style.css';

const InstructorProfile = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/instructor_dashboard">Dashboard</a></li>
                        <li><a href="/contact_us">Contact Us</a></li>
                        <li><a href="/about">About Us</a></li>
                    </ul>
                    <div className="icons">
                        <a href="/profile"><i className="fa fa-user"></i></a>
                        <a href="/messages_dashboard"><i className="fa fa-envelope"></i></a>
                        <a href='/home'><i className="fa fa-sign-out"></i></a>
                    </div>
                </nav>
                <h1>Instructor Profile</h1>
            </header>
            <main>
                <div className="profile-info">
                    {/* Insert dynamic content here like profile picture, instructor name, etc. */}
                    {/* For example: */}
                    {/* <img src={profilePic} alt="Instructor's Profile Picture" /> */}
                    {/* <h2>{instructorName}</h2> */}
                    {/* <p>{bio}</p> */}
                </div>
            </main>
            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

export default InstructorProfile;
