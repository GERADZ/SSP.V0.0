

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore, setDoc, getDocs, getDoc, doc, collection, addDoc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// Initialize Firebase (use your own Firebase configuration)
const firebaseConfig = {
apiKey: "AIzaSyBgGXJoqe-stLcxVS7uERM6l3SOtu1Ez5Y",
authDomain: "gera-6e9ee.firebaseapp.com",
projectId: "gera-6e9ee",
storageBucket: "gera-6e9ee.appspot.com",
messagingSenderId: "331888265233",
appId: "1:331888265233:web:22f3ec6417d6b8ff3a49b0"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const collectionName = "users"; // Specify the collection name where you want to store user data
const db = getFirestore(app);


let selectedSite1 = [];
const servisError= document.getElementById("servisError")
const datainputID= document.getElementById("datainputID")





auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        const userName = user.displayName;
        const userEmail = user.email; 

        // Display user data on the profile page
        document.getElementById("user-name").textContent =  userName;
        document.getElementById("user-email").textContent =   userEmail;

        // Show the services container
        servisError.style.display ="none";
        datainputID.style.display="block";

        
    } else {

        // Display user data on the profile page
        document.getElementById("user-name").textContent =  "ERROR";
        document.getElementById("user-email").textContent =   "ERROR";

        // User is not signed in, hide the services container
        datainputID.style.display = "none";
        servisError.style.display="block";
    }
});




















// -----------------select-select-select -------------------)



const creat_successfully= document.getElementById("creat_successfully")
const selcet_erroText= document.getElementById("selcet_erroText")

const siteEdit= document.getElementById("site_edit")
const data_edit= document.getElementById("data_edit")


document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    // For example, if you're trying to add an event handler to an element with an ID 'myButton':
    const next_SaveData = document.getElementById("next_SaveData");
    if (next_SaveData) {
        next_SaveData.onclick = function () {


    var selectedValue = document.getElementById("mySelect").value;

    
    if (selectedValue === "option0") {

        selcet_erroText.style.display = "block";
        setTimeout(() => {
            selcet_erroText.style.display = "none";
             }, 3000);
    }
    if (selectedValue === "option1") {

        siteEdit.style.display = "block";
        setTimeout(() => {
            siteEdit.style.display = "none";
             }, 2000);
        setTimeout(() => {
            window.location.replace("addData_site.html");
        }, 2200);

    }
    if (selectedValue === "option2") {

        data_edit.style.display = "block";
        setTimeout(() => {
            data_edit.style.display = "none";
             }, 2000);
        setTimeout(() => {
            window.location.replace("addData_BDD.html");
        }, 2200);
    }
      };
    }
  });
  


  











// -----------------site option-------------------)



 document.addEventListener('DOMContentLoaded', function () {
    const Checkbox_SIte = document.getElementById('Checkbox_SIte');
    const location_input = document.getElementById('location_input');
    const location_label = document.getElementById('location_label');
    const location_i = document.getElementById('location_i');
    const mySelect_Site = document.getElementById('mySelect_Site');
    const save_site_info = document.getElementById('save_site_info');
    const edit_site_info = document.getElementById('edit_site_info');
    const delet_site_info = document.getElementById('delet_site_info');




    Checkbox_SIte.addEventListener('change', function () {


        if (Checkbox_SIte.checked) {
   

            delet_site_info.style.display = "block";
            edit_site_info.style.display = "block";
            save_site_info.style.display = "none";




            mySelect_Site.disabled = false;
            location_input.disabled = true;
            location_label.disabled = true;
            location_i.disabled = true;

            location_label.style.color = 'var(--text-color-disable)';
            location_i.style.color = 'var(--text-color-disable)';

            mySelect_Site.style.boxShadow = '';
            mySelect_Site.style.color = '';

            location_input.value = '';

        } 
        else{
           
            delet_site_info.style.display = "none";
            edit_site_info.style.display = "none";
            save_site_info.style.display = "block";
            




            
            location_label.style.color = '';
            location_i.style.color = '';

            mySelect_Site.style.boxShadow = '0 0 0.7rem var(--bg-color)';
            mySelect_Site.style.color = 'var(--text-color-disable)';



            mySelect_Site.disabled = true;
            location_input.disabled = false;
            location_label.disabled = false;
            location_i.disabled = false;

            mySelect_Site.value= 'option0';


        }

    });

});




const delet_site_info= document.getElementById("delet_site_info")
const edit_site_info= document.getElementById("edit_site_info")
const mySelect_Site = document.getElementById('mySelect_Site');                          
const location_input = document.getElementById('location_input');
const longitude_input= document.getElementById("longitude_input")
const Latitude_input= document.getElementById("Latitude_input")
const wpr = document.getElementById("wapper");


// -----------------latitude & longutude exported automaticlly-------------------)

var map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var marker = null;  // Initialize a variable to store the marker

map.on('click', function(e) {
    var latitude = e.latlng.lat;
    var longitude = e.latlng.lng;
    longitude_input.value = `${longitude}`;
    Latitude_input.value = `${latitude}`;

    if (marker) {
        // If a marker exists, remove it
        map.removeLayer(marker);

    }

    marker = L.marker([latitude, longitude]).addTo(map)
        .bindPopup('Latitude: ' + latitude + '<br>Longitude: ' + longitude)
        .openPopup();
     map.flyTo([latitude, longitude], 14, {
            duration: 2  // Adjust the duration (in seconds) for the animation as needed
    });

});







// -----------------latitude & longutude inported  by edit -------------------)



        // Function to populate the selector with sites from Firestore
     
        function populateSiteSelector() {
            auth.onAuthStateChanged(async (user) => {
                if(user){
                    const userId = user.uid;
                    const userRef = doc(db, collectionName, userId);
                    const siteDataRef = collection(userRef, "sites");
                    const querySnapshot = await getDocs(siteDataRef);

                    querySnapshot.forEach((doc) => {
                        const siteName = doc.data().Name; // Assuming you have a field called "name" in your city documents
                        const siteId = doc.id;
                        const option = document.createElement("option");
                        option.value = siteId;
                        option.text = siteName;
                        mySelect_Site.appendChild(option);
                        
                    });
                    
                }
            });
        }

        // Event listener for when the user selects a city
        mySelect_Site.addEventListener("change", (event) => {
            
            const selectedsite = mySelect_Site.options[mySelect_Site.selectedIndex];
            selectedSite1 = {
                siteName : selectedsite.text,
                siteId : selectedsite.value
    
            }; 

            console.log("Selected City Name: " + selectedsite.text);
            console.log("Selected City ID: " + selectedsite.value);
            
            auth.onAuthStateChanged(async (user) => {
                if(user){

                    const userId = user.uid;
                    const siteData = doc(db, collectionName, userId, "sites", selectedsite.value);

                    getDoc(siteData).then((docSnapshot) => {
                    const data = docSnapshot.data();
                    console.log("Data from nested document:", data);
                    location_input.value = selectedSite1["siteName"];
                    Latitude_input.value = data["Latitude"];
                    longitude_input.value = data["Longitude"];

                    var latitude = Latitude_input.value;
                    var longitude = longitude_input.value ;

                    if (!isNaN(latitude) && !isNaN(longitude) && latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180) {
                        if (marker) {
                            // If a marker exists, remove it
                            map.removeLayer(marker);
                        }
                    
                        marker = L.marker([latitude, longitude]).addTo(map)
                            .bindPopup('Latitude: ' + latitude + '<br>Longitude: ' + longitude)
                            .openPopup();


                            map.flyTo([latitude, longitude], 14, {
                                duration: 2  // Adjust the duration (in seconds) for the animation as needed
                            });
                            
                    } else {
                        alert('Invalid coordinates. Latitude must be between -90 and 90, and longitude must be between -180 and 180.');
                    }
                    })
                }
            });

            
        });

        
    save_site_info.addEventListener("click", () => {

        auth.onAuthStateChanged((user) => {
            if(user){
                const userId = user.uid;
                const userRef = doc(db, collectionName, userId);
                
                    addDoc(collection(userRef, "sites"), {
                        Name: location_input.value,
                        Latitude: Latitude_input.value,
                        Longitude: longitude_input.value
                    })
                        .then((docRef) => {
                            const siteId  = docRef.id;
                            console.log("site added succesfuly ",siteId);
                            mySelect_Site.innerHTML = "<option disabled selected>Select</option>";      
                                    location_input.value = "";
                                    Latitude_input.value = "";
                                    longitude_input.value = "";
                                    selectedSite1["siteId"] = null;
                                    populateSiteSelector();
                        });
                
            }
        })
    })

    
    edit_site_info.addEventListener("click", () => {
        auth.onAuthStateChanged((user) => {
            if(user){
                const userId = user.uid;
                const siteRef = doc(db, collectionName, userId, "sites", selectedSite1["siteId"]);
                const dataToUpdate = {
                    Name: location_input.value,
                    Latitude: Latitude_input.value,
                    Longitude: longitude_input.value,
                    };
                updateDoc(siteRef,dataToUpdate)
                .then(() => {
                    console.log("Document successfully updated.");
                    mySelect_Site.innerHTML = "<option disabled selected>Select</option>";
                            location_input.value = "";
                            Latitude_input.value = "";
                            longitude_input.value = "";
                            selectedSite1["siteId"] = null;
                            populateSiteSelector();
                })
                .catch((error) => {
                    console.error("Error updating document: ", error);
                });

            }
        });

    });


    delet_site_info.addEventListener("click", () => {
        if (selectedSite1["siteId"]){
            auth.onAuthStateChanged(async (user) => {
                if(user){

                    const userId = user.uid;
                    const siteData = doc(db, collectionName, userId, "sites", selectedSite1["siteId"]);
                    deleteDoc(siteData)

                    .then(() => {

                        alert("Document successfully deleted.");
                        mySelect_Site.innerHTML = "<option disabled selected>Select</option>";
                        location_input.value = "";
                        Latitude_input.value = "";
                        longitude_input.value = "";
                        selectedSite1["siteId"] = null;

                        populateSiteSelector();


        
         
                    })
                    .catch((error) => {
                        console.error("Error deleting document: ", error);
                    });
                }
            })
        }
    });






















                // Populate the city selector when the page loads
                populateSiteSelector();






















                




















