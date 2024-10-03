import React, { useState } from 'react'

export default function Create() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const createAccount = (e) =>{
        e.preventDefault()

    }
  return (
    <div>
        <form onSubmit={createAccount}>
        <h2>Create a New Account</h2>
        <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type='submit'>Create</button>


        </form>
        </div>
  )
}
