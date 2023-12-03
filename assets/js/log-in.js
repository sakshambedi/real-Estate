const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submitBtn')
  ;

function checkInputs() {
  event.preventDefault()
  if (input1.value == 'admin' && input2.value == 'admin') {

    window.location = "./../index.html";
  } else {
    alert("Please try username: ADMIN and Password:ADMIN for marking instance.");
  }
}

submitBtn.addEventListener('click', checkInputs);