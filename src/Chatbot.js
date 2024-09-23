import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      const newMessage = { user: 'user', text: input };
      setMessages([...messages, newMessage]);
      setInput('');
      
      // Simulate a bot response after a delay
      setTimeout(() => {
        const botMessage = { user: 'bot', text: getBotResponse(input) };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 1000);
    }
  };

  const getBotResponse = (userInput) => {
    // Here you can define bot's response logic
    if (userInput.toLowerCase().includes('hello')) {
      return 'Hello! How can I assist you today?';
    } else if (userInput.toLowerCase().includes('portfolio')) {
      return 'You can find my portfolio information here!';
    } else {
      return 'Sorry, I didn’t understand that. Can you please rephrase?';
    }
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.user === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.user === 'user' ? '#e0e0e0' : '#007bff',
              color: msg.user === 'user' ? '#000' : '#fff',
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          placeholder="Type a message..."
        />
        <button onClick={handleSend} style={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  chatContainer: {
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '400px',
  },
  messagesContainer: {
    flex: 1,
    overflowY: 'auto',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  message: {
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '10px',
    maxWidth: '80%',
    wordWrap: 'break-word',
  },
  inputContainer: {
    display: 'flex',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  sendButton: {
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ChatBot;
