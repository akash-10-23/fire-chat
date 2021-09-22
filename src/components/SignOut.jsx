import React from 'react';
import firebase from '../Auth';

const auth = firebase.auth();

function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }

export default SignOut;
