const textview = document.querySelector('.textview');

//adding event delegation to improve performance
document.querySelector('.container').addEventListener('click', e => {
  if (e.target.matches('.screen-value')) {
    insertNumber(e.target.value);
  }
});

function insertNumber(num) {
  textview.value += num;
}

//calculate when clicked
document.querySelector('#equal').addEventListener('click', () => {
  let expression = textview.value;
  textview.value = eval(expression)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

//clear all function
document.querySelector('#clear').addEventListener('click', () => {
  textview.value = '';
});

//erase/delete frunction
document.querySelector('#back').addEventListener('click', () => {
  let currentValue = textview.value;
  textview.value = currentValue.substring(0, currentValue.length - 1);
});

//square root function
document.querySelector('#sqrt').addEventListener('click', () => {
  let sqrtValue = Math.sqrt(textview.value);
  textview.value = sqrtValue;
});
