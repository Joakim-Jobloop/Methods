//! METHODS

// Number, string, boolean, array, (object)
//https://www.w3schools.com/js/js_string_methods.asp

//! Strings

console.log("Hello world!");

let myString = "JavaScript er vanskelig";

console.log(myString.toUpperCase());

console.log(myString.length);
//
console.log.apply(myString.slice(4));
// Tar bort alt etter index 4. //? Fungerer ikke?
console.log(myString.substring(4, 10));

console.log(myString.replace("vanskelig", "gøy"));
// første parameter bytter ut med andre parameter
console.log(myString.toLocaleLowerCase());
// gjør om hele stringen til lowercase
myString = "   JavaScript er vanskelig   ";

console.log(myString);

console.log(myString.trim());
// ta bort whitespace
myString = "JavaScript er vanskelig";

console.log(myString[0]);
// finner hva som ligger i første plass i setningen (etter ")
console.log(myString.charAt(1));
// samme som over
console.log(myString.split(""));
// splitter hvert enkelt bokstav i en setning inn til en array
console.log(myString.split(" "));
// splitter hvert enkelt ord i en setning inn til en array
//REGEX: Kombinere methods. Avansert tekstmatching

//! Numbers
//https://www.w3schools.com/js/js_number_methods.asp
const x = 15.342684432;

console.log(x.toString());
// Gjør om Number til String
console.log(x.toFixed(4));
// Tar med 4 desimaler
console.log(x.toPrecision(5));
// Tar med antall tall (bryr seg ikke om ".")
console.log(x.toExponential(3));
// Scientific notation

//! Arrays

let fruits = ["Apple", "Pear", "Mango", "Peach", "Melon", "Banana"];

console.log(fruits.length);
// Gir antall indexer i en array
console.log(fruits.join(" "));
// Gjør en array til en string med mellomrom
console.log(fruits.toString());
//! Ikke bruk den over
const deleltedFruit = fruits.pop(); // kan også bare være fruits.pop()
// Fjerner siste index i array
console.log(deleltedFruit);
// Bruk de to over for å hente ut et array element
console.log(fruits);
// Banan er fjernet pga .pop
fruits.push("Lemon");
// Legger til "Lemon" i slutten av arrayen
console.log(fruits);

fruits.unshift("Orange");
// Flytter Orange til plass[0] i arrayet
console.log(fruits);

fruits[3] = "Lemon";
// Bytter ut array[3] med "Lemon"
console.log(fruits);

fruits = ["Apple", "Pear", "Mango", "Peach", "Melon", "Banana"];
let fruits2 = ["Lemon", "Orange", "Cherry"];

console.log(fruits.concat(fruits2));
// Outputter begge arraysa
console.log(fruits.concat(fruits2, ["Mandarin"]));
// Samme som over, men legger til "Mandarin" i slutten av outputtet

fruits.splice(2, 2, "Grapes", "Kiwi", "Pomegranate");
// Parameter 1: Startposisjon (2 = "Mango", blir tatt bort).
//Parameter 2: Antall elements etter som skal slettes (2 = pos 3 og 4).
//Parameter 3->: Hva som legges til etter første parameter
console.log(fruits);

console.log(fruits.indexOf("Melon"));
// Forteller hvilken posisjon i arrayet "Melon" ligger i
console.log(fruits.includes("Apple"));
// Ser om "Apple" er i arreyet. Viser true
console.log(fruits.includes("Pomelo"));
// Ser om "Pomelo" er i arrayet. Viser false
if (fruits.includes("Apple")) console.log("Apple in array");
// Ser om "Apple" er i arrayet. Console logger "Apple in array" hvis det er.
console.log(fruits.sort());
// Sorterer arrayet alfabetisk
console.log(fruits.reverse());
// Reverserer arrayet

//! Kombinere methods

console.log(fruits.reverse().join(" ").toUpperCase().split(" "));
// Reverserer arrayet, lager det til en string med hele ord, setter det tilbake til en array

const myString2 = "Dette er en string";
console.log(myString2.split("").reverse().join("*"));

const fancyBackwardsString = (str) => str.split("").reverse().join("*");

console.log(fancyBackwardsString("Joakim Villo"));
// reverser en string og legger til "*" mellom hver bokstav

const makeFirstLetterUpperCase = (str) =>
  `${str[0].toUpperCase()}${str.slice(1)}`;

console.log(makeFirstLetterUpperCase("joakim"));
//kun et ord kan brukes
