import React from 'react';
import firebase from '../Auth';

const auth = firebase.auth();

function SignIn(){

    const signInWithGoogle = () =>{
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <div>
          <button className="sign-in btn btn-block btn-social btn-google" onClick={signInWithGoogle}>
            <i class="fab fa-google"></i>
              Sign In with Google
          </button>
        <p className="guide">Do not violate the community guidline or else you will be banned for eternity!</p>
      </div>
    );
  }

export default SignIn;
