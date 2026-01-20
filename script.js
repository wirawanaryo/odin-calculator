const sMonitor = document.getElementById("sMonitor");
const bMonitor = document.getElementById("bMonitor");
const testButton = document.getElementById("testbutton");
const numButtons = document.querySelectorAll(".numButton");
const pointButton = document.getElementById("pointButton");
const delButton = document.getElementById("delButton");
const clearButton = document.getElementById("clearButton");

numButtons.forEach(numButton =>{  
  numButton.addEventListener("click", function() {
    if (bMonitor.textContent.length < 12) {
      bMonitor.append(numButton.textContent);      
    };    
  });
});

delButton.addEventListener("click", function() {   
  bMonitor.textContent = bMonitor.textContent.slice(0,-1);  
});

clearButton.addEventListener("click", function() {   
  bMonitor.textContent = "";
  sMonitor.textContent = "";
});

pointButton.addEventListener("click", function() {   
  if (bMonitor.textContent.length < 12 && !bMonitor.textContent.includes(".")) {
      bMonitor.append(pointButton.textContent);      
    };  
});