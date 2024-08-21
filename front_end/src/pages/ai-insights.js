import React, { useState } from 'react';
import axios from 'axios';
import '../style.css';
const AIInsightsPage = () => {
    const [question, setQuestion] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const result = await axios.post('https://jxg2714.uta.cloud/backend/generative-ai.php', { question });
            const message = result.data.response.choices[0].message.content;
            setResponseMessage(message);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            setResponseMessage('Error fetching response. Please try again.');
        }
        setIsLoading(false);
    };
    return (
        <div>
            <header>
                <button onClick={() => window.history.back()} className="back-button">
                    &#x2190; Back
                </button>            </header>
            <main className="ai-insights-container">
                <h2>AI Insights</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="questionInput">Ask a Question:</label>
                    <textarea
                        id="questionInput"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Type your question here..."
                    />
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Submit'}
                    </button>
                </form>
                <div className="response-container">
                    {responseMessage && <><h3>Response:</h3><p>{responseMessage}</p></>}
                </div>
            </main>
            <footer>
                {/* ... existing footer ... */}
            </footer>
        </div>
    );
};

export default AIInsightsPage;
