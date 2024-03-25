import React from "react";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function SignIn() {

    {console.log(process.env.REACT_APP_API_KEY)}
 
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.email)
        }
    })
      

    function handleSignIn(event) {
        const email = event.target.email.value;
        const password = event.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
     
    }
    return (
        
        <main className="content"> 
        <div className="signIn">
            <div className="signInBox">
                <h1> Sign in to Salinaka </h1>
                <form className="auth-form" onSubmit={handleSignIn}>
                    <label for="email">Email</label><br/>
                    <input type="text" id="email"   name="email" placeholder="Email"/><br/>
                    <label for="password">Password</label><br/>
                    <input type="password" id="password"   name="password" placeholder="password"/><br/>
                    <input type="submit"/>
                </form>
            </div>
                <div className="divider">
                    <h7>|</h7>
                    <h7>|</h7>
                    <h7>|</h7>
                    <h7>OR</h7>
                    <h7>|</h7>
                    <h7>|</h7>
                    <h7>|</h7>
                </div>
                <div className="socialmedia">
                    <button>Continue with Facebook</button>
                    <button>Continue with Google</button>
                    <button>Continue with Github</button>
                

              </div>
        </div>
        <div className="sign-up-box">
            <Link to="/signUp" >Dont have an account sign up!</Link>
        </div>
        </main>
        
    )

    }
    export default SignIn;