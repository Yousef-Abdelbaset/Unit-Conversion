/*
1 meter = 3.281 feet   * 3.28084  ||||  / 3.2808
1 liter = 0.264 gallon  * 0.264172   ||||  * 3.78541
1 kilogram = 2.204 pound  * 2.2046  ||||   / 2.2046

*/

let inputEl = document.getElementById("input-El");

const ConvertBtn = document.getElementById("Convert-Btn");


let firstEl = document.getElementById("first-el");
let secondEl = document.getElementById("second-el");
let thirdEl = document.getElementById("third-el");


ConvertBtn.addEventListener("click", function(){
    firstEl.innerHTML = `${inputEl.value} m = ${(inputEl.value * 3.2808).toFixed(3)} ft <span>|</span> 
    ${inputEl.value} ft = ${(inputEl.value / 3.2808).toFixed(3)} m`;

    secondEl.innerHTML = `${inputEl.value} L = ${(inputEl.value * 0.264172).toFixed(3)} gal <span>|</span> 
    ${inputEl.value} gal = ${(inputEl.value * 3.78541).toFixed(3)} L`;


    thirdEl.innerHTML = `${inputEl.value} kg = ${(inputEl.value * 2.2046).toFixed(3)} lb <span>|</span> 
    ${inputEl.value} lb = ${(inputEl.value / 2.2046).toFixed(3)} kg`;

    inputEl.value = ''


})
