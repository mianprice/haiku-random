var haiku = require('./index');

console.log(haiku);

console.log("Three random haiku: ");
console.log(haiku.random());
console.log(haiku.random());
console.log(haiku.random());

console.log("Three specific haiku (1, 750, 1500): ");
console.log("1: \n" + haiku.specific(1));
console.log("1: \n" + haiku.specific(1));
console.log("750: \n" + haiku.specific(750));
console.log("750: \n" + haiku.specific(750));
console.log("1500: \n" + haiku.specific(1500));
console.log("1500: \n" + haiku.specific(1500));
