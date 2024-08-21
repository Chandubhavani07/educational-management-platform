import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';  // Added Axios import
import '../style.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');  // Added error state
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`Logging in user: ${username}`);

        // Define regular expressions for username and password validations
        const usernameRegex = /^[a-zA-Z0-9_]+$/; // Only allows letters, numbers, and underscores
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Requires at least 8 characters with at least one letter and one digit

        if (!usernameRegex.test(username)) {
            setError('Invalid username. Username can only contain letters, numbers, and underscores.');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError('Invalid password. Password must be at least 8 characters long and contain at least one letter and one digit.');
            return;
        }

        try {
            const response = await axios.post('https://wdm.jxg2714.uta.cloud/api/login', {
                username,
                password
            });

            if (response.data.message === 'Login successful') {
                console.log('user id - ' + response.data.userId);
                localStorage.setItem('userId', response.data.userId);
                setRole(response.data.role);
                setError('');  // Clear error state
            } else {
                setError('Login failed');  // Set error state
            }

        } catch (error) {
            console.error('There was an error logging in:', error);
            setError('There was an error logging in');  // Set error state
        }
    };


    useEffect(() => {
        switch (role) {
            case 'student':
                setRole('student');
                break;
            case 'professor':
                setRole('professor');
                break;
            case 'instructor':
                setRole('instructor');
                break;
            case 'qaOfficer':
                setRole('qaOfficer');
                break;
            case 'admin':
                setRole('admin');
                break;
            default:
                setRole(''); // No role for unrecognized username
        }
    }, [role]);

    useEffect(() => {
        // Redirection logic based on role
        switch (role) {
            case 'student':
                history.push('/student_dashboard');
                break;
            case 'program-coordinator':
                history.push('/program_coordinator_dashboard');
                break;
            case 'instructor':
                history.push('/instructor_dashboard');
                break;
            case 'qa-officer':
                history.push('/qa_dashboard');
                break;
            case 'admin':
                history.push('/admin_dashboard');
                break;
            default:
                break;
        }
    }, [role]);

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="about">About Us</a></li>

                    </ul>
                    <div class="icons">
                        <a href="profile"><i class="fas fa-user"></i></a>
                        <a href="messages_dashboard.html"><i class="fas fa-envelope"></i></a>
                    </div>
                </nav>
                <h1>Login</h1>
            </header>
            <main>
                <div className="login-container">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                    {/* Added error message */}
                    {error && <p className="error-message">{error}</p>}
                    <p><a href="forgot_password">Forgot Password?</a></p>
                    <p>New here? <a href="register">Sign up</a></p>
                </div>
            </main>
            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>        </div>
    );
};

export default Login;



