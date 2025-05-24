//Creating the rhombus in one function, this way we can have every color alternating throughout the diamond, not just in each quarter of it.
function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  const counter = { value: 0 }; //for keeping track of odds and evens
  let rhombusHTML = "";
  
  // Upper half of rhombus
  for (let i = 0; i < pHeight; i++) {
    rhombusHTML += "<div style='font-family: monospace; line-height: 1;'>";
    rhombusHTML += "&nbsp;".repeat(pHeight - i - 1);
    
    // Left triangle (upLeft)
    for (let j = 0; j <= i; j++) {
      const color = (counter.value % 2 === 0) ? pColorOdd : pColorEven;
      rhombusHTML += `<span style='color:${color};'>${pSymbol}</span>`;
      counter.value++;
    }
    
    // Right triangle (upRight)
    for (let j = 0; j < i; j++) {
      const color = (counter.value % 2 === 0) ? pColorOdd : pColorEven;
      rhombusHTML += `<span style='color:${color};'>${pSymbol}</span>`;
      counter.value++;
    }
    
    rhombusHTML += "</div>";
  }
  
  // Lower half of rhombus
  for (let i = pHeight - 2; i >= 0; i--) {
    rhombusHTML += "<div style='font-family: monospace; line-height: 1;'>";
    rhombusHTML += "&nbsp;".repeat(pHeight - i - 1);
    
    // Left triangle (downLeft)
    for (let j = 0; j <= i; j++) {
      const color = (counter.value % 2 === 0) ? pColorOdd : pColorEven;
      rhombusHTML += `<span style='color:${color};'>${pSymbol}</span>`;
      counter.value++;
    }
    
    // Right triangle (downRight)
    for (let j = 0; j < i; j++) {
      const color = (counter.value % 2 === 0) ? pColorOdd : pColorEven;
      rhombusHTML += `<span style='color:${color};'>${pSymbol}</span>`;
      counter.value++;
    }
    
    rhombusHTML += "</div>";
  }
  
  document.getElementById("rhombus").innerHTML = rhombusHTML;
}
