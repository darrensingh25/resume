function validate() {

    var fname =document.getElementById("fname").value;
    var lnames=document.getElementById("lname").value;
    var email =document.getElementById("email").value;
    var password =document.getElementById("password").value;
    var confirmpasssword =document.getElementById("confirmpassword").value;
    var hobbies =document.getElementById("hobbies").value;
   // var fname =document.getElementById("fname").value;
    if(fname=="") {
        
        document.getElementById("fnames").innerHTML="please enter your name";
    }
    


}
