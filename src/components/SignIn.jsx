import React from "react";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDhV9GvYGoGWfN4qWHCbwJXYdm5j7X399g",
    authDomain: "ecommerce-47eb5.firebaseapp.com",
    projectId: "ecommerce-47eb5",
    storageBucket: "ecommerce-47eb5.appspot.com",
    messagingSenderId: "438536251100",
    appId: "1:438536251100:web:9920c482f9b8cbf914f619",
    measurementId: "G-NVQFYM1Q11"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function SignIn() {

    
 
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