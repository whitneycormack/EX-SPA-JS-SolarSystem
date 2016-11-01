
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

var element = document.getElementById("planets");
  planets.forEach(function() {
      element.innerHTML = planets;
});

// Ex.  The forEach method on an array executed a callback function for each element in the array.

// function outputFruit(element, index, array) {
//   console.log('array[' + index + '] = ' + element);
// }

// var fruits = ["apple", "banana", "cherry"];
// fruits.forEach(outputFruit);
// *******


// Use the map method to create a new array where the first letter of each planet is capitalized

var newPlanets = planets.map(function(caps) {
    return caps.charAt(0).toUpperCase() + caps.substr(1);
});

console.log("newPlanets with Caps", newPlanets);


// Ex. The map() method creates a new array with the results of calling a provided function on every element in this array.

// function reverseIt(element, index, array) {
//   return element.split("").reverse().join("");
// }

// var fruits = ["apple", "banana", "cherry"];
// var backwardFruits = fruits.map(reverseIt);
// console.log(backwardFruits); // ["elppa", "ananab", "yrrehc"]

// The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.


// ********


// Use the filter method to create a new array that contains planets with the letter 'e'

var newPlanets = planets.filter(function(e) {
    return e.includes("e");
});
console.log("newPlanets with e", newPlanets);

// Ex. The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// function filterIt(element, index, array) {
//   if (element.length === 5) {
//     return element;
//   }
// }

// var fruits = ["apple", "banana", "cherry"];
// var filteredFruits = fruits.filter(filterIt);
// console.log(filteredFruits); // ["apple"]

// The includes() method determines whether an array includes a certain element, returning true or false as appropriate.

// *****


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(first, second) {
    return first + " " + second
  });

console.log("words", words);
console.log("sentence = ", sentence);

// Ex. The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

// var sum = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
//   console.log("curent index: " + index);
//   return previousValue + currentValue;
// });
// console.log(sum);








