import React from 'react';
import '../style.css';

const ChatView = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/messages_dashboard">Back to Messages</a></li>
                    </ul>
                </nav>
                <h1>Chat with Instructor John</h1>
            </header>

            <main>
                <div className="chat-container">
                    <div className="chat-message received">
                        <p>Hello, please make sure to read the guidelines before submitting your assignment.</p>
                    </div>
                    <div className="chat-message sent">
                        <p>Understood, I'll take a look at them.</p>
                    </div>
                    <div className="chat-message received">
                        <p>Great! If you have any questions, feel free to ask.</p>
                    </div>
                    <div className="chat-message sent">
                        <p>Will do, thanks!</p>
                    </div>
                </div>

                <div className="message-input">
                    <input type="text" placeholder="Type a message..." />
                    <button className="send-button">Send</button>
                </div>
            </main>
        </div>
    );
};

export default ChatView;
