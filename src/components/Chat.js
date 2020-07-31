import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from "socket.io-client";
import Messages from './Messages';
import Input from './Input';
import botIcon from './botIcon.png';

import '../styles/Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://localhost:8000/';

    useEffect(() => {
        const { name } = queryString.parse(location.search);
    
        socket = io(ENDPOINT);
        setName(name);
    
        socket.emit('join', { name }, (error) => {
          if(error) {
            alert(error);
          }
        });
      }, [ENDPOINT, location.search]);
    
    useEffect(() => {
      socket.on('message', message => {
        setMessages(messages => [ ...messages, message ]);
      });
    }, []);

    const sendMessage = (event) => {
      event.preventDefault();
    
      if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));        
      }
    };

    const askChatty = (event) => {
      event.preventDefault();
    
      if(message) {
        socket.emit('askChatty', message, () => setMessage(''));        
      }
    };

    return (
      <>
      <div class='container1'>
        <div class='container2'>
          <img src={botIcon} alt='Bot' width="60" height="60"/>
        </div>	
        <div class='container3'>
          <h2>Wi∂getSDK Care</h2>
        </div>
      </div>
        <div className="outerContainer">
            <div className="container">
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} askChatty={askChatty}  />
            </div>
        </div>
        </>
    );
};

export default Chat;

