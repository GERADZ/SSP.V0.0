




// -------------------------------------------------</decoration --------------------------------------------



document.getElementById("facebookButton").addEventListener("click", function() {
    window.location.href = 'https://www.facebook.com/abdeldjabar.bellakhdar.3';
});

document.getElementById("instaButton").addEventListener("click", function() {
    window.location.href = 'https://www.instagram.com/abdeldjabar6918/?hl=en';
});

document.getElementById("tweetButton").addEventListener("click", function() {
    window.location.href = 'https://www.facebook.com/abdeldjabar.bellakhdar.3';
});

document.getElementById("linkdButton").addEventListener("click", function() {
    window.location.href = 'https://www.linkedin.com/in/abdeldjabar-bellakhdar-2b480a1a9/';
});















let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};























let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let heihgt = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heihgt){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');

            });

        };

    });



let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);







menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');




};



















ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading ,header ,.up-cv ', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ,.content-cv ,.logo_P', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1,.scrol_row_bg ,.logo_G', { origin: 'left'});
ScrollReveal().reveal('.home-content p,.logo_D', { origin: 'right'});













 


const typed = new Typed('.multiple-text',{
    strings: ['(Solar Site Assessment)','(SSP)','(GERA)'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true


});

















// -------------------------------------------------</decoration --------------------------------------------







// ... Firebase initialization and user data display code ...

// Import Firebase Modular SDK
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgGXJoqe-stLcxVS7uERM6l3SOtu1Ez5Y",
            authDomain: "gera-6e9ee.firebaseapp.com",
            projectId: "gera-6e9ee",
            storageBucket: "gera-6e9ee.appspot.com",
            messagingSenderId: "331888265233",
            appId: "1:331888265233:web:22f3ec6417d6b8ff3a49b0",
            databaseURL: "https://gera-6e9ee-default-rtdb.firebaseio.com/" // Make sure this is correct

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);



// ...------</Firebase initialization and user data display code ...









// -------------------------------------------------<Display user data on the profile page---------

// Check if a user is signed in
const errorPage = document.getElementById("message-not-available");
const servisErro =document.getElementById("servisError");

const servicesContainer = document.getElementById("seccontainer");
const accountInformation = document.getElementById("accountINFO");
const aboutSC = document.getElementById("about");
const contactSC = document.getElementById("contact");
const navbarSC =document.getElementById("navbarid");




auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        const userName = user.displayName;
        const userEmail = user.email; 

        // Display user data on the profile page
        document.getElementById("user-name").textContent =  userName;
        document.getElementById("user-email").textContent =   userEmail;

        // Show the services container
        errorPage.style.display ="none";
        servisErro.style.display="none";

        
    } else {
        // User is not signed in, hide the services container
        servicesContainer.style.display = "none";
        accountInformation.style.display="none";
        aboutSC.style.display="none";
        contactSC.style.display="none";
        navbarSC.style.display="none";
        errorPage.style.display ="block";
        servisErro.style.display="block";

    }
});

// -------------------------------------------------</Display user data on the profile page---------








// -------------------------------------------------</add data ---------


const SavedData = document.getElementById("SavedData");

SavedData.addEventListener("click", () => {

    window.location.href = "addDataUser.html";

});

// -------------------------------------------------</creat project ---------


const CreateProject = document.getElementById("CreateProject");

CreateProject.addEventListener("click", () => {

    window.location.href = "creartProject.html";

});










// -------------------------------------------------<logout --------------------------------------------

// ... Firebase initialization and user data display code ...

// Get a reference to the logout button
const logoutButton = document.getElementById("logout-button");

// Add an event listener to the logout button
logoutButton.addEventListener("click", () => {
    // Sign out the user
    auth.signOut().then(() => {
        // Sign-out successful, redirect to the login page
        window.location.replace("loginRegister.html");
    }).catch((error) => {
        console.error("Error signing out:", error);
        // Handle sign-out error if needed
    });
});
// -------------------------------------------------</logout --------------------------------------------











const SendMessage = document.getElementById("SendMessage")
SendMessage.addEventListener('click',() =>{
    auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        const userNamee = user.displayName;
        const userEmail = user.email;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abdeldjabarportfolio@gmail.com",
        Password : "F23FF9C5884BB101841AB262DC6AB2A5AC26",
        To : 'abdeldjabarbellakhdar69@gmail.com',
        From : 'abdeldjabarportfolio@gmail.com',
        Subject : document.getElementById('email-sub').value,
        Body : "namFull Name : "+document.getElementById('Name').value
        +"<br> phone : "+document.getElementById('mobilenumber').value
        +"<br> Email-subject : "+ document.getElementById('email-sub').value
        +"<br> Email : <br> "+document.getElementById('message').value
        +"<br> -------------------account info ----------------------- "
        +"<br> user name : "+ userNamee 
        +"<br> user name : "+ userEmail


    }) .then(
      message => alert(message)
    ); 
  }});
}) 
