// Get user input for the multiplication table
var table = prompt("Enter a number for the multiplication table:");
table = parseInt(table); // Convert input to integer

var i = 1; // Set counter to 1
var msg = '<h2>Multiplication Table</h2>'; // Message with heading

// Do multiplication
while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;

/* Removed unused code
var table = 3;             // Unit of table
var operator = 'addition'; // Type of calculation
if (operator === 'addition') {
  // Do addition
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
}
*/
