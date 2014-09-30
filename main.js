
var numOne = document.getElementById('num_one');
var numTwo = document.getElementById('num_two');
var calcButton = document.getElementById('calculateBtn');
var answer;
var resultArea = document.getElementById("answer");
var subtractButton = document.getElementById('subtractBtn')
var multiplyButton = document.getElementById('multiplyBtn')
var divideButton = document.getElementById('divideBtn')


calcButton.onclick = function(){
  answer = parseInt(numOne.value) + parseInt(numTwo.value);
  resultArea.innerHTML = answer;

};

subtractButton.onclick = function(){
  answer = parseInt(numOne.value) - parseInt(numTwo.value);
  resultArea.innerHTML = answer;

};

multiplyButton.onclick = function(){
  answer = parseInt(numOne.value) * parseInt(numTwo.value);
  resultArea.innerHTML = answer;

};

divideButton.onclick = function(){
  answer = parseInt(numOne.value) / parseInt(numTwo.value);
  resultArea.innerHTML = answer;

};
