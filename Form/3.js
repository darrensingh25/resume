function validate() {

    var fname =document.getElementById("fname").value;
    var fnames=document.getElementById("fnames")
    if(fname=="") {
        fnames.innerHTML="please enter your name";
    }
    //var form=document.getElementById("form");
    var pattern = /^[A-Za-z._]{3,}@[A-Za-z._]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var email=document.getElementById("email").value;
    var emails=document.getElementById("emails");
    if(email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("Invalid");
        emails.innerHTML="Email is Valid"; 
        emails.style.color="green"
    }
    else {
        form.classList.remove("valid");
        form.classList.add("Invalid");
        document.getElementById("emails").innerHTML="Please enter valid email";
        emails.style.color="red"
    }
    if(email=="") {
        form.classList.add("valid");
        form.classList.remove("Invalid");
        emails.innerHTML="Email is Not Valid"; 
        emails.style.color="blue"

    }





}
