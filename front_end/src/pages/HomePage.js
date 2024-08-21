import React from 'react';
import '../style.css';
import 'font-awesome/css/font-awesome.min.css';

const HomePage = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="/contact_us">Contact Us</a></li>
                        <li><a href="/about">About Us</a></li>
                    </ul>
                    <div className="icons">
                        <a href="/ai-insights"><i className="fa fa-lightbulb-o"></i></a>
                        <a href="/profile"><i className="fa fa-user"></i></a>
                        <a href="/messages_dashboard"><i className="fa fa-envelope"></i></a>
                    </div>
                </nav>
                <h1>Welcome to the Educational Management Platform</h1>
            </header>
            <main>
                <section id="features">
                    <h2>Features</h2>
                    <p>Manage your entire educational journey, from course selection to communication, all in one place.</p>
                    <p><a href='https://kxc2348.uta.cloud/' target="_blank">Check out our blog here!</a></p>
                </section>
                <section id="about-us">
                    <h2>About Us</h2>
                    <p>We aim to make your educational journey smooth and efficient.</p>
                </section>
                <section id="testimonials">
                    <h2>Testimonials</h2>
                    <div className="testimonial-card">
                        <p>"This platform is a game-changer!"</p>
                        <span>- John Doe</span>
                    </div>
                    {/* Add more testimonials here */}
                </section>
                <section id="contact">
                    <h2>Contact Us</h2>
                    <p>Got a question? Feel free to <a href="mailto:support@ourplatform.com">email us</a>.</p>
                </section>
                <a href="/login" className="login-btn">Login</a>
            </main>
            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

export default HomePage;
