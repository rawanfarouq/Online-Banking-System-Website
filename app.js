function carLoanCredentials (){
if(document.getElementById("firstName").value=="" || document.getElementById("lastName").value=="" || document.getElementById("Amount").value<1){
    alert('Please enter valid credentials')
}
else{
    alert('Loan Successful')
}
}
function loginCredentials() {
    if (document.getElementById("Username").value == "client" && document.getElementById("Password").value == "client") {
      window.location.assign('Accounts.html');
    } else if (document.getElementById("Username").value == "admin" && document.getElementById("Password").value == "admin") {
      window.location.assign('admin.html');
    } else if (document.getElementById("Username").value == "banker" && document.getElementById("Password").value == "banker") {
      window.location.assign('banker.html');
    } else {
      alert('Please enter valid credentials');
    }
  }

function signUp(){
    if(document.getElementById("SignUpUsername").value=="" || document.getElementById("SignUpPassword").value=="" ){
        alert('Please enter valid credentials')
    }
    else{
        location.replace('/Login.html');
    }
   
}  
