 function validate() {
     var fname = document.getElementById("fname").value;

     var lname = document.getElementById("lname").value;
     var email = document.getElementById("email").value;
     // var email =document.getElementById("email").value.trim();
     var password = document.getElementById("password").value;
     var confirmpasssword = document.getElementById("confirmpassword").value;
     var male = document.getElementById("male").checked;
     var female = document.getElementById("female").checked;
     //var hobbies = document.getElementsByClassName("hobbies");
     var hobbies1 = document.getElementById("hobbies1");
     var hobbies2 = document.getElementById("hobbies2");
     var hobbies3 = document.getElementById("hobbies3");
     var hobbies4 = document.getElementById("hobbies4");

     var income = document.getElementById("range").value;
     var file = document.getElementById("file").value;
     var age = document.getElementById("age").value;
     var area = document.getElementById("area").value;
     // var fname =document.getElementById("fname").value;

     var checkedItems = document.getElementsByClassName("multiselect");
    var flag = 0;
    for (let index = 0; index < checkedItems.length; index++) {
        if (checkedItems[index].checked == true) {
            flag++;
        }
        if (flag > 2) {
            checkedItems[index].checked = false;
        } else {
            console.log('.error');
        }
    }

     var emptyerror = document.querySelectorAll('.error'); // no error
     for (var i = 0; i < emptyerror.length; i++) {
         document.getElementsByClassName('error')[i].innerHTML = '';
     }

     if (fname == "") {
         document.getElementById("fnames").innerHTML = "*please enter your first name*";
         return false;
     }
     if (fname.length <= 2 || fname.length >= 20) {

         document.getElementById("fnames").innerHTML = "*please enter your name between 2 and 20 alphabets*";
         return false;
     }
     if (!isNaN(fname)) {
         document.getElementById("fnames").innerHTML = "*please enter only the alphabets*";
         return false;
     }

     if (lname == "") {
         document.getElementById("lnames").innerHTML = "*please enter your last name*";
         return false;
     }
     if (lname.length <= 2 || lname.length >= 20) {
         document.getElementById("lnames").innerHTML = "*please enter your last name having atleast 2 alphabets*";
         return false;
     }
     if (!isNaN(lname)) {
         document.getElementById("lnames").innerHTML = "*please enter only the alphabets*";
         return false;
     }

     if (email == "") {
         document.getElementById("emails").innerHTML = "*please enter your email*";
         return false;
     }
     if (email.indexOf('@') <= 0) {
         document.getElementById("emails").innerHTML = "*please enter valid email*";
         return false;
     }
     if ((email.charAt(email.length - 4) != ".") && (email.charAt(email.length - 3) != ".")) {
         document.getElementById("emails").innerHTML = "*please enter valid email*";
         return false;
     }

     if (password == "") {
         document.getElementById("passwords").innerHTML = "*please enter your password*";
         return false;
     }
     if (password.length < 8) {
         document.getElementById("passwords").innerHTML = "*please enter your password having atleast 8 characters*";
         return false;
     }
     if (confirmpasssword == "") {
         document.getElementById("confirmpasswords").innerHTML = "*please enter your confirm password*";
         return false;
     }
     if (password != confirmpasssword) {
         document.getElementById("confirmpasswords").innerHTML = "*password are not matching*";
         return false;
     }

     if (!male && !female) {
         document.getElementById("genders").innerHTML = "* Please select only one";
         return false;
     }

     if (!hobbies1.checked && !hobbies2.checked && !hobbies3.checked && !hobbies4.checked) {
         document.getElementById('hobbies').innerHTML = "*Select Hobbies";
         return false;
     }

     /* if (hobbies.length > 2) {
         document.getElementById("hobbies").innerHTML = "*Please select hobbies";
         return false;
     } */
     if (income == 0) {
         document.getElementById("ranges").innerHTML = "*Please select the income";
         return false;
     }

     if (!file) {
         document.getElementById("ups").innerHTML = "*Please upload your profile picture";
         return false;
     }

     if (age == "") {
         document.getElementById("ages").innerHTML = "*Enter your age";
         return false;
     }
     if (age < 18) {
         document.getElementById("ages").innerHTML = "*Age should be greater than 18";
         return false;
     }

     if (!area) {
         document.getElementById("areas").innerHTML = "*Please write something inside the box";
         return false;
     }

 }

 function passwordcheck() {
     var password = document.getElementById("password").value;
     var strong = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

     if (password == "") {
         document.getElementById('passwords').innerHTML = "*Please enter your password";
         return false;
     }
     if (password.length < 5 && password.length > 8) {
         document.getElementById('passwords').innerHTML = "*Password should be Grater than 5 and less than 9";
         return false;
     }
     if (!password.match(strong)) {
         document.getElementById('passwords').innerHTML = "*Password is not strong";
         return false;
     }
 }