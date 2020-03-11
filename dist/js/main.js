!function(e){var t={};function n(l){if(t[l])return t[l].exports;var c=t[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(l,c,function(t){return e[t]}.bind(null,c));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\n\nconst celsiusButton = document.querySelector('#button-c');\nconst fahrenheitButton = document.querySelector('#button-f');\nconst outputCel = document.querySelector('#container');\nconst outputFah = document.querySelector('#container-2');\nconst btnClear = document.querySelector('.clear')\n\n\noutputCel.innerHTML = ('Tell me you temperature in Celsius:')\noutputFah.innerHTML = ('Tell me you temperature in Fahrenheit:')\n\n\ncelsiusButton.addEventListener('click', () => {\n\n  let temp = window.prompt('Tell me your temperature is Celsius');\n  const tempF = temp * 1.8 + 32; // tempF convert censius to Fahrenheit.\n\n  if (isNaN(temp)) { //  when in Not a number.\n    outputCel.innerHTML = (`Hey ${temp} is not a number`);\n  } else if ((temp === null) || (temp === \"\")) { // when is null or empty string.\n    outputCel.innerHTML = ('Hey, you have to write something ?!')\n  } else {\n\n    if (temp <= 0) {\n      outputCel.innerHTML = (`${temp} Celsius degrees is ${Math.floor(tempF)} Fahrenheit. \n      <br><br>  Water freezes at this temperature`);\n    } else if ((temp < 0) && (temp <= 99)) {\n      outputCel.innerHTML = (`${temp} Celsius degrees is ${Math.floor(tempF)} Fahrenheit. \n      <br><br> Water in this temperature is a liquid. `);\n    } else {\n      outputCel.innerHTML = (`${temp} Celsius degrees is ${Math.floor(tempF)} Fahrenheit. \n      <br><br> Water in this temperature is boiling.`);\n    }\n  }\n});\n\nfahrenheitButton.addEventListener('click', () => {\n\n  let temp = window.prompt('Tell me your temperature is Fahrenheit');\n  const tempC = (5 / 9) * (temp - 32);\n  if (isNaN(temp)) {\n    outputFah.innerHTML = (`Hey, ${temp} is not a number`);\n  } else if ((temp === null) || (temp === \"\")) {\n    outputFah.innerHTML = ('Hey, you have to write something ?!')\n  } else {\n    if (temp <= 32) {\n      outputFah.innerHTML = (`${temp} Fahrenheit degrees is ${Math.floor(tempC)}\n      celsius.<br><br> Water freezes at this temperature`)\n    } else if ((temp < 32) && (temp <= 211)) {\n      outputFah.innerHTML = (`${temp} Fahrenheit degrees is ${Math.floor(tempC)}<br><br>\n      celsius.<br><br> Water in this temperature is a liquid. `)\n    } else {\n      outputFah.innerHTML = (`${temp} Fahrenheit degrees is ${Math.floor(tempC)}<br><br>\n      celsius.<br><br> Water in this temperature is boiling.`)\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EsZ0NBQWdDOztBQUVoQyxvQkFBb0I7QUFDcEIsa0NBQWtDLEtBQUs7QUFDdkMsR0FBRyw2Q0FBNkM7QUFDaEQ7QUFDQSxHQUFHOztBQUVIO0FBQ0EsZ0NBQWdDLEtBQUssc0JBQXNCLGtCQUFrQjtBQUM3RTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsS0FBSyxzQkFBc0Isa0JBQWtCO0FBQzdFO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxLQUFLLHNCQUFzQixrQkFBa0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsS0FBSztBQUN4QyxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxnQ0FBZ0MsS0FBSyx5QkFBeUI7QUFDOUQ7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLEtBQUsseUJBQXlCLGtCQUFrQjtBQUNoRjtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsS0FBSyx5QkFBeUIsa0JBQWtCO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xuXG5cbmNvbnN0IGNlbHNpdXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLWMnKTtcbmNvbnN0IGZhaHJlbmhlaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLWYnKTtcbmNvbnN0IG91dHB1dENlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbmNvbnN0IG91dHB1dEZhaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXItMicpO1xuY29uc3QgYnRuQ2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXInKVxuXG5cbm91dHB1dENlbC5pbm5lckhUTUwgPSAoJ1RlbGwgbWUgeW91IHRlbXBlcmF0dXJlIGluIENlbHNpdXM6Jylcbm91dHB1dEZhaC5pbm5lckhUTUwgPSAoJ1RlbGwgbWUgeW91IHRlbXBlcmF0dXJlIGluIEZhaHJlbmhlaXQ6JylcblxuXG5jZWxzaXVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gIGxldCB0ZW1wID0gd2luZG93LnByb21wdCgnVGVsbCBtZSB5b3VyIHRlbXBlcmF0dXJlIGlzIENlbHNpdXMnKTtcbiAgY29uc3QgdGVtcEYgPSB0ZW1wICogMS44ICsgMzI7IC8vIHRlbXBGIGNvbnZlcnQgY2Vuc2l1cyB0byBGYWhyZW5oZWl0LlxuXG4gIGlmIChpc05hTih0ZW1wKSkgeyAvLyAgd2hlbiBpbiBOb3QgYSBudW1iZXIuXG4gICAgb3V0cHV0Q2VsLmlubmVySFRNTCA9IChgSGV5ICR7dGVtcH0gaXMgbm90IGEgbnVtYmVyYCk7XG4gIH0gZWxzZSBpZiAoKHRlbXAgPT09IG51bGwpIHx8ICh0ZW1wID09PSBcIlwiKSkgeyAvLyB3aGVuIGlzIG51bGwgb3IgZW1wdHkgc3RyaW5nLlxuICAgIG91dHB1dENlbC5pbm5lckhUTUwgPSAoJ0hleSwgeW91IGhhdmUgdG8gd3JpdGUgc29tZXRoaW5nID8hJylcbiAgfSBlbHNlIHtcblxuICAgIGlmICh0ZW1wIDw9IDApIHtcbiAgICAgIG91dHB1dENlbC5pbm5lckhUTUwgPSAoYCR7dGVtcH0gQ2Vsc2l1cyBkZWdyZWVzIGlzICR7TWF0aC5mbG9vcih0ZW1wRil9IEZhaHJlbmhlaXQuIFxuICAgICAgPGJyPjxicj4gIFdhdGVyIGZyZWV6ZXMgYXQgdGhpcyB0ZW1wZXJhdHVyZWApO1xuICAgIH0gZWxzZSBpZiAoKHRlbXAgPCAwKSAmJiAodGVtcCA8PSA5OSkpIHtcbiAgICAgIG91dHB1dENlbC5pbm5lckhUTUwgPSAoYCR7dGVtcH0gQ2Vsc2l1cyBkZWdyZWVzIGlzICR7TWF0aC5mbG9vcih0ZW1wRil9IEZhaHJlbmhlaXQuIFxuICAgICAgPGJyPjxicj4gV2F0ZXIgaW4gdGhpcyB0ZW1wZXJhdHVyZSBpcyBhIGxpcXVpZC4gYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dENlbC5pbm5lckhUTUwgPSAoYCR7dGVtcH0gQ2Vsc2l1cyBkZWdyZWVzIGlzICR7TWF0aC5mbG9vcih0ZW1wRil9IEZhaHJlbmhlaXQuIFxuICAgICAgPGJyPjxicj4gV2F0ZXIgaW4gdGhpcyB0ZW1wZXJhdHVyZSBpcyBib2lsaW5nLmApO1xuICAgIH1cbiAgfVxufSk7XG5cbmZhaHJlbmhlaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgbGV0IHRlbXAgPSB3aW5kb3cucHJvbXB0KCdUZWxsIG1lIHlvdXIgdGVtcGVyYXR1cmUgaXMgRmFocmVuaGVpdCcpO1xuICBjb25zdCB0ZW1wQyA9ICg1IC8gOSkgKiAodGVtcCAtIDMyKTtcbiAgaWYgKGlzTmFOKHRlbXApKSB7XG4gICAgb3V0cHV0RmFoLmlubmVySFRNTCA9IChgSGV5LCAke3RlbXB9IGlzIG5vdCBhIG51bWJlcmApO1xuICB9IGVsc2UgaWYgKCh0ZW1wID09PSBudWxsKSB8fCAodGVtcCA9PT0gXCJcIikpIHtcbiAgICBvdXRwdXRGYWguaW5uZXJIVE1MID0gKCdIZXksIHlvdSBoYXZlIHRvIHdyaXRlIHNvbWV0aGluZyA/IScpXG4gIH0gZWxzZSB7XG4gICAgaWYgKHRlbXAgPD0gMzIpIHtcbiAgICAgIG91dHB1dEZhaC5pbm5lckhUTUwgPSAoYCR7dGVtcH0gRmFocmVuaGVpdCBkZWdyZWVzIGlzICR7TWF0aC5mbG9vcih0ZW1wQyl9XG4gICAgICBjZWxzaXVzLjxicj48YnI+IFdhdGVyIGZyZWV6ZXMgYXQgdGhpcyB0ZW1wZXJhdHVyZWApXG4gICAgfSBlbHNlIGlmICgodGVtcCA8IDMyKSAmJiAodGVtcCA8PSAyMTEpKSB7XG4gICAgICBvdXRwdXRGYWguaW5uZXJIVE1MID0gKGAke3RlbXB9IEZhaHJlbmhlaXQgZGVncmVlcyBpcyAke01hdGguZmxvb3IodGVtcEMpfTxicj48YnI+XG4gICAgICBjZWxzaXVzLjxicj48YnI+IFdhdGVyIGluIHRoaXMgdGVtcGVyYXR1cmUgaXMgYSBsaXF1aWQuIGApXG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dEZhaC5pbm5lckhUTUwgPSAoYCR7dGVtcH0gRmFocmVuaGVpdCBkZWdyZWVzIGlzICR7TWF0aC5mbG9vcih0ZW1wQyl9PGJyPjxicj5cbiAgICAgIGNlbHNpdXMuPGJyPjxicj4gV2F0ZXIgaW4gdGhpcyB0ZW1wZXJhdHVyZSBpcyBib2lsaW5nLmApXG4gICAgfVxuXG4gIH1cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);