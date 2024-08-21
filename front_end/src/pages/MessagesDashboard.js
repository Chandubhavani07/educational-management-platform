import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../messages.css';

const API_BASE_URL = 'http://localhost:3001';

const MessagesDashboard = () => {
    const storedUserId = localStorage.getItem('userId');
    const currentUser = storedUserId ? { user_id: parseInt(storedUserId, 10) } : null;

    const [users, setUsers] = useState([]);
    const [conversations, setConversations] = useState({});
    const [activeChat, setActiveChat] = useState(null);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        axios.get(`https://jxg2714.uta.cloud/backend/retreive_users.php`)
            .then((response) => {
                setUsers(response.data);
                initializeConversations(response.data);
            })
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    useEffect(() => {
        if (currentUser?.user_id) {
            fetchMessages(currentUser.user_id);
        }
    }, [users]);

    const initializeConversations = (usersData) => {
        const initialConversations = {};
        usersData.forEach((user) => {
            if (user.user_id !== currentUser?.user_id) {
                initialConversations[user.username] = [];
            }
        });
        setConversations(initialConversations);
    };

    const fetchMessages = (userId) => {
        axios.get(`${API_BASE_URL}/messages?userId=${userId}`)
            .then((response) => {
                updateConversations(response.data.messages);
            })
            .catch((error) => console.error('Error fetching messages:', error));
    };

    const updateConversations = (fetchedMessages) => {
        const updatedConversations = { ...conversations };
        fetchedMessages.forEach((msg) => {
            const otherUser = users.find(
                (user) => user.user_id ===
                    (msg.sender_id === currentUser.user_id ? msg.receiver_id : msg.sender_id)
            );
            if (otherUser) {
                updatedConversations[otherUser.username] =
                    updatedConversations[otherUser.username] || [];
                updatedConversations[otherUser.username].push({
                    sender: msg.sender_id === currentUser.user_id ? 'You' : otherUser.username,
                    message: msg.message_text,
                });
            }
        });
        setConversations(updatedConversations);
    };

    const handleSendMessage = () => {
        console.log("send");
        console.log("New Message:", newMessage);
        console.log("Active Chat:", activeChat);
        console.log("Current User:", currentUser);
        if (newMessage.trim() !== '' && activeChat && currentUser?.user_id) {
            console.log("Inside if condition");

            const receiver = users.find((user) => user.username === activeChat);
            console.log("Receiver found:", receiver);

            if (receiver) {
                console.log("Attempting to send message to API");

                axios.post(`${API_BASE_URL}/send-message`, {
                    sender_id: currentUser.user_id,
                    receiver_id: receiver.user_id,
                    message_text: newMessage,
                })
                    .then(() => {
                        console.log("Message sent successfully");
                        updateAfterSending(receiver);
                    })
                    .catch((error) => {
                        console.error('Error sending message:', error);
                    });
            }
        } else {
            console.log("Condition not met for sending message");
        }

        console.log("sent (but not necessarily the API call)");
    };

    const updateAfterSending = (receiver) => {
        const updatedConversations = {
            ...conversations,
            [activeChat]: [...(conversations[activeChat] || []), { sender: 'You', message: newMessage }],
        };
        setConversations(updatedConversations);
        setNewMessage('');
    };

    // JSX Rendering
    return (
        <div className="app-container">
            <header>
                <button onClick={() => window.history.back()} className="back-button">
                    &#x2190; Back
                </button>
            </header>
            <div className="main-content">
                <aside className="user-list">
                    <h2>Your Conversations</h2>
                    <div className="message-list">
                        {users.map((user, index) => (
                            <div
                                className={`message-item ${user.username === activeChat ? 'active' : ''}`}
                                key={index}
                                onClick={() => setActiveChat(user.username)}
                            >
                                <h3>{user.username}</h3>

                            </div>
                        ))}
                    </div>
                </aside>
                <section className="chat-display">
                    {activeChat ? (
                        <>
                            <h3>Chat with {activeChat}</h3>
                            <div className="chat-messages">
                                {conversations[activeChat] &&
                                    conversations[activeChat].map((msg, index) => (
                                        <p key={index} className={msg.sender === 'You' ? 'my-message' : 'other-message'}>
                                            {msg.sender}: {msg.message}
                                        </p>
                                    ))}
                            </div>
                            <div className="message-input">
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Type a message"
                                />
                                <button onClick={handleSendMessage}>Send</button>
                            </div>
                        </>
                    ) : (
                        <p>Select a conversation to start chatting</p>
                    )}
                </section>
            </div>
        </div>
    );
};

export default MessagesDashboard;
