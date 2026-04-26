const marvelHeroes = ["thor", "ironman", "hulk", "captain america"];
const dcHeroes = ["superman", "batman", "wonder woman", "flash"];

// Accessing elements
// marvelHeroes.push(dcHeroes); // Adding superman to marvelHeroes
// console.log(marvelHeroes);
// console.log(marvelHeroes[4]); // Accessing hulk
// console.log(marvelHeroes[4][1]);  // Accessing superman from the nested array

// Concatenating arrays
// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

// Spreading arrays
// const allHeroesSpread = [...marvelHeroes, ...dcHeroes, "green lantern"]; // Adding green lantern to the end of the array is also possible with spread operator
const allHeroesSpread = [...marvelHeroes, ...dcHeroes];
// console.log(allHeroesSpread);

// Flattening arrays

const nestedArr = [1,2,3,[4,2,],4,7,[6,3,[4,2]]]
const flatArr = nestedArr.flat(3) // with flat we can flatten the array and with the parameter we can define how many levels of nesting we want to flatten
// const flatArr = nestedArr.flat(Infinity) // with Infinity we can flatten the array completely regardless of the levels of nesting
// console.log(flatArr)

// Array keywords

console.log(Array.isArray("Sohaib")) // checks if the given value is an array or not
console.log(Array.from("Sohaib")) // changes a string into an array of characters

console.log(Array.from({name: "Sohaib" })) // creates an array from the given values ,,,interestingly it creates an array of undefined values with the length of the given object 

const score1 = 100
const score2 = 200
const score3 = 300

const allScores = Array.of(score1, score2, score3) // creates an array of the given values
console.log(allScores)
