const sMonitor = document.getElementById("sMonitor");
const bMonitor = document.getElementById("bMonitor");
const testButton = document.getElementById("testbutton");
const numButtons = document.querySelectorAll(".numButton");
const pointButton = document.getElementById("pointButton");
const delButton = document.getElementById("delButton");
const clearButton = document.getElementById("clearButton");
const plusButton = document.getElementById("plusButton");
const equalButton = document.getElementById("equalButton");

//flags
let allowDot = true; 
let allowOp = true;
let allowEq = false;
let calcArray = [];

numButtons.forEach(numButton =>{  
  numButton.addEventListener("click", function() {
    if (bMonitor.textContent.length < 12) {
      bMonitor.append(numButton.textContent);      
    };   
    if (sMonitor.textContent.length < 25) {
      sMonitor.append(numButton.textContent);      
    };  
  });
});

plusButton.addEventListener("click", function() {    
  if (allowOp === true) {
    sMonitor.append(plusButton.textContent); 
    calcArray.push(bMonitor.textContent);       
    bMonitor.textContent = "";
    allowOp = false;
    allowEq = true;
  }  
});

equalButton.addEventListener("click", function() {    
  if (allowEq === true) {
    let ans = 0;
    calcArray.push(bMonitor.textContent);
    ans = Number(calcArray[0])+Number(calcArray[1])
    bMonitor.textContent = `${ans}`;
    console.log(calcArray); 
    calcArray = [];    
    allowEq = false;
    allowOp = true;
  }   
});

delButton.addEventListener("click", function() {     
  if (sMonitor.textContent.at(-1) === '.') {
    allowDot = true;
  }
  bMonitor.textContent = bMonitor.textContent.slice(0,-1); 
  sMonitor.textContent = sMonitor.textContent.slice(0,-1);    
});

function clearScreen(opt) {
  if (opt==1) {
    bMonitor.textContent = "";
    sMonitor.textContent = "";
  } else {
    bMonitor.textContent = "";
  }  
  allowDot = true;
  allowOp = true;
  calcArray = [];
};
clearButton.addEventListener("click", () => {
    clearScreen(1);
});

pointButton.addEventListener("click", function() {    
  if (bMonitor.textContent.length > 0 && bMonitor.textContent.length < 12 && !bMonitor.textContent.includes(".")) {
      bMonitor.append(pointButton.textContent);      
    };  
  if (sMonitor.textContent.length > 0 && sMonitor.textContent.length < 25 && allowDot === true) {
      sMonitor.append(pointButton.textContent);  
      allowDot = false;    
    };
});