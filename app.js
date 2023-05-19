function carLoanCredentials (){
if(document.getElementById("firstName").value=="" || document.getElementById("lastName").value=="" || document.getElementById("Amount").value<1){
    alert('Please enter valid credentials')
}
else{
    alert('Loan Successful')
}
}
