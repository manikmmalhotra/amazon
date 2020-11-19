import { Link,useHistory } from "react-router-dom"
import React, { useState } from 'react'
import "./Login.css"
import { auth } from "./firebase";

function Login() {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email,password).then((auth) => {
    
                history.push('/')
            
        }).catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            console.log(auth);
            if(auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img    className="login__logo" src="https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="login__signinbutton" type='submit' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing in you agree the Terms and Conditions of the Amazon fake
                    clone. Please see our privacy notice and out cookies policy
                </p>
                <button className="login__registerbutton" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
