function addCheckbox() {
  var checkboxList = document.getElementById("checkboxList");
  var newCheckboxInput = document.getElementById("newCheckboxInput");

  // Get the value of the input field
  var inputValue = newCheckboxInput.value;

  // Check if the input value is empty
  if (inputValue.trim() === "") {
    alert("Cannot have an empty reminder.");
    return;
  }

  // Create a new checkbox element
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "checkboxItem";
  checkbox.value = inputValue;

  // Create a label element for the checkbox
  var label = document.createElement("label");
  label.appendChild(document.createTextNode(inputValue));

  // Create a list item element
  var listItem = document.createElement("li");

  // Create a remove button element
  var removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.onclick = function() {
    removeCheckbox(checkbox);
  };

  // Create a span element for spacing
  var spacingSpan = document.createElement("span");
  spacingSpan.style.marginRight = "10px"; // Adjust the margin value as needed

  // Append the checkbox, spacing span, label, and remove button to the list item
  listItem.appendChild(checkbox);
  listItem.appendChild(spacingSpan);
  listItem.appendChild(label);
  listItem.appendChild(removeButton);

  // Append the list item to the checkbox list
  checkboxList.appendChild(listItem);

  // Clear the input field
  newCheckboxInput.value = "";
}
function ValidateSelection()  
       {  
           var check_box = document.getElementsByName("reminders");  
           var CheckedItems = 0; 
           for(var i = 0; i < check_box.length; i++)  
           {  
               if(check_box[i].checked)  
                   CheckedItems++;  
           }  
       }  


function removeCheckbox(checkbox) {
  var listItem = checkbox.parentNode;
  var checkboxList = listItem.parentNode;
  checkboxList.removeChild(listItem);
}

function removeSelectedBill() {
  var dropdown = document.getElementById("myDropdown");
  var selectedIndex = dropdown.selectedIndex;

  if (selectedIndex !== -1 && selectedIndex !== 0) {
    dropdown.remove(selectedIndex);
    alert("Bill paid");
  } else {
    alert("Please select a bill to pay");
  }
}

function currentAccountDetails() {

    var container = document.getElementById("accountDetails");

  // Get the last child element and remove it
    var lastChild = container.lastChild;
    container.removeChild(lastChild);

    var lineBreak = document.createElement("br");

    var newScript = document.createElement("script");
    newScript.textContent = 'onclick="alert("hello")"';

    var newLabel = document.createElement("label");
    newLabel.textContent = "Current Account Balance :";
    newLabel.style = "font-size: 20px;"

    var newLabel2 = document.createElement("label");
    newLabel2.textContent = " 10,000 EGP";
    newLabel2.style = "font-size: 20px;"
    newLabel2.id = "currentAccountBalance"

   //var newLabel3 = document.createElement("button");
    //newLabel3.innerHTML = '<button type="button" class="btn btn-danger" onclick="alert()">Delete Account</button>'


    
    var newContainer = document.createElement("div");
    newContainer.appendChild(newLabel);
    newContainer.appendChild(newLabel2);
    newContainer.appendChild(lineBreak);
    //newContainer.appendChild(newLabel3);
    
  
  
    // Add the new element to the container
    var container = document.getElementById("accountDetails");
    container.appendChild(newContainer);
}
  

function savingsAccountDetails() {
    var container = document.getElementById("accountDetails");
    var lineBreak = document.createElement("br");

  // Get the last child element and remove it
    var lastChild = container.lastChild;
    container.removeChild(lastChild);

    var newLabel = document.createElement("label");
    newLabel.textContent = "Savings Account Balance :";
    newLabel.style = "font-size: 20px;"

    var newLabel2 = document.createElement("label");
    newLabel2.textContent = " 10,000 EGP";
    newLabel2.style = "font-size: 20px;"
    newLabel2.id = "currentAccountBalance"

   // var newLabel3 = document.createElement("button");
    //newLabel3.innerHTML = '<button type="button" class="btn btn-danger" onclick="alert()">Delete Account</button>'
    
    var newContainer = document.createElement("div");
    newContainer.appendChild(newLabel);
    newContainer.appendChild(newLabel2);
    newContainer.appendChild(lineBreak);
    //newContainer.appendChild(newLabel3);
    
  
  
    // Add the new element to the container
    var container = document.getElementById("accountDetails");
    container.appendChild(newContainer);
}


function newAccountDetails() {
    var container = document.getElementById("accountDetails");
    var lineBreak = document.createElement("br");

  // Get the last child element and remove it
    var lastChild = container.lastChild;
    container.removeChild(lastChild);

    var newLabel = document.createElement("label");
    newLabel.textContent = "New Account Balance :";
    newLabel.style = "font-size: 20px;"

    var newLabel2 = document.createElement("label");
    newLabel2.textContent = " ZERO EGP";
    newLabel2.style = "font-size: 20px;"
    newLabel2.id = "currentAccountBalance"

    //var newLabel3 = document.createElement("button");
    //newLabel3.innerHTML = '<button type="button" class="btn btn-danger" onclick="alert()">Delete Account</button>'
    
    var newContainer = document.createElement("div");
    newContainer.appendChild(newLabel);
    newContainer.appendChild(newLabel2);
    newContainer.appendChild(lineBreak);
    //newContainer.appendChild(newLabel3);
    
  
  
    // Add the new element to the container
    var container = document.getElementById("accountDetails");
    container.appendChild(newContainer);
}
  
function addBankAccount() { 
    var dropDown = document.getElementById("accountsDropDownMenu")
    
    var newAccount = document.createElement("a")
    //newAccount.innerHTML = '<a class="dropdown-item" onclick="newAccountDetails()"> New Account</a>'
    newAccount.className = "dropdown-item"
    newAccount.onclick = "newAccountDetails()"
    newAccount.textContent = "New Account"
    dropDown.appendChild(newAccount)
}

function closeAccount(name){
  var dropDown = document.getElementById("accountsDropDownMenu")
  var dropdownItems = document.getElementsByClassName('dropdown-item');
  for (var i = 0; i < dropdownItems.length; i++) {
    
    if (dropdownItems[i].textContent === name) {
      dropDown.removeChild(dropdownItems[i]);
      break;
    }
  }
}

function handleInternal() {
  var nameDiv = document.querySelector(".Name");
  var creditNumberDiv = document.querySelector(".Credit_Number");
  var amountDiv = document.querySelector(".Amount");
  var container1 = document.getElementById("container1");
  var enterInternalBtn = document.getElementById("enterInternalBtn");
  var enterDomesticBtn = document.getElementById("enterDomesticBtn");
  var enterInternationalBtn = document.getElementById("enterInternationalBtn");
  
  enterInternalBtn.style.display = "block";
  enterDomesticBtn.style.display = "none";
  enterInternationalBtn.style.display = "none";
  
  if (container1.style.display === "none") {
    // Show container1 and its child elements
    container1.style.display = "block";
    nameDiv.style.display = "block";
    creditNumberDiv.style.display = "block";
    amountDiv.style.display = "block";
    

  } else {
    // Hide container1 and its child elements
    container1.style.display = "none";
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
    var container1 = document.getElementById("container1");
    var enterInternalBtn = document.getElementById("enterInternalBtn");
    var enterDomesticBtn = document.getElementById("enterDomesticBtn");
    var enterInternationalBtn = document.getElementById("enterInternationalBtn");
    
    enterInternalBtn.style.display = "none";
    enterDomesticBtn.style.display = "block";
    enterInternationalBtn.style.display = "none";
  
  
    if (nameDiv.style.display === "none") {
      container1.style.display = "block";
      nameDiv.style.display = "block";
      creditNumberDiv.style.display = "block";
      amountDiv.style.display = "block";
      bankName.style.display="block";
    } else {
      container1.style.display = "none";
      nameDiv.style.display = "none";
      creditNumberDiv.style.display = "none";
      amountDiv.style.display = "none";
      bankName.style.display="none";
    }
  
  }

  
  function handleStart() {
    var container = document.getElementById("container");
    container.style.display = "block";
  }


  
 function handleInternational() {
    var nameDiv = document.querySelector(".Name");
    var creditNumberDiv = document.querySelector(".Credit_Number");
    var amountDiv = document.querySelector(".Amount");
    var bankName = document.querySelector(".Bank_Name");
    var country = document.querySelector(".Country");
    var container1 = document.getElementById("container1");
    var enterInternalBtn = document.getElementById("enterInternalBtn");
  var enterDomesticBtn = document.getElementById("enterDomesticBtn");
  var enterInternationalBtn = document.getElementById("enterInternationalBtn");
  
  enterInternalBtn.style.display = "none";
  enterDomesticBtn.style.display = "none";
  enterInternationalBtn.style.display = "block";
  
    if (nameDiv.style.display === "none") {
      container1.style.display = "block";
      nameDiv.style.display = "block";
      creditNumberDiv.style.display = "block";
      amountDiv.style.display = "block";
      bankName.style.display="block";
      country.style.display="block";
    } else {
      container1.style.display = "none";
      nameDiv.style.display = "none";
      creditNumberDiv.style.display = "none";
      amountDiv.style.display = "none";
      bankName.style.display="none";
      country.style.display="none";
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

function handleSend(){
  var emailInput = document.getElementById("emailInput");

  if (emailInput.value==""){
    alert("Something is empty");
  }
  else{
    alert("Report request is sent successfully");
  }
}

function handleNotify() {
  var notificationAlert = document.getElementById("myNotification");
  notificationAlert.style.display = "block";
}


function handleEnterInternal() {
  var nameInput = document.getElementById("nameInput");
  var creditCardInput = document.getElementById("creditCardInput");
  var amountInput = document.getElementById("amountInput");
  
  if (nameInput.value === "") {
    alert("Name is required!");
  } else if (creditCardInput.value === "") {
    alert("Bank Account Number is required!");
  } else if (amountInput.value === "") {
    alert("Amount is required!");
  } else {
    alert("Internal Money Transfer request is sent");
  }
}

function handleEnterDomestic() {
  var nameInput = document.getElementById("nameInput");
  var creditCardInput = document.getElementById("creditCardInput");
  var amountInput = document.getElementById("amountInput");
  var bankNameInput = document.getElementById("bankNameInput");
  
  if (nameInput.value === "") {
    alert("Name is required!");
  } else if (creditCardInput.value === "") {
    alert("Bank Account Number is required!");
  } else if (amountInput.value === "") {
    alert("Amount is required!");
  } else if (bankNameInput.value === "") {
    alert("Bank Name is required!");
  } else {
    alert("Domestic Money Transfer request is sent");
  }
}

function handleEnterInternational() {
  var nameInput = document.getElementById("nameInput");
  var creditCardInput = document.getElementById("creditCardInput");
  var amountInput = document.getElementById("amountInput");
  var bankNameInput = document.getElementById("bankNameInput");
  var countryInput = document.getElementById("countryInput");
  
  if (nameInput.value === "") {
    alert("Name is required!");
  } else if (creditCardInput.value === "") {
    alert("Bank Account Number is required!");
  } else if (amountInput.value === "") {
    alert("Amount is required!");
  } else if (bankNameInput.value === "") {
    alert("Bank Name is required!");
  } else if (countryInput.value === "") {
    alert("Country is required!");
  } else {
    alert("International Money Transfer request is sent");
  }
}

function handleCredit() {
  var creditDiv = document.getElementById("myCredit");
  if (creditDiv.style.display === "none") {
    creditDiv.style.display = "block";
  } else {
    creditDiv.style.display = "none";
  }
  
  // Enable all buttons
  var theftBtn = document.getElementById("theftBtn");
  var lossBtn = document.getElementById("lossBtn");
  var damageBtn = document.getElementById("damageBtn");
  
  theftBtn.disabled = false;
  lossBtn.disabled = false;
  damageBtn.disabled = false;
}

function handleTheft() {
  var theftBtn = document.getElementById("theftBtn");
  var myApply= document.getElementById("myApply");
  theftBtn.disabled = true;
  if (myApply.style.display === "none") {
    myApply.style.display = "block";
  } else {
    myApply.style.display = "none";
  }

}

function handleLoss() {
  var lossBtn = document.getElementById("lossBtn");
  var myApply= document.getElementById("myApply");
  lossBtn.disabled = true;
  if (myApply.style.display === "none") {
    myApply.style.display = "block";
  } else {
    myApply.style.display = "none";
  }
}

function handleDamage() {
  var damageBtn = document.getElementById("damageBtn");
  var myApply= document.getElementById("myApply");
  damageBtn.disabled = true;
  if (myApply.style.display === "none") {
    myApply.style.display = "block";
  } else {
    myApply.style.display = "none";
  }
}


function redirectToReport() {
  window.location.href = "Report.html";
}


   

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

function handleOverview() {
  // Toggle the display of the cards
  var revenueCard = document.getElementById("myRevenue");
  var revenue2Card = document.getElementById("myRevenue2");
  var revenue3Card = document.getElementById("myRevenue3");
  revenueCard.style.display = (revenueCard.style.display === "none") ? "block" : "none";
  revenue2Card.style.display = (revenue2Card.style.display === "none") ? "block" : "none";
  revenue3Card.style.display = (revenue3Card.style.display === "none") ? "block" : "none";
}

function handleTechnical(){
  var technicalCard = document.getElementById("myTechnical");
  var technical2Card = document.getElementById("myTechnical2");
  var technica3lCard = document.getElementById("myTechnical3");
  technicalCard.style.display = (technicalCard.style.display === "none") ? "block" : "none";
  technical2Card.style.display = (technical2Card.style.display === "none") ? "block" : "none";
  technica3lCard.style.display = (technica3lCard.style.display === "none") ? "block" : "none";
}

function handleCustomer(){
  var myCustomer = document.getElementById("myCustomer");
  var myCustomer2 = document.getElementById("myCustomer2");
  var myCustomer3 = document.getElementById("myCustomer3");
  myCustomer.style.display = (myCustomer.style.display === "none") ? "block" : "none";
  myCustomer2.style.display = (myCustomer2.style.display === "none") ? "block" : "none";
  myCustomer3.style.display = (myCustomer3.style.display === "none") ? "block" : "none";
}