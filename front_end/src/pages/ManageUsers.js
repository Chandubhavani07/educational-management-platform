import '../style.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jxg2714.uta.cloud/backend/admin.php')
            .then(response => setUsers(response.data.users))
            .catch(error => console.error('Error fetching users:', error));
    }, []);


    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="admin_dashboard">Dashboard</a></li>
                        <li><a href="contact_us">Contact Us</a></li>
                        <li><a href="about">About Us</a></li>

                    </ul>
                </nav>
                <h1>Manage Users</h1>
            </header>

            <main>
                <section className="user-management">
                    <h2>Existing Users</h2>
                    <ul className="user-list">
                        {users.map(user => (
                            <li key={user.user_id}>
                                <div className="user-card">
                                    <h3>{`${user.firstname} ${user.lastname}`} - {user.role}</h3>
                                    <p>Email: {user.email}</p>
                                    <p>Role: {user.role}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

export default ManageUsers;
