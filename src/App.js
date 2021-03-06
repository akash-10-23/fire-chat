
import React from 'react';
import './App.css';

//Required Hooks
import {useAuthState} from 'react-firebase-hooks/auth';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';
import firebase from './Auth';

const auth = firebase.auth();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>🔥 Fire Chat 🔥</h1>
        <SignOut/>  
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
