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
}
