// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgGXJoqe-stLcxVS7uERM6l3SOtu1Ez5Y",
    authDomain: "gera-6e9ee.firebaseapp.com",
    projectId: "gera-6e9ee",
    storageBucket: "gera-6e9ee.appspot.com",
    messagingSenderId: "331888265233",
    appId: "1:331888265233:web:22f3ec6417d6b8ff3a49b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get form elements
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginSpinner = document.getElementById("login-spinner");
const loginMessage = document.getElementById("login-message");

// Add a submit event listener to the login form
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Show the spinner while login is in progress
    loginSpinner.style.display = "block";
    loginMessage.style.display = "none"; // Hide any previous messages

    const email = loginEmail.value;
    const password = loginPassword.value;

    try {
        // Sign in with email and password
        await signInWithEmailAndPassword(auth, email, password);
        

        // Display a success message
        loginMessage.innerText = "Login was successful!";
        loginMessage.classList.remove("error");
        loginMessage.classList.add("success");
            window.location.replace("tttttt home page.html");

    } catch (error) {
        // Display an error message
        loginMessage.innerText = "Login failed. Error: " + error.message;
        loginMessage.classList.remove("success");
        loginMessage.classList.add("error");
    } finally {
        // Hide the spinner when the login process is completed (success or failure)
        loginSpinner.style.display = "none";
        loginMessage.style.display = "block"; // Show the message
    }
});























