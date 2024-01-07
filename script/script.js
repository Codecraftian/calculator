let calculation = localStorage.getItem('calculation') || '';

show();


function updateCalculation(value) {

  calculation += value;
  show();
  localStorage.setItem('calculation', calculation);
}

function show(){
  let num = document.querySelector('.shownumber').innerHTML = calculation;
  console.log(num);
}