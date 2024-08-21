import React from 'react';
import '../style.css';

const AdminDashboard = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/admin_dashboard">Dashboard</a></li>
                        <li><a href="/contact_us">Contact Us</a></li>
                        <li><a href="/about">About Us</a></li>
                    </ul>
                    <div className="icons">
                        <a href="/ai-insights"><i className="fa fa-lightbulb-o"></i></a>
                        <a href="/profile"><i className="fa fa-user"></i></a>
                        <a href="/messages_dashboard"><i className="fa fa-envelope"></i></a>
                        <a href='/home'><i className="fa fa-sign-out"></i></a>
                    </div>
                </nav>
                <h1>Admin Dashboard</h1>
            </header>

            <main>
                <section className="admin-section">
                    <h2>Admin Actions</h2>
                    <div className="admin-actions">
                        <div className="admin-card">
                            <h3>Manage Courses</h3>
                            <button><a href="/manage_courses">Go</a></button>
                        </div>
                        <div className="admin-card">
                            <h3>Manage Users</h3>
                            <button><a href="/manage_users">Go</a></button>
                        </div>
                        <div className="admin-card">
                            <h3>Manage Exams</h3>
                            <button><a href="/manage_exams">Go</a></button>
                        </div>
                        <div className="admin-card">
                            <h3>Performance Metrics</h3>
                            <button><a href="/admin_performance_metrics">Go</a></button>
                        </div>
                        <div className="admin-card">
                            <h3>View Graphs</h3>
                            <button><a href="/admin_graphs">Go</a></button>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
}

export default AdminDashboard;
