

// -----------------select-select-select -------------------)


const creatProject= document.getElementById("creatProject")
const successfully= document.getElementById("successfully")
const selectNumber= document.getElementById("selectNumber")
const selceterro= document.getElementById("selceterro")
const spinner= document.getElementById("spinner")
const enterData = document.getElementById("enterData")




creatProject.onclick =() => {

    var selectedValue = document.getElementById("mySelect").value;
    var selectedValue1 = document.getElementById("mySelect1").value;
    var selectedValue2 = document.getElementById("mySelect2").value;

    
    if (selectedValue === "option0" || selectedValue1 === "option0" ||  selectedValue2 === "option0" ) {

        selectNumber.style.display = "none";
        selceterro.style.display = "block";
        setTimeout(() => {
            selectNumber.style.display = "block";
            selceterro.style.display = "none";
             }, 6000);
    } 
    // -----------------pv--select -------------------)

    if (selectedValue === "option1" && selectedValue1 === "option1" &&  selectedValue2 === "option1" ) {

        selectNumber.style.display = "none"; 
        successfully.style.display = "block";
        spinner.style.display = "block";
        

        setTimeout(() => {
            services.style.display ="none";
            enterData.style.display ="block";
            selectNumber.style.display = "block";
            successfully.style.display = "none";
            spinner.style.display = "none";
             }, 3000);
    } 

}


// -----------------pv-select-select -------------------)

const confirme= document.getElementById("confirme")
const successfully1= document.getElementById("successfully1")
const spinner1= document.getElementById("spinner1")
const editData = document.getElementById("editData")
const services = document.getElementById("services")
const spinnerEdit= document.getElementById("spinnerEdit")


const datainputID = document.getElementById("datainputID")
const dataResult = document.getElementById("data-Result")





confirme.addEventListener("click", () => {
    if (datainputID && spinner1 && dataResult) {
        spinner1.style.display = "block";
        confirme.style.background = "var(--second-bg-color)";
        confirme.style.color = "#0ef";

        setTimeout(() => {   
            spinner1.style.display = "none";
            datainputID.style.display = "none";
            dataResult.style.display = "block";

             }, 3000);
    } else {
        console.error("Element with ID 'wapper' not found.");
    }
});
editData.addEventListener("click", () => {

    if (dataResult && datainputID) {
        spinnerEdit.style.display = "block";
        editData.style.background = "var(--second-bg-color)";
        editData.style.color = "#0ef";

        setTimeout(() => {           
            spinnerEdit.style.display = "none";
            dataResult.style.display = "none";
            datainputID.style.display = "block";

            }, 2000);

    } else {
        console.error("Element with ID 'wapper' not found.");
    }
});



// ----------------------------------------------form box -------------
const cancel= document.getElementById("cancel")

const next0 = document.getElementById("next");
const retur = document.getElementById("return");

const next1 = document.getElementById("next1");
const return2 = document.getElementById("return2");

const next2 = document.getElementById("next2");
const return3 = document.getElementById("return3");

const next3 = document.getElementById("next3");
const return4 = document.getElementById("return4");
const projectcancelled = document.getElementById("projectcancelled")
const wapper = document.getElementById("wapper");

next0.addEventListener("click", () => {
    if (wapper) {
        wapper.classList.add('active');
    } else {
        console.error("Element with ID 'wapper' not found.");
    }
});
retur.addEventListener("click", () => {
    if (wapper) {
        wapper.classList.remove('active');
    } else {
        console.error("Element with ID 'wapper' not found.");
    }  
});
cancel.addEventListener("click", () => {
    if (services) {
        
        projectcancelled.style.display ="block";
        spinner1.style.display ="block";



        setTimeout(() => {
            enterData.style.display ="none";
            spinner1.style.display ="none";
            projectcancelled.style.display ="none";
            services.style.display ="block";

            }, 3000);

    } else {
        console.error("Element with ID 'wapper' not found.");
    }
});



// ----------------------------------------------scrol   1 ----------------------

next1.addEventListener("click", () => {
    if (wapper) {
        wapper.classList.remove('active');
        wapper.classList.add('active1');
    } else {
        console.error("Element with ID 'wapper' not found.");
    }
});

return2.addEventListener("click", () => {
    if (wapper) {
        wapper.classList.add('active');
        wapper.classList.remove('active1');
    } else {
        console.error("Element with ID 'wapper' not found.");
    }
});

//  ----------------------------------------------scrol   2 ----------------------

next2.addEventListener("click", () => {
    if (wapper) {
        wapper.classList.remove('active1');
        wapper.classList.add('active2');
    } else {
        console.error("Element with ID 'wapper' not found.");
    }
});
return3.addEventListener("click", () => {
    if (wapper) {
        wapper.classList.remove('active2');
        wapper.classList.add('active1');
    } else {
        console.error("Element with ID 'wapper' not found.");
    }
});
next3.addEventListener("click", () => {
    if (wapper) {
        wapper.classList.remove('active2');
        wapper.classList.add('active3');
    } else {
        console.error("Element with ID 'wapper' not found.");
    }
});
return4.addEventListener("click", () => {
    if (wapper) {
        wapper.classList.remove('active3');
        wapper.classList.add('active2');
    } else {
        console.error("Element with ID 'wapper' not found.");
    }
});

// ----------------------------------------------form box ----------------------