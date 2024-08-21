import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../style.css';

const UserProfile = () => {
    const [userData, setUserData] = useState({
        username: '',
        firstname: '',
        lastname: '',
        mobile: '',
        email: '',
        dob: ''
    });
    const [originalData, setOriginalData] = useState({});
    const history = useHistory();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        console.log("userid - " + userId)
        if (userId) {
            axios.get(`https://jxg2714.uta.cloud/backend/profile.php?user_id=${userId}`)
                .then(response => {
                    const { data } = response;
                    if (data && typeof data === 'object') {
                        setUserData(data);
                        setOriginalData(data); // Store original data for comparison later
                    }
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);

    const editProfile = () => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            const updatedData = Object.keys(userData).reduce((data, key) => {
                if (userData[key] !== originalData[key]) {
                    data[key] = userData[key];
                }
                return data;
            }, {});

            if (Object.keys(updatedData).length === 0) {
                alert('No changes were made.');
                return;
            }

            axios.put(`https://jxg2714.uta.cloud/backend/profile.php?user_id=${userId}`, updatedData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    alert('Profile updated successfully');
                    setOriginalData(userData);
                })
                .catch(error => {
                    console.error('Error updating profile:', error);
                });
        }
    };

    const navigateBack = () => {
        history.goBack();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                    <div className="icons">
                        <a href="/profile"><i className="fa fa-user"></i></a>
                        <a href="/messages_dashboard"><i className="fa fa-envelope"></i></a>
                        <a href='/home'><i className="fa fa-sign-out"></i></a>
                    </div>
                </nav>
                <h1>Welcome to the Educational Management Platform</h1>
            </header>
            <main>
                <div className="profile-container">
                    <h1>User Profile</h1>
                    <div className="profile-info">
                        {Object.keys(userData).map((key, index) => (
                            <div key={index}>
                                <label>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</label>
                                <input
                                    type="text"
                                    name={key}
                                    value={userData[key]}
                                    onChange={handleChange}
                                    className="profile-input"
                                />
                            </div>
                        ))}
                    </div>
                    <button type="button" className="edit-btn" onClick={editProfile}>Save Changes</button>
                    <button type="button" className="back-btn" onClick={navigateBack}>Go Back</button>
                </div>
            </main>
            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

export default UserProfile;
