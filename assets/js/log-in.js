const inputs = document.querySelectorAll(".input");

function focusFunx() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunx);
});



// Last page
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submitBtn');

function checkInputs() {
  if (input1.value == 'admin' && input2.value == 'admin') {
    window.location.href= "";
  } else {
    alert("Wrong ID or Password. Please try again.");
  }
}

submitBtn.addEventListener('click', checkInputs);
