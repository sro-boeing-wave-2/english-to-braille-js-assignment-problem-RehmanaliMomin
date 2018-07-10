import englishToBrailleLiteralSet from './english-to-braille.js';

/**
* Converts text in english to braille code.
* Write all code related to the DOM Manipulation here.
* Using the english-to-braille mapper convert the text
* in english language to that in the equivalent braille
* code.
*/
let txt;
let i;
let ans = '';
let temp;
let res;
const myMap = new Map(englishToBrailleLiteralSet);
// var imported = document.createElement('english-to-braille');
// imported.src = '/english-to-braille.js';
// document.head.appendChild(imported);


function formulate(text) {
  for (i = 0; i < text.length; i += 1) {
    temp = myMap.get(text[i]);
    ans += temp;
  }
  return ans;
}

function result() {
  txt = document.getElementById('sourceLangText').value;
  res = formulate(txt);
  document.getElementById('targetLangText').innerHTML = res;
}

const btnn = document.getElementById('btnConvertEnglishToBraille');
btnn.addEventListener('click', result);
