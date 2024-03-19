import React from "react";
import { Link } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhV9GvYGoGWfN4qWHCbwJXYdm5j7X399g",
  authDomain: "ecommerce-47eb5.firebaseapp.com",
  projectId: "ecommerce-47eb5",
  storageBucket: "ecommerce-47eb5.appspot.com",
  messagingSenderId: "438536251100",
  appId: "1:438536251100:web:9920c482f9b8cbf914f619",
  measurementId: "G-NVQFYM1Q11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);






   
        

        function SignUp() {

            function handleSignUp(event) {
                event.preventDefault();
                const email = event.target.email.value;
                const password = event.target.password.value;
            
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch ((error) => {
                const errorCode = error.code;
                const errorMesssage = error.message;
            });
        }
        
            return (
                
                <main className="content"> 
                <div className="signIn">
                    <div className="signInBox">
                        <h1> Sign in to Salinaka </h1>
                        <form className="auth-form" onSubmit={handleSignUp}>
                            <label for="fullname">Full Name</label><br/>
                            <input type="text" id="fullname"   name="fullname" placeholder="John Doe"/><br/>
                            <label for="email">Email</label><br/>
                            <input type="text" id="email"   name="email" placeholder="test@example.com"/><br/>
                            <label for="password">Password</label><br/>
                            <input type="password" id="password"   name="password" placeholder="Your Password"/><br/>
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
                    <Link to="/signIn">Already have an account? sign in!</Link>
                </div>
                </main>
                
            )
        
            }
           
    

    
    export default SignUp;