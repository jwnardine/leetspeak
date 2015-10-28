var promptInput = prompt("Enter in a word");
var justE = /e/gi;
var justO = /o/gi;
var justUpperI = /I/g;
var leetTranslate = promptInput.replace(justE, '3').replace(justO, '0').replace(justUpperI, "1");



var turnLeet = function(promptInput) {
   return leetTranslate;
};
