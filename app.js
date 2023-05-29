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
function showModal() {
  document.getElementById("payment-modal").style.display = "block";
}
function payFully() {
  var dropdown = document.getElementById("myDropdown");
  var selectedIndex = dropdown.selectedIndex;
  if (selectedIndex !== -1 && selectedIndex !== 0) {
    dropdown.remove(selectedIndex);
  }
  document.getElementById("payment-modal").style.display = "none";
  alert("Thank you for paying in full!");
}
var value = 5000;
function payPartially() {
  var dropdown = document.getElementById("myDropdown");
  var selectedIndex = dropdown.selectedIndex;

  document.getElementById("payment-modal").style.display = "none";
  let toPay = prompt("How much would you like to pay?");
  if(toPay>value){
    alert("You can't pay more than the total amount");
    return;
  }
  value = value-toPay;
  if (selectedIndex !== -1 && selectedIndex !== 0) {
    dropdown.remove(selectedIndex);
  }
  var option = document.createElement("option");
  option.text = "Credit Card Bills - " + value + " EGP - deadline 20/10/2023";
  if(value==0){
  dropdown.remove(selectedIndex);
  }
  else{
    option.value = "CreditCard";
    dropdown.add(option);
  }
  alert("Thank you for choosing to pay partially.");
}
function removeSelectedBill() {
  var dropdown = document.getElementById("myDropdown");
  var selectedIndex = dropdown.selectedIndex;
  var ValueChosen = dropdown.options[selectedIndex].value;
  if (ValueChosen == "CreditCard"){
      showModal();
      return;
  }
  if (selectedIndex !== -1 && selectedIndex !== 0) {
    dropdown.remove(selectedIndex);
    alert("Bill paid");
  } else {
    alert("Please select a bill to pay");
  }
}

function currentAccountDetails() {
  var accountDetailsCard = document.getElementById("accountDetails1");
  if (accountDetailsCard.style.display === "none") {
    accountDetailsCard.style.display = "block";
  }
  else{
    accountDetailsCard.style.display = "none";
  }
}
  

function savingsAccountDetails() {
  // Show the hidden card
  var accountDetailsCard = document.getElementById("accountDetails2");
  if (accountDetailsCard.style.display === "none") {
    accountDetailsCard.style.display = "block";
    

  }
  else{
    accountDetailsCard.style.display = "none";
  
  }
  
    
  
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

    
      var accountDetailsCard = document.getElementById("accountDetails3");
      if (accountDetailsCard.style.display === "none") {
        accountDetailsCard.style.display = "block";
      }
      else{
        accountDetailsCard.style.display = "none";
      }
    
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

function handleNotify() {
  var notificationAlert = document.getElementById("myNotification8");
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

function redirectToSign(){
  window.location.href = "signUp.html";
}
   

function carLoanCredentials (){
if(document.getElementById("firstName").value=="" || document.getElementById("lastName").value=="" || document.getElementById("Amount").value<1){
    alert('Please enter valid credentials')
}
else{
    alert('Loan Request Sent Successfuly!')
  }
}

function loginCredentials() {
  var username = document.getElementById("Username").value;
  var password = document.getElementById("Password").value;

  if (!username && !password) {
    alert("Username and password are empty. Please fill them.");
  } else if (!username) {
    alert("Username is empty. Please fill it.");
  } else if (!password) {
    alert("Password is empty. Please fill it.");
  } else {
    if (username === "client" && password === "client") {
      window.location.assign('Accounts.html');
    } else if (username === "admin" && password === "admin") {
      window.location.assign('admin.html');
    } else if (username === "banker" && password === "banker") {
      window.location.assign('banker.html');
    } else {
      alert("Invalid username or password.");
    }
  }
}


function signUp(){

  var termsCheckbox = document.getElementById("TermsCheckbox");

  if(document.getElementById("SignUpUsername").value=="" || document.getElementById("SignUpPassword").value=="" ){
      alert('Please enter valid credentials');
      return;
  }
  else if (!termsCheckbox.checked) {
    alert("Please agree to the Terms of Service.");
    return;
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

function handleTechnical() {
  var technicalCard = document.getElementById("myTechnical");
  var technical2Card = document.getElementById("myTechnical2");
  var technical3Card = document.getElementById("myTechnical3");

  technicalCard.style.display = (technicalCard.style.display === "none") ? "block" : "none";
  technical2Card.style.display = (technical2Card.style.display === "none") ? "block" : "none";
  technical3Card.style.display = (technical3Card.style.display === "none") ? "block" : "none";
}

function handleCustomer(){
  var myCustomer = document.getElementById("myCustomer");
  var myCustomer2 = document.getElementById("myCustomer2");
  var myCustomer3 = document.getElementById("myCustomer3");
  myCustomer.style.display = (myCustomer.style.display === "none") ? "block" : "none";
  myCustomer2.style.display = (myCustomer2.style.display === "none") ? "block" : "none";
  myCustomer3.style.display = (myCustomer3.style.display === "none") ? "block" : "none";
}

function toggleNotification() {
  var notification = document.getElementById("myNotification1");
  if (notification.style.display === "none") {
    notification.style.display = "block";
  } else {
    notification.style.display = "none";
  }
}

function toggleReminder(){
  var reminder = document.getElementById("myReminder1");
  if (reminder.style.display === "none") {
    reminder.style.display = "block";
  } else {
    reminder.style.display = "none";
  }
}

function toggleForm() {
  var form = document.getElementById("newAccountForm");
 // var accountButton = document.getElementById("navbarDropdownMenuLink");

  form.style.display = "block";

 /* accountButton.addEventListener("click", function() {
    form.style.display = "none";
  });*/

  // Add an event listener to the "Confirm" button to hide the form when clicked
  var confirmButton = document.getElementById("confirm");
  confirmButton.addEventListener("click", function() {
    form.style.display = "none";
  });
}

function toggleClose() {
  var form = document.getElementById("newAccountForm2");
  var accountButton = document.getElementById("navbarDropdownMenuLink");

  form.style.display = "block";

  accountButton.addEventListener("click", function() {
    form.style.display = "none";
  });

  // Add an event listener to the "Confirm" button to hide the form when clicked
  var confirmButton = document.getElementById("confirm2");
  confirmButton.addEventListener("click", function() {
    form.style.display = "none";
  });
}


function hideForm() {
  var form = document.getElementById("newAccountForm");
  form.style.display = "none";
}





/*function addNewAccount() {
  var accountTypeInput = document.getElementById("inputAccountType");
  var accountType = accountTypeInput.value;

  if (accountType.trim() === "") {
    alert("Please enter an account type.");
    return;
  }

  var dropdownMenu = document.getElementById("accountDropdownMenu");

  // Check if the account type already exists in the dropdown menu
  var existingAccount = dropdownMenu.querySelector("a[data-account-type='" + accountType + "']");
  if (existingAccount) {
    alert("Account type already exists.");
    return;
  }

  // Create a new dropdown item for the new account
  var newDropdownItem = document.createElement("a");
  newDropdownItem.classList.add("dropdown-item");
  newDropdownItem.textContent = accountType;
  newDropdownItem.setAttribute("data-account-type", accountType);
  newDropdownItem.onclick = function() {
    showNewAccountDetails(accountType);
  };

  // Add the new account item to the dropdown menu
  dropdownMenu.appendChild(newDropdownItem);

  // Clear the input field
  accountTypeInput.value = "";
}*/

function showNewAccountDetails(accountType) {
  var accountDetails1 = document.getElementById("accountDetails1");
  var accountDetails2 = document.getElementById("accountDetails2");

  accountDetails1.style.display = "none";
  accountDetails2.style.display = "none";

  

    // Show the corresponding account details card based on the account type
    if (accountType === "Current Account") {
      accountDetails1.style.display = "block";
    } else if (accountType === "Savings Account") {
      accountDetails2.style.display = "block";
    }
  }






function toggleDashboard() {
  var accountInfo = document.getElementById("AccountInfo");
  var billingInfo = document.getElementById("BillingInfo");

  if (accountInfo.style.display === "none") {
    accountInfo.style.display = "block";
    billingInfo.style.display = "block";
  } else {
    accountInfo.style.display = "none";
    billingInfo.style.display = "none";
  }
}

/*function closeAccount() {
  var accountNameInput = document.getElementById("inputAccountName");
  var accountName = accountNameInput.value;

  if (accountName.trim() === "") {
    alert("Please enter an account name.");
    return;
  }

  var dropdownMenu = document.getElementById("accountDropdownMenu");

  // Find the account item with the specified account name
  var accountItems = dropdownMenu.getElementsByClassName("dropdown-item");
  var accountItem = null;

  for (var i = 0; i < accountItems.length; i++) {
    if (accountItems[i].textContent === accountName) {
      accountItem = accountItems[i];
      break;
    }
  }

  if (!accountItem) {
    alert("Account not found.");
    return;
  }

  // Remove the account item from the dropdown menu
  dropdownMenu.removeChild(accountItem);

  // Clear the input field
  accountNameInput.value = "";
}*/

function togglePastTransactions() {
  var pastTransactions = document.getElementById("pastTransactions");
  if (pastTransactions.style.display === "none") {
    pastTransactions.style.display = "block";
  } else {
    pastTransactions.style.display = "none";
  }
}

function TransferPager(){
  window.location.href = "Transfer.html"
}

function handleNewNotify(){
  var notificationAlert = document.getElementById("myNewNotification");
  notificationAlert.style.display = "block";
}

function toggleProfile() {
  var profileTab = document.getElementById("v-pills-profile");
  if (profileTab.style.display === "none") {
    profileTab.style.display = "block";
  } else {
    profileTab.style.display = "none";
  }
}

function toggleOverview(){
  var profileTab = document.getElementById("v-pills-messages");
  if (profileTab.style.display === "none") {
    profileTab.style.display = "block";
  } else {
    profileTab.style.display = "none";
  }
}

function toggleRequests(){
  var profileTab = document.getElementById("v-pills-settings");
  if (profileTab.style.display === "none") {
    profileTab.style.display = "block";
  } else {
    profileTab.style.display = "none";
  }
}
function handleNotify1() {
  var notificationAlert = document.getElementById("myNotification5");
  notificationAlert.style.display = "block";
}
var removeButtons = document.getElementsByClassName('removeButton');

for (var i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener('click', function() {
    var listItem = this.parentNode; // Get the parent list item
    listItem.parentNode.removeChild(listItem); // Remove the list item
  });
}

function acceptRequest(element) {
  var card = element.closest(".card");
  card.style.display = "none";

  // Shift the remaining cards
  var remainingCards = document.querySelectorAll(".card:not([style='display: none;'])");
  var cardIndex = Array.from(remainingCards).indexOf(card);
  for (var i = cardIndex + 1; i < remainingCards.length; i++) {
    remainingCards[i].style.transform = `translateY(-${i * 24}px)`;
  }

  // Store the accepted status in sessionStorage for 1 hour (3600000 milliseconds)
  var expirationTime =new Date().getTime() + 120000;
  sessionStorage.setItem("accountStatus", JSON.stringify({ status: "Accepted Account", expires: expirationTime }));
}

function rejectRequest(element) {
  var card = element.closest(".card");
  card.style.display = "none";

  // Shift the remaining cards
  var remainingCards = document.querySelectorAll(".card:not([style='display: none;'])");
  var cardIndex = Array.from(remainingCards).indexOf(card);
  for (var i = cardIndex + 1; i < remainingCards.length; i++) {
    remainingCards[i].style.transform = `translateY(-${i * 24}px)`;
  }

  // Store the rejected status in sessionStorage for 1 hour (3600000 milliseconds)
  var expirationTime =  new Date().getTime() +120000;
  sessionStorage.setItem("accountStatus", JSON.stringify({ status: "Rejected Account", expires: expirationTime }));
}

function toggleReminderAdmin(){
  var reminder = document.getElementById("AdminReminder");
  if (reminder.style.display === "none") {
    reminder.style.display = "block";
  } else {
    reminder.style.display = "none";
  }
}


function handleResponse(response) {
  alert("Request is " + response);
  var card = event.target.closest(".card");
  card.style.display = "none";

  // Shift the remaining cards
  var remainingCards = document.querySelectorAll(".card:not([style='display: none;'])");
  var cardIndex = Array.from(remainingCards).indexOf(card);
  for (var i = cardIndex + 1; i < remainingCards.length; i++) {
    remainingCards[i].style.transform = `translateY(-${i * 24}px)`;
  }
}

