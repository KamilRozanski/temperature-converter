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


outputCel.innerHTML = ('Tell me you temperature in Celsius:')
outputFah.innerHTML = ('Tell me you temperature in Fahrenheit:')


celsiusButton.addEventListener('click', () => {

  let temp = window.prompt('Tell me your temperature is Celsius');
  const tempF = temp * 1.8 + 32;
  if (isNaN(temp)) {
    outputCel.innerHTML = (`Hey ${temp} is not a number`);
  } else if ((temp === null) || (temp === "")) {
    outputCel.innerHTML = ('Hej you have to write something')
  }

  if (temp <= 0) {
    outputCel.innerHTML = (`${temp} Celsius is ${Math.floor(tempF)}<br><br>
    Fahrenheit and water freezes at this temperature`)
  } else if ((temp < 0) || (temp <= 99)) {
    outputCel.innerHTML = (`${temp} Celsius is ${Math.floor(tempF)}<br><br>
    Fahrenheit and water in this temperature is a liquid. `)
  } else {
    outputCel.innerHTML = (`${temp} Celsius is ${Math.floor(tempF)}<br><br>
    Fahrenheit and water in this temperature is boiling.`)
  }

});

fahrenheitButton.addEventListener('click', () => {

  let temp = window.prompt('Tell me your temperature is Fahrenheit');
  const tempC = (5 / 9) * (temp - 32);
  if (isNaN(temp)) {
    outputFah.innerHTML = (`Hey ${temp} is not a number`);
  } else if ((temp === null) || (temp === "")) {
    outputFah.innerHTML = ('Hej you have to write something')
  // } else {
  //   outputFah.innerHTML = (`${temp} Fahrenheits is ${Math.floor(tempC)} Celsius`);
  // }
  }
  if (temp <= 32) {
    outputFah.innerHTML = (`${temp} Celsius is ${Math.floor(tempC)}<br><br>
    Fahrenheit and water freezes at this temperature`)
  } else if ((temp < 32) || (temp <= 211)) {
    outputFah.innerHTML = (`${temp} Celsius is ${Math.floor(tempC)}<br><br>
    Fahrenheit and water in this temperature is a liquid. `)
  } else {
    outputFah.innerHTML = (`${temp} Celsius is ${Math.floor(tempC)}<br><br>
    Fahrenheit and water in this temperature is boiling.`)
  }

})