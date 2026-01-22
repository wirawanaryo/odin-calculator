const sMonitor = document.getElementById("sMonitor");
const bMonitor = document.getElementById("bMonitor");
const numButtons = document.querySelectorAll(".numButton");
const pointButton = document.getElementById("pointButton");
const delButton = document.getElementById("delButton");
const clearButton = document.getElementById("clearButton");
const percentButton = document.getElementById("percentButton");
const equalButton = document.getElementById("equalButton");

const mainOps = document.querySelectorAll(".mainOps");

//flags
let allowDot = true; 
let allowOp = true;
let allowEq = false;
let allowPercent = true;
let continueCalc = false;
let curNum = 0;
let storedNum = NaN;
let curOP ="";

numButtons.forEach(numButton =>{    
  numButton.addEventListener("click", function() {
    if (continueCalc === true) {                 
      bMonitor.textContent = "";       
      continueCalc = false; 
      allowEq = true; 
      allowDot = true;  

      // change
      allowPercent = true;
    };
    if (bMonitor.textContent.length < 12) {
      bMonitor.append(numButton.textContent);      
    };   
    if (sMonitor.textContent.length < 25) {
      sMonitor.append(numButton.textContent);      
    };  
  });
});


mainOps.forEach(mainOp =>{    
  mainOp.addEventListener("click", function() {
    if (allowOp === true) {
      curOP = mainOp.textContent;

      sMonitor.append(mainOp.textContent);     
      storedNum = Number(bMonitor.textContent);
      bMonitor.textContent = "";
      allowOp = false;
      allowEq = true;  
      allowDot = true; 
      
      // change
      allowPercent = true;

    }else if(continueCalc === false && bMonitor.textContent){  
      sMonitor.append(mainOp.textContent)
      calculate()    
      allowOp = false;
      allowEq = false;      
      continueCalc = true;
      curOP = mainOp.textContent;

      // change
      allowPercent = true;
    };      
  });
});

function calculate() {
  let ans = 0;  
  curNum = Number(bMonitor.textContent);
  ans = operate(curOP);
  bMonitor.textContent = `${ans}`;    
  storedNum = ans;
  curNum = 0;
}
equalButton.addEventListener("click", function() {    
  if (allowEq === true) {
    calculate();   
    allowEq = false;
    allowOp = true;
    allowDot = true;

    // change
    allowPercent = true;
  }   
});

delButton.addEventListener("click", function() { 
  if(continueCalc === true){
    return;
  }    
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
  
  // change
  allowPercent = true;

  storedNum = 0;
  curNum = 0;
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

percentButton.addEventListener("click", function() { 
  if (allowPercent=== true && bMonitor.textContent ) {
    let percentage = Number(bMonitor.textContent)/100;
    bMonitor.textContent = Number(percentage.toFixed(5));
    allowPercent = false;
  }      
});

function operate(operator) {
  let result = 0
  switch (operator) {
    case "+":
      result =  storedNum+curNum;
      return Number(result.toFixed(3));        
    case "-":
      result =  storedNum-curNum;
      return Number(result.toFixed(3));   
    case "×":
      result = storedNum*curNum;      
      return Number(result.toFixed(3));  
    case "÷":
      result = storedNum/curNum;
      return Number(result.toFixed(3));    
    default:
      return result;
  }  
}

// function storeScreen(string) {
//   if (string.includes("%")) {
//     let percentage = string.slice(0,-1)/100
//     return Number(Number(percentage.toFixed(3)))
//   } else {
//     return Number(string);
//   }
// }