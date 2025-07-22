const table = document.querySelector("#pixel-table");
const addRowButton = document.querySelector("#add-row");
const colorPicker = document.querySelector("#color-picker");

// Track the currently selected color
let selectedColor = colorPicker.value;

// Update the selectedColor when user changes the dropdown
colorPicker.addEventListener("change", function (event) {
  selectedColor = event.target.value;
});

// Function to create and add a new row with n cells
function makeRow() {
  const newRow = document.createElement("tr");

  for (let i = 0; i <40; i++) {
    const td = document.createElement("td");

    // Add click event to each cell
    td.addEventListener("click", function (event) {
      const cell = event.target;

      // Toggle color
      if (cell.className === selectedColor) {
        cell.className = ""; // turn off
      } else {
        cell.className = selectedColor; // turn on
      }
    });

    newRow.appendChild(td);
  }

  table.appendChild(newRow);
}

// Add row when button is clicked
addRowButton.addEventListener("click", makeRow);

