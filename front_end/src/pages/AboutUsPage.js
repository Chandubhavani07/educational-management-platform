import React from 'react';

import '../style.css'

const AboutUsPage = () => {
    return (
        <div class="container">
            <div className="about-us-container">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="/contact_us">Contact Us</a></li>
                            <li><a href="/about">About Us</a></li>
                        </ul>
                        <div className="icons">
                            <a href="/profile"><i className="fa fa-user"></i></a>
                            <a href="/messages_dashboard"><i className="fa fa-envelope"></i></a>
                            <a href='/home'><i className="fa fa-sign-out"></i></a>
                        </div>
                    </nav>
                    <h1>About Us</h1>
                </header>
                <main>
                    <div className="profile-info">
                        <h2>Who We Are</h2>
                        <p>We are a team of enthusiastic developers, designers, and creators who strive for excellence.</p>

                        <h2>Our Mission</h2>
                        <p>To empower people with technology that makes life easier and more enjoyable.</p>

                        <h2>Our Team</h2>
                        <li>Jane - UX Designer</li>
                        <li>John - Front-end Developer</li>
                    </div>
                </main>
                <footer>
                    © 2023 Educational Management Platform            </footer>
            </div>
        </div>

    );
}

export default AboutUsPage;
