!function(e){var t={};function n(i){if(t[i])return t[i].exports;var l=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(i,l,function(t){return e[t]}.bind(null,l));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\n\nconst celsiusButton = document.querySelector('#button-c');\nconst fahrenheitButton = document.querySelector('#button-f');\nconst outputCel = document.querySelector('#container');\nconst outputFah = document.querySelector('#container-2');\n\n\noutputCel.innerHTML = ('Tell me you temperature in Celsius:')\noutputFah.innerHTML = ('Tell me you temperature in Fahrenheit:')\n\n\ncelsiusButton.addEventListener('click', () => {\n\n  let temp = window.prompt('Tell me your temperature is Celsius');\n  const tempF = temp * 1.8 + 32; // tempF convert censius to Fahrenheit.\n\n  if (isNaN(temp)) { //  when in Not a number.\n    outputCel.innerHTML = (`Hey ${temp} is not a number`);\n  } else if ((temp === null) || (temp === \"\")) { // when is null or empty string.\n    outputCel.innerHTML = ('Hey, you have to write something ?!')\n  } else {\n\n    if (temp <= 0) {\n      outputCel.innerHTML = (`${temp} Celsius degrees is ${Math.floor(tempF)} Fahrenheit. \n      <br><br>  Water freezes at this temperature`);\n    } else if ((temp < 0) && (temp <= 99)) {\n      outputCel.innerHTML = (`${temp} Celsius degrees is ${Math.floor(tempF)} Fahrenheit. \n      <br><br> Water in this temperature is a liquid. `);\n    } else {\n      outputCel.innerHTML = (`${temp} Celsius degrees is ${Math.floor(tempF)} Fahrenheit. \n      <br><br> Water in this temperature is boiling.`);\n    }\n  }\n});\n\nfahrenheitButton.addEventListener('click', () => {\n\n  let temp = window.prompt('Tell me your temperature is Fahrenheit');\n  const tempC = (5 / 9) * (temp - 32);\n  if (isNaN(temp)) {\n    outputFah.innerHTML = (`Hey, ${temp} is not a number`);\n  } else if ((temp === null) || (temp === \"\")) {\n    outputFah.innerHTML = ('Hey, you have to write something ?!')\n  } else {\n    if (temp <= 32) {\n      outputFah.innerHTML = (`${temp} Celsius degrees is ${Math.floor(tempC)}\n      Fahrenheit.<br><br> Water freezes at this temperature`)\n    } else if ((temp < 32) && (temp <= 211)) {\n      outputFah.innerHTML = (`${temp} Celsius degrees is ${Math.floor(tempC)}<br><br>\n      Fahrenheit.<br><br> Water in this temperature is a liquid. `)\n    } else {\n      outputFah.innerHTML = (`${temp} Celsius degrees is ${Math.floor(tempC)}<br><br>\n      Fahrenheit.<br><br> Water in this temperature is boiling.`)\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLGdDQUFnQzs7QUFFaEMsb0JBQW9CO0FBQ3BCLGtDQUFrQyxLQUFLO0FBQ3ZDLEdBQUcsNkNBQTZDO0FBQ2hEO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGdDQUFnQyxLQUFLLHNCQUFzQixrQkFBa0I7QUFDN0U7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLEtBQUssc0JBQXNCLGtCQUFrQjtBQUM3RTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsS0FBSyxzQkFBc0Isa0JBQWtCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEtBQUs7QUFDeEMsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZ0NBQWdDLEtBQUssc0JBQXNCO0FBQzNEO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxLQUFLLHNCQUFzQixrQkFBa0I7QUFDN0U7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLEtBQUssc0JBQXNCLGtCQUFrQjtBQUM3RTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcblxuXG5jb25zdCBjZWxzaXVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1jJyk7XG5jb25zdCBmYWhyZW5oZWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1mJyk7XG5jb25zdCBvdXRwdXRDZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG5jb25zdCBvdXRwdXRGYWggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyLTInKTtcblxuXG5vdXRwdXRDZWwuaW5uZXJIVE1MID0gKCdUZWxsIG1lIHlvdSB0ZW1wZXJhdHVyZSBpbiBDZWxzaXVzOicpXG5vdXRwdXRGYWguaW5uZXJIVE1MID0gKCdUZWxsIG1lIHlvdSB0ZW1wZXJhdHVyZSBpbiBGYWhyZW5oZWl0OicpXG5cblxuY2Vsc2l1c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICBsZXQgdGVtcCA9IHdpbmRvdy5wcm9tcHQoJ1RlbGwgbWUgeW91ciB0ZW1wZXJhdHVyZSBpcyBDZWxzaXVzJyk7XG4gIGNvbnN0IHRlbXBGID0gdGVtcCAqIDEuOCArIDMyOyAvLyB0ZW1wRiBjb252ZXJ0IGNlbnNpdXMgdG8gRmFocmVuaGVpdC5cblxuICBpZiAoaXNOYU4odGVtcCkpIHsgLy8gIHdoZW4gaW4gTm90IGEgbnVtYmVyLlxuICAgIG91dHB1dENlbC5pbm5lckhUTUwgPSAoYEhleSAke3RlbXB9IGlzIG5vdCBhIG51bWJlcmApO1xuICB9IGVsc2UgaWYgKCh0ZW1wID09PSBudWxsKSB8fCAodGVtcCA9PT0gXCJcIikpIHsgLy8gd2hlbiBpcyBudWxsIG9yIGVtcHR5IHN0cmluZy5cbiAgICBvdXRwdXRDZWwuaW5uZXJIVE1MID0gKCdIZXksIHlvdSBoYXZlIHRvIHdyaXRlIHNvbWV0aGluZyA/IScpXG4gIH0gZWxzZSB7XG5cbiAgICBpZiAodGVtcCA8PSAwKSB7XG4gICAgICBvdXRwdXRDZWwuaW5uZXJIVE1MID0gKGAke3RlbXB9IENlbHNpdXMgZGVncmVlcyBpcyAke01hdGguZmxvb3IodGVtcEYpfSBGYWhyZW5oZWl0LiBcbiAgICAgIDxicj48YnI+ICBXYXRlciBmcmVlemVzIGF0IHRoaXMgdGVtcGVyYXR1cmVgKTtcbiAgICB9IGVsc2UgaWYgKCh0ZW1wIDwgMCkgJiYgKHRlbXAgPD0gOTkpKSB7XG4gICAgICBvdXRwdXRDZWwuaW5uZXJIVE1MID0gKGAke3RlbXB9IENlbHNpdXMgZGVncmVlcyBpcyAke01hdGguZmxvb3IodGVtcEYpfSBGYWhyZW5oZWl0LiBcbiAgICAgIDxicj48YnI+IFdhdGVyIGluIHRoaXMgdGVtcGVyYXR1cmUgaXMgYSBsaXF1aWQuIGApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXRDZWwuaW5uZXJIVE1MID0gKGAke3RlbXB9IENlbHNpdXMgZGVncmVlcyBpcyAke01hdGguZmxvb3IodGVtcEYpfSBGYWhyZW5oZWl0LiBcbiAgICAgIDxicj48YnI+IFdhdGVyIGluIHRoaXMgdGVtcGVyYXR1cmUgaXMgYm9pbGluZy5gKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5mYWhyZW5oZWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gIGxldCB0ZW1wID0gd2luZG93LnByb21wdCgnVGVsbCBtZSB5b3VyIHRlbXBlcmF0dXJlIGlzIEZhaHJlbmhlaXQnKTtcbiAgY29uc3QgdGVtcEMgPSAoNSAvIDkpICogKHRlbXAgLSAzMik7XG4gIGlmIChpc05hTih0ZW1wKSkge1xuICAgIG91dHB1dEZhaC5pbm5lckhUTUwgPSAoYEhleSwgJHt0ZW1wfSBpcyBub3QgYSBudW1iZXJgKTtcbiAgfSBlbHNlIGlmICgodGVtcCA9PT0gbnVsbCkgfHwgKHRlbXAgPT09IFwiXCIpKSB7XG4gICAgb3V0cHV0RmFoLmlubmVySFRNTCA9ICgnSGV5LCB5b3UgaGF2ZSB0byB3cml0ZSBzb21ldGhpbmcgPyEnKVxuICB9IGVsc2Uge1xuICAgIGlmICh0ZW1wIDw9IDMyKSB7XG4gICAgICBvdXRwdXRGYWguaW5uZXJIVE1MID0gKGAke3RlbXB9IENlbHNpdXMgZGVncmVlcyBpcyAke01hdGguZmxvb3IodGVtcEMpfVxuICAgICAgRmFocmVuaGVpdC48YnI+PGJyPiBXYXRlciBmcmVlemVzIGF0IHRoaXMgdGVtcGVyYXR1cmVgKVxuICAgIH0gZWxzZSBpZiAoKHRlbXAgPCAzMikgJiYgKHRlbXAgPD0gMjExKSkge1xuICAgICAgb3V0cHV0RmFoLmlubmVySFRNTCA9IChgJHt0ZW1wfSBDZWxzaXVzIGRlZ3JlZXMgaXMgJHtNYXRoLmZsb29yKHRlbXBDKX08YnI+PGJyPlxuICAgICAgRmFocmVuaGVpdC48YnI+PGJyPiBXYXRlciBpbiB0aGlzIHRlbXBlcmF0dXJlIGlzIGEgbGlxdWlkLiBgKVxuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXRGYWguaW5uZXJIVE1MID0gKGAke3RlbXB9IENlbHNpdXMgZGVncmVlcyBpcyAke01hdGguZmxvb3IodGVtcEMpfTxicj48YnI+XG4gICAgICBGYWhyZW5oZWl0Ljxicj48YnI+IFdhdGVyIGluIHRoaXMgdGVtcGVyYXR1cmUgaXMgYm9pbGluZy5gKVxuICAgIH1cblxuICB9XG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);