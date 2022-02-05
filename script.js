function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("pan", "traditional",["4 cheese blend"], ["pepperoni", "italian sausage"]);
console.log(pizza3);

var pizza4 = pizzaOven("hand tossed", "bbq", ["mozzarella"], ["ham", "bacon", "pineapple"]);
console.log(pizza4);
var crustType = [
    "hand tossed",
    "deep dish",
    "thin",
    "pan"
];
var sauceType = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "extra traditional"
];
var cheeses = [
    "mozzarella cheese",
    "4 cheese blend",
    "feta cheese",
    "cheddar cheese",
    "goat cheese",
    "parmesan"
];
var toppings = [
    "pepperoni",
    "chicken",
    "sausage",
    "mushrooms",
    "bell peppers",
    "olives",
    "anchovies",
    "onions",
    "pineapple"
];
function randomRange(max,min) {
    return Math.floor(Math.random() * max - min) + min;
}
function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}
function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustType);
    pizza.sauceType = randomPick(sauceType);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5,1); i++) {
    pizza.cheeses.push(randomPick(cheeses));
}
for(var i=0; i<randomRange(4,1); i++) {
    pizza.toppings.push(randomPick(toppings));
}
return pizza;
}
console.log(randomPizza());