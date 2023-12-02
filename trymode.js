ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.4', { origin: 'top'});
ScrollReveal().reveal('.3', { origin: 'bottom'});
ScrollReveal().reveal('.2', { origin: 'left'});
ScrollReveal().reveal('.1', { origin: 'right'});






const SendMessage = document.getElementById("SendMessage")
SendMessage.sendEmeil('click',() =>{
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


    }).then(
      message => alert(message)
    );

})
