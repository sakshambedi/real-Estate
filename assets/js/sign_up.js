// slide 1
const input1a = document.getElementById('input1a');
const input2a = document.getElementById('input2a');
const input3a = document.getElementById('input3a');
const submitBtn1a = document.getElementById('submitBtn1a');
const submitBtn2a = document.getElementById('submitBtn2a');
const submitBtn3a = document.getElementById('submitBtn3a');

function checkInputs2() {
  if (input1a.value.trim() !== '' && input2a.value.trim() !== '' && input3a.value.trim() !== '') {
    submitBtn1a.classList.add('done_default');
    submitBtn1a.classList.remove('disabled_default');
    submitBtn2a.classList.add('done_default');
    submitBtn2a.classList.remove('disabled_default');
    submitBtn3a.classList.add('cancel')
  } else {
    submitBtn1a.classList.add('disabled_default');
    submitBtn2a.classList.remove('disabled_default');
  }
  console.log(input1a.value.trim() !== '' && input2a.value.trim() !== '' && input3a.value.trim() !== '');
}


input1a.addEventListener('input', checkInputs2);
input2a.addEventListener('input', checkInputs2);
input3a.addEventListener('input', checkInputs2);


// slide 2
const input1b = document.getElementById('input1b');
const input2b = document.getElementById('input2b');
const input3b = document.getElementById('input3b');
const input4b = document.getElementById('input4b');
const submitBtn1b = document.getElementById('submitBtn1b');
const submitBtn2b = document.getElementById('submitBtn2b');

function checkInputs3() {
  if (input1b.value.trim() !== '' && input2b.value.trim() !== '' && input3b.value.trim() !== ''  && input4b.value.trim() !== '') {
    submitBtn1b.classList.add('done_default');
    submitBtn1b.classList.remove('disabled_default');
    submitBtn2b.classList.add('done_default');
    submitBtn2b.classList.remove('disabled_default');

  } else {
    submitBtn1a.classList.add('disabled_default');
    submitBtn2a.classList.remove('disabled_default');
  }
}

input1b.addEventListener('input', checkInputs3);
input2b.addEventListener('input', checkInputs3);
input3b.addEventListener('input', checkInputs3);
input4b.addEventListener('input', checkInputs3);



// Last page
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');
const input7 = document.getElementById('input7');
const submitBtn = document.getElementById('submitBtn');

function checkInputs() {
  if (input1.value.trim() !== '' && input2.value.trim() !== '' && input3.value.trim() !== ''
  && input4.value.trim() !== '' && input5.value.trim() !== '' && input6.value.trim() !== '' && input7.value.trim() !== '') {
    submitBtn.classList.add('done');
    submitBtn.classList.remove('disabled');
  } else {
    submitBtn.classList.add('disabled');
  }
}

input1.addEventListener('input', checkInputs);
input2.addEventListener('input', checkInputs);
input3.addEventListener('input', checkInputs);
input4.addEventListener('input', checkInputs);
input5.addEventListener('input', checkInputs);
input6.addEventListener('input', checkInputs);
input7.addEventListener('input', checkInputs);
