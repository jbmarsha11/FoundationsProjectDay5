//exercise 1
function addNumbers(numberA, numberB) {
  return numberA + numberB;
}

var twoPlusTwo = addNumbers(2, 2);

console.log(twoPlusTwo); // 4

//exercise 2
function yell(loudly) {
    return loudly.toUpperCase();
}

console.log(yell("i have no idea what i'm doing"));

function yell10(loudly) {
    return loudly.toUpperCase();
}
var i =0;
while (i < 10){
  console.log(yell10("magic magic everywhere")+i);
  i++;
}

//exercise 3
function longest(a, b){
  var long;
  if (a > b) {
    long = a;
  } else {
    long = b;
  }
  return long.length;
}
console.log(longest('bob', 'margaret'));

//exercise 4
function isVowel(letter){
   if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
     return "true"

   } else {
      return "false";

   };

}
console.log(isVowel("A"));
