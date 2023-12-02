

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
const collectionName = "users"; 
const bdCollectionName = "Base de Donnees"; 
const db = getFirestore(app);











let selectedSite1 = [];
let selectedbd1 = [];

const siteSelector = document.getElementById("mySelect_Site");
const bdSelector = document.getElementById("mySelect_Database");
const bdNameInput = document.getElementById("P1Ndatabase1");

const servisError= document.getElementById("servisError")




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





// -----------------Database option-------------------)



 document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('humanCheckbox');
    const P1Ndatabase1 = document.getElementById('P1Ndatabase1');
    const P1Ndatabase1_1 = document.getElementById('P1Ndatabase1_1');
    const P1Ndatabase1_2 = document.getElementById('P1Ndatabase1_2');
    const mySelect_Database = document.getElementById('mySelect_Database');

    const save_Database_info = document.getElementById('save_Database_info');
    const edit_Database_info = document.getElementById('edit_Database_info');
    const delet_Database_info = document.getElementById('delet_Database_info');
 



    checkbox.addEventListener('change', function () {


        if (checkbox.checked) {

            reload();
            
            delet_Database_info.style.display = "block";
            edit_Database_info.style.display = "block";
            save_Database_info.style.display = "none";


            mySelect_Database.disabled = false;
            P1Ndatabase1.disabled = true;
            P1Ndatabase1_1.disabled = true;
            P1Ndatabase1_2.disabled = true;




            P1Ndatabase1_1.style.color = 'var(--text-color-disable)';
            P1Ndatabase1_2.style.color = 'var(--text-color-disable)';


            mySelect_Database.style.boxShadow = '';
            mySelect_Database.style.color = '';

            P1Ndatabase1.value = '';

        } 
        else{

            reload();

            delet_Database_info.style.display = "none";
            edit_Database_info.style.display = "none";
            save_Database_info.style.display = "block";
            
            P1Ndatabase1_1.style.color = '';
            P1Ndatabase1_2.style.color = '';


            mySelect_Database.style.boxShadow = '0 0 0.7rem var(--bg-color)';
            mySelect_Database.style.color = 'var(--text-color-disable)';





            mySelect_Database.disabled = true;
            P1Ndatabase1.disabled = false;
            P1Ndatabase1_1.disabled = false;
            P1Ndatabase1_2.disabled = false;

        }

    });

});



const input1 = document.getElementById("D1P1january");
const input2 = document.getElementById("D1P1february");
const input3 = document.getElementById("D1P1march");
const input4 = document.getElementById("D1P1april");
const input5 = document.getElementById("D1P1may");
const input6 = document.getElementById("D1P1june");
const input7 = document.getElementById("D1P1july");
const input8 = document.getElementById("D1P1august");
const input9 = document.getElementById("D1P1september");
const input10 = document.getElementById("D1P1october");
const input11 = document.getElementById("D1P1november");
const input12 = document.getElementById("D1P1december");



const deleteButton = document.getElementById("delet_Database_info");
const saveButton = document.getElementById("save_Database_info");
const editButton = document.getElementById("edit_Database_info");

// Function to populate the selector with sites from Firestore
function populateSiteSelector() {
    auth.onAuthStateChanged(async (user) => {
        if(user){
            const userId = user.uid;
            const userRef = doc(db, collectionName, userId);
            const siteDataRef = collection(userRef, "sites");
            const querySnapshot = await getDocs(siteDataRef);

            querySnapshot.forEach((doc) => {
                const siteName = doc.data().Name; 
                const siteId = doc.id;
                const option = document.createElement("option");
                option.value = siteId;
                option.text = siteName;
                siteSelector.appendChild(option);
            });
        }
    });
}

function reload(){
    bdNameInput.value = "";
                    input1.value = "";
                    input2.value = "";
                    input3.value = "";
                    input4.value = "";
                    input5.value = "";
                    input6.value = "";
                    input7.value = "";
                    input8.value = "";
                    input9.value = "";
                    input10.value ="";
                    input11.value = "";
                    input12.value = "";
                    
}

function populatebdSelector() {
    reload();
    bdSelector.innerHTML = "<option disabled selected>Select</option>";  
    auth.onAuthStateChanged(async (user) => {
        if(user){
            const userId = user.uid;
            const userRef = doc(db, collectionName, userId);
            const bdDataRef = collection(userRef, "sites",selectedSite1["siteId"],bdCollectionName);
            const querySnapshot = await getDocs(bdDataRef);

            querySnapshot.forEach((doc) => {
                const bdName = doc.data().Name; 
                const bdId = doc.id;
                const option = document.createElement("option");
                option.value = bdId;
                option.text = bdName;
                bdSelector.appendChild(option);
            });
            
        }
    });            

}


siteSelector.addEventListener("change", (event) => {
    const selectedsite = siteSelector.options[siteSelector.selectedIndex];
    selectedSite1 = {
        siteName : selectedsite.text,
        siteId : selectedsite.value
    };

    populatebdSelector();

    auth.onAuthStateChanged(async (user) => {
        if(user){
            const userId = user.uid;
            const siteData = doc(db, collectionName, userId, "sites", selectedsite.value);

            getDoc(siteData).then((docSnapshot) => {
            const data = docSnapshot.data();
            })
        }
    });
});

 // Event listener for when the user selects a city
 bdSelector.addEventListener("change", (event) => {
    const selectedbd = bdSelector.options[bdSelector.selectedIndex];
    selectedbd1 = {
        bdName : selectedbd.text,
        bdId : selectedbd.value
    };
    console.log("Selected base de donnees Name: " + selectedbd.text);
    console.log("Selected base de donnees ID: " + selectedbd.value);
    
    auth.onAuthStateChanged(async (user) => {
        if(user){
            const userId = user.uid;
            const bdData = doc(db, collectionName, userId, "sites", selectedSite1["siteId"], bdCollectionName, selectedbd.value);
            getDoc(bdData).then((docSnapshot) => {
            const data = docSnapshot.data();
            console.log("Data from nested document:", data);
            bdNameInput.value = selectedbd1["bdName"];
            input1.value = data["month1"];
            input2.value = data["month2"];
            input3.value = data["month3"];
            input4.value = data["month4"];
            input5.value = data["month5"];
            input6.value = data["month6"];
            input7.value = data["month7"];
            input8.value = data["month8"];
            input9.value = data["month9"];
            input10.value = data["month10"];
            input11.value = data["month11"];
            input12.value = data["month12"];
            })
        }
    });
});


saveButton.addEventListener("click", () => {

auth.onAuthStateChanged((user) => {
    if(user){
        const userId = user.uid;
        const bdRef = doc(db, collectionName, userId, "sites", selectedSite1["siteId"]);
        
            addDoc(collection(bdRef, bdCollectionName), {
                Name: bdNameInput.value,
                month1: input1.value,
                month2: input2.value,
                month3: input3.value,
                month4: input4.value,
                month5: input5.value,
                month6: input6.value,
                month7: input7.value,
                month8: input8.value,
                month9: input9.value,
                month10: input10.value,
                month11: input11.value,
                month12: input12.value,
            })
                .then((docRef) => {
                    const bdId  = docRef.id;
                    console.log("bd added succesfuly ",bdId);    
                    selectedbd1 = null;
                    populatebdSelector();
                });
        
    }
})
})

editButton.addEventListener("click", () => {
auth.onAuthStateChanged((user) => {
    if(user){
        const userId = user.uid;
        const bdRef = doc(db, collectionName, userId, "sites", selectedSite1["siteId"], bdCollectionName, selectedbd1["bdId"]);
        const dataToUpdate = {
                Name: bdNameInput.value,
                month1: input1.value,
                month2: input2.value,
                month3: input3.value,
                month4: input4.value,
                month5: input5.value,
                month6: input6.value,
                month7: input7.value,
                month8: input8.value,
                month9: input9.value,
                month10: input10.value,
                month11: input11.value,
                month12: input12.value,
            };
        updateDoc(bdRef,dataToUpdate)
        .then(() => {
            console.log("Document successfully updated.");
           
                    selectedbd1 = null;
                    populatebdSelector();
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });

    }
});

});

deleteButton.addEventListener("click", () => {
    if (selectedSite1["siteId"]){
        auth.onAuthStateChanged(async (user) => {
            if(user){
                const userId = user.uid;
                const bdData = doc(db, collectionName, userId, "sites", selectedSite1["siteId"], bdCollectionName, selectedbd1["bdId"]);
                deleteDoc(bdData)
                .then(() => {
                    console.log("Document successfully deleted.");

                    selectedbd1 = null;
                    populatebdSelector();
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
