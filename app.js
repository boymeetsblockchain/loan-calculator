// adding event listeners
const calc = document.querySelector('.btn')
calc.addEventListener('click',calculate);
function calculate (e){
  // getting ui varaibles
 const amount=document.querySelector('.principal').value;
 const time=document.querySelector('.time').value;
 const rate=document.querySelector('.rate').value;
 const year=document.querySelector('.year');
 const month=document.querySelector('.month');


//  doing the calculations
 const principal= parseFloat(amount);
 const years= parseFloat(time);
 const interest= parseFloat(rate);
 const  yearlyPayment= ((principal*years*interest)/100)+principal;
  const monthlyPayment= yearlyPayment/12;
  // displaying the answers
  if(isFinite(monthlyPayment)){
    year.value= yearlyPayment.toFixed(2);
    month.value=monthlyPayment.toFixed(2);
  }else{
    alert("Please enter a valid numbers");
  }
  document.querySelector('.results').style.display='block';
 e.preventDefault();
};