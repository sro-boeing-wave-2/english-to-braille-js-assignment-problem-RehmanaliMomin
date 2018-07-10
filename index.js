import englishToBrailleLiteralSet from './english-to-braille.js';

/**
* Converts text in english to braille code.
* Write all code related to the DOM Manipulation here.
* Using the english-to-braille mapper convert the text
* in english language to that in the equivalent braille
* code.
*/
var btn;
var txt;
var i;
var ans = '';
var temp;
var res;
var myMap = new Map(englishToBrailleLiteralSet);
// var imported = document.createElement('english-to-braille');
// imported.src = '/english-to-braille.js';
// document.head.appendChild(imported);


window.onload = function () {

  btn = document.getElementById('btnConvertEnglishToBraille');
  btn.addEventListener('click', result);

}

function result(e) {

  txt = document.getElementById('sourceLangText').value;
  res = formulate(txt);
  document.getElementById('targetLangText').innerHTML=res;

}

function formulate(text) {

  for (i = 0; i < text.length; i++) {
    temp = myMap.get(text[i]);
    ans += temp;
  }
  return ans;
}

