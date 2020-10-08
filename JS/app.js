const form = document.querySelector('.form');
let primeNumberArray = [];
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let startValue = parseInt(document.querySelector('.start').value);
  let endValue = parseInt(document.querySelector('.end').value);
  for (let i = startValue; i <= endValue; i++) {
    let flag = 0;
    
    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        primeNumberArray.push(i);
    }
}
let uniqueArray = [...new Set(primeNumberArray)]
 buildTable(uniqueArray);
})
//create table dynamically
function buildTable(data){
  let table=document.createElement("table");
  table.classList.add("table");
  let tr=document.createElement("tr");
  let td=document.createElement("td");
  td.classList.add("td");
  tr.append(td);
  for(let col=0; col<data.length; col++) {
    td=document.createElement("td");
    td.classList.add("td");
    td.textContent=data[col];
    tr.append(td);
  }
  table.append(tr);
  for(let row=0; row<data.length; row++) {
    tr=document.createElement("tr");
    td=document.createElement("td");
    td.classList.add("td");
    td.textContent=data[row];
    tr.append(td);
    for(let col=0; col<data.length; col++) {
      td=document.createElement("td");
      td.classList.add("td");
      td.textContent=data[row]*data[col];
      tr.append(td);
    }
    table.append(tr);
  }
  
  let tableDiv = document.querySelector('.tableDiv');
  if(tableDiv.children.length) tableDiv.replaceChild(table, tableDiv.childNodes[0]);
  else tableDiv.append(table)
}
