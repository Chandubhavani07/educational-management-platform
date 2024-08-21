import React from 'react';
import '../style.css';

const Services = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                    <div className="icons">
                        <a href="/profile"><i className="fas fa-user"></i></a>
                        <a href="/messages"><i className="fas fa-envelope"></i></a>
                        <a href='home'><i className="fa fa-sign-out"></i></a>
                    </div>
                </nav>
                <h1>Services</h1>
            </header>

            <main>
                <div className="services-info">
                    {/* Insert your dynamic services data here */}
                </div>
            </main>

            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

export default Services;
