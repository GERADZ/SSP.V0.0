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