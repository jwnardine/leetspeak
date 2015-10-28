var promptInput = prompt("Enter in a word");
var justE = /e/gi;
var justO = /o/gi;
var leetTranslate = promptInput.replace(justE, '3').replace(justO, '0');



var turnLeet = function(word) {
 if (promptInput === justE); {
   return leetTranslate;
};

};
