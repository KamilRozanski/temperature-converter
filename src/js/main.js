"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const celsiusButton = document.querySelector('#button-c');
const fahrenheitButton = document.querySelector('#button-f');
const outputCel = document.querySelector('#container');
const outputFah = document.querySelector('#container-2');
const btnClear = document.querySelector('.clear')


outputCel.innerHTML = ('Tell me you temperature in Celsius:')
outputFah.innerHTML = ('Tell me you temperature in Fahrenheit:')


celsiusButton.addEventListener('click', () => {

  let temp = window.prompt('Tell me your temperature is Celsius');
  const tempF = temp * 1.8 + 32; // tempF convert censius to Fahrenheit.

  if (isNaN(temp)) { //  when in Not a number.
    outputCel.innerHTML = (`Hey ${temp} is not a number`);
  } else if ((temp === null) || (temp === "")) { // when is null or empty string.
    outputCel.innerHTML = ('Hey, you have to write something ?!')
  } else {

    if (temp <= 0) {
      outputCel.innerHTML = (`${temp} Celsius degrees is ${Math.floor(tempF)} Fahrenheit. 
      <br><br>  Water freezes at this temperature`);
    } else if ((temp < 0) && (temp <= 99)) {
      outputCel.innerHTML = (`${temp} Celsius degrees is ${Math.floor(tempF)} Fahrenheit. 
      <br><br> Water in this temperature is a liquid. `);
    } else {
      outputCel.innerHTML = (`${temp} Celsius degrees is ${Math.floor(tempF)} Fahrenheit. 
      <br><br> Water in this temperature is boiling.`);
    }
  }
});

fahrenheitButton.addEventListener('click', () => {

  let temp = window.prompt('Tell me your temperature is Fahrenheit');
  const tempC = (5 / 9) * (temp - 32);
  if (isNaN(temp)) {
    outputFah.innerHTML = (`Hey, ${temp} is not a number`);
  } else if ((temp === null) || (temp === "")) {
    outputFah.innerHTML = ('Hey, you have to write something ?!')
  } else {
    if (temp <= 32) {
      outputFah.innerHTML = (`${temp} Degrees fahrenheit is ${Math.floor(tempC)}
      celsius.<br><br> Water freezes at this temperature`)
    } else if ((temp < 32) && (temp <= 211)) {
      outputFah.innerHTML = (`${temp} Degrees fahrenheit is ${Math.floor(tempC)}<br><br>
      celsius.<br><br> Water in this temperature is a liquid. `)
    } else {
      outputFah.innerHTML = (`${temp} Degrees fahrenheit is ${Math.floor(tempC)}<br><br>
      celsius.<br><br> Water in this temperature is boiling.`)
    }

  }
});