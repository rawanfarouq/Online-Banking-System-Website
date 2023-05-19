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
   