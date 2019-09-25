// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// one way using reverse() function:
// function reverse(str) {
//   const arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }

// same but simplified:
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

//  a second way:
// function reverse(str) {
//   // create empty array:
//   let reversed = "";
//   // create a for loop:
//   for (let charachter of str) {
//     reversed = charachter + reversed;
//   }
//   return reversed;
// }

// a third way:
// function reverse(str) {
//   // reduce() simplifies down to a single value:
//   return str.split("").reduce((reversed, charachter) => {
//     return charachter + reversed;
//   }, "");
// }

// same but simplified:
function reverse(str) {
  // reduce() simplifies down to a single value:
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
