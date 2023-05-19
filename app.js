
function handleInternal() {
    var nameDiv = document.querySelector(".Name");
    var creditNumberDiv = document.querySelector(".Credit_Number");
    var amountDiv = document.querySelector(".Amount");
  
    if (nameDiv.style.display === "none") {
      nameDiv.style.display = "block";
      creditNumberDiv.style.display = "block";
      amountDiv.style.display = "block";
    } else {
      nameDiv.style.display = "none";
      creditNumberDiv.style.display = "none";
      amountDiv.style.display = "none";
    }
  }
  
  function handleDomestic() {
    var nameDiv = document.querySelector(".Name");
    var creditNumberDiv = document.querySelector(".Credit_Number");
    var amountDiv = document.querySelector(".Amount");
    var bankName = document.querySelector(".Bank_Name");
  
    if (nameDiv.style.display === "none") {
      nameDiv.style.display = "block";
      creditNumberDiv.style.display = "block";
      amountDiv.style.display = "block";
      bankName.style.display="block";
    } else {
      nameDiv.style.display = "none";
      creditNumberDiv.style.display = "none";
      amountDiv.style.display = "none";
      bankName.style.display="none";
    }
  }
  
  function handleInternational() {
    var nameDiv = document.querySelector(".Name");
    var creditNumberDiv = document.querySelector(".Credit_Number");
    var amountDiv = document.querySelector(".Amount");
    var bankName = document.querySelector(".Bank_Name");
    var country = document.querySelector(".Country");
  
    if (nameDiv.style.display === "none") {
      nameDiv.style.display = "block";
      creditNumberDiv.style.display = "block";
      amountDiv.style.display = "block";
      bankName.style.display="block";
      country.style.display="block";
    } else {
      nameDiv.style.display = "none";
      creditNumberDiv.style.display = "none";
      amountDiv.style.display = "none";
      bankName.style.display="none";
      country.style.display="none";
    }
  }
   

function carLoanCredentials (){
if(document.getElementById("firstName").value=="" || document.getElementById("lastName").value=="" || document.getElementById("Amount").value<1){
    alert('Please enter valid credentials')
}
else{
    alert('Loan Successful')
}
}

function handleOthers(){
    var card = document.querySelector(".card");
    var report = document.querySelector(".form-group");

    if (card.style.display === "none"){
        card.style.display = "block";
      report.style.display = "block";
    }
    else{
        card.style.display = "none";
      report.style.display = "none";



    }
}
