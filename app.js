function addCheckbox() {
  var checkboxList = document.getElementById("checkboxList");
  var newCheckboxInput = document.getElementById("newCheckboxInput");

  // Create a new checkbox element
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "checkboxItem";
  checkbox.value = newCheckboxInput.value;

  // Create a label element for the checkbox
  var label = document.createElement("label");
  label.appendChild(document.createTextNode(newCheckboxInput.value));

  // Create a list item element
  var listItem = document.createElement("li");

  // Append the checkbox and label to the list item
  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  // Append the list item to the checkbox list
  checkboxList.appendChild(listItem);

  // Clear the input field
  newCheckboxInput.value = "";
}
function removeCheckbox(checkbox) {
  var listItem = checkbox.parentNode;
  var checkboxList = listItem.parentNode;
  checkboxList.removeChild(listItem);
}
function addCheckbox() {
  var checkboxList = document.getElementById("checkboxList");
  var newCheckboxInput = document.getElementById("newCheckboxInput");

  // Create a new checkbox element
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "checkboxItem";
  checkbox.value = newCheckboxInput.value;

  // Create a label element for the checkbox
  var label = document.createElement("label");
  label.appendChild(document.createTextNode(newCheckboxInput.value));

  // Create a list item element
  var listItem = document.createElement("li");

  // Create a remove button element
  var removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.onclick = function() {
    removeCheckbox(checkbox);
  };

  // Append the checkbox, label, and remove button to the list item
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(removeButton);

  // Append the list item to the checkbox list
  checkboxList.appendChild(listItem);

  // Clear the input field
  newCheckboxInput.value = "";
} 

function removeSelectedItem() {
  var dropdown = document.getElementById("myDropdown");
  var selectedIndex = dropdown.selectedIndex;

  if (selectedIndex !== -1) {
    dropdown.remove(selectedIndex);
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

    var newLabel3 = document.createElement("button");
    newLabel3.innerHTML = '<button type="button" class="btn btn-danger" onclick="alert()">Delete Account</button>'


    
    var newContainer = document.createElement("div");
    newContainer.appendChild(newLabel);
    newContainer.appendChild(newLabel2);
    newContainer.appendChild(lineBreak);
    newContainer.appendChild(newLabel3);
    
  
  
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

    var newLabel3 = document.createElement("button");
    newLabel3.innerHTML = '<button type="button" class="btn btn-danger" onclick="alert()">Delete Account</button>'
    
    var newContainer = document.createElement("div");
    newContainer.appendChild(newLabel);
    newContainer.appendChild(newLabel2);
    newContainer.appendChild(lineBreak);
    newContainer.appendChild(newLabel3);
    
  
  
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
    newLabel2.textContent = " ZERO EGP, ya fa2eer";
    newLabel2.style = "font-size: 20px;"
    newLabel2.id = "currentAccountBalance"

    var newLabel3 = document.createElement("button");
    newLabel3.innerHTML = '<button type="button" class="btn btn-danger" onclick="alert()">Delete Account</button>'
    
    var newContainer = document.createElement("div");
    newContainer.appendChild(newLabel);
    newContainer.appendChild(newLabel2);
    newContainer.appendChild(lineBreak);
    newContainer.appendChild(newLabel3);
    
  
  
    // Add the new element to the container
    var container = document.getElementById("accountDetails");
    container.appendChild(newContainer);
}
  
function addBankAccount() { 
    var dropDown = document.getElementById("accountsDropDownMenu")
    
    var newAccount = document.createElement("a")
    newAccount.innerHTML = '<a class="dropdown-item" onclick="newAccountDetails()"> New Account</a>'
    dropDown.appendChild(newAccount)
}


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
}