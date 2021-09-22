import React from 'react';
import firebase from '../Auth';

const auth = firebase.auth();

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="" />
        <p>{text}</p>
      </div>
    </>)
  }

export default ChatMessage;
