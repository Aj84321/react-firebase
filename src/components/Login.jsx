import React, { useEffect, useState } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    // Handle login
    const loginAccount = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const loggedInUser = userCredentials.user;
                setUser(loggedInUser);
            })
            .catch((error) => {
                console.error("Error logging in:", error);
            });
    };

    // Handle logout
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                console.log("Signed out");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Listen to authentication state changes
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <form onSubmit={loginAccount}>
                <h2>Log In</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {user ? (
                <>
                    <p>Welcome, {user.email}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <p>You are not logged in</p>
            )}
        </div>
    );
}
