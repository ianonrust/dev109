function addItem() {
  const input = document.getElementById('itemInput');
  const message = document.getElementById('message');
  const itemText = input.value.trim();

  try {
    if (!itemText) {
      throw new Error('Entry was empty');
    }

    const newEl = document.createElement('li');
    const newText = document.createTextNode(itemText);
    newEl.appendChild(newText);

    const position = document.getElementById('todo');
    position.appendChild(newEl);

    input.value = '';       //Extra Credit: Clears input box after item is added 
    message.textContent = ''; // Clear previous error 
  }
  
  catch (e) {
    console.log(e);         
    
  } 
  
  finally {
    if (!itemText) {
      message.textContent = 'Please enter an item before clicking Add.'; 
      input.value = '';
      // Avoid adding item if input is empty
      return;  // Instead of Break, use return
    }
  }
}
