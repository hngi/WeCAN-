// Validating Empty Field
function check_empty() {
//if (document.getElementById('name').value == "" || document.getElementById('name2').value == ""  || document.getElementById('email').value == "" || document.getElementById('title').value == "" || document.getElementById('msg').value == "") {
//alert("Fill All Fields !");}
if (document.getElementById('name').value == "") { alert(' Full Name is required.');}
else if (document.getElementById('email').value == "") { alert('Please enter your email address.');}
else if (document.getElementById('user').value == "") { alert('Username is required.');}
else if (document.getElementById('word').value == "") { alert('Enter Your Password.');}
else if (document.getElementById('confirm').value == "") { alert('Please confirm password.');}
else if (document.getElementById('email').value.indexOf("@") < 1 || document.getElementById('email').value.indexOf(".") < 1) { alert('Please enter a valid email address.'); }
//else if (document.getElementById('msg').value == "") { alert('Please leave your messages, comments or suggestions.');}
//else if (document.getElementById('msg').length < 20) { alert('Message too short! Message must be at least 20 characters.');
}
else
{
document.getElementById('form2').submit(); alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

// Function to Format Input
// function ValidateForm() {
        //if (frm.LastName.value == "") { alert(' Last Name is required.'); frm.LastName.focus(); return false; }
        //if (frm.FirstName.value == "") { alert('First Name is required.'); frm.FirstName.focus(); return false; }
        //if (frm.EmailAdd.value == "") { alert('Email address is required.'); frm.EmailAdd.focus(); return false; }
        //if (document.getElementById('email').value.indexOf("@") < 1 || document.getElementById('email').value.indexOf(".") < 1) { alert('Please enter a valid email address.'); frm.email.focus(); return false; }
        //if (frm.Message.value == "") { alert('Please leave your messages, comments or suggestions.'); frm.Message.focus(); return false; }
        // return true; }