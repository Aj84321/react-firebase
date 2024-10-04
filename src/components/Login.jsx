import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState('');

    const loginAccount = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((userCredentials) =>{
          console.log(userCredentials)
        const loggedInUser = userCredentials.user;
        setUser(loggedInUser)
        })

    }
  return (
    <div>
        <form onSubmit={loginAccount}>
        <h2>Log In</h2>
        <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type='submit'>Login</button>
        </form>
        {user ? (
                <p>Welcome, {user.email}</p>
            ) : (
                <p>You are not logged in</p>
            )}
        </div>
  )
}
