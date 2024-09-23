function ageInDays() {
  const d = new Date();
  let year = d.getFullYear();

  // let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // let dayName = days[d.getDay()];
  const day     = d.getUTCDate();
  let month = d.getMonth() + 1;
  let dmy = `${day} ${month} ${year}`;
  console.log(dmy);
 

  let birthYear = document.getElementById("years").value 
  let bYear = (year - birthYear)*365;

  let message = document.getElementById("message");

  let erroMessage = document.getElementById("error")

  if(birthYear === ""){
    alert('Please enter your age first')
    message.textContent = "";
  }
  else if (birthYear > year){
    erroMessage.textContent = 'Invalid year';
    message.textContent = "";

  }
  else{
    message.textContent = `Your are ${bYear} days old.`
  }
}

function reset() {
  document.getElementById("message").textContent = "";
  document.getElementById("years").value = "";
  document.getElementById("error").textContent ="";
}

const calculaterAge = document.getElementById("btn-click");

calculaterAge.addEventListener("click", ageInDays);

const clear = document.getElementById("btn-reset");

clear.addEventListener("click", reset)