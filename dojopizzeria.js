// var pizza = {
//     crustType: ["hand tossed", "deep dish"],
//     sauceType:  "london broil",
//     cheeses:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(pizza);

//making 1 pizza
var pizza1 = {
    crustType: "deep dish",
    sauceType:  "traditional",
    cheeses:   "mozzarella",
    toppings: ["pepperoni", "sausage"]
};

console.log(pizza1);

//function for pizzaOven 1

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

//function for pizzaOven 2
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

//function for pizza 3
var p3 = pizzaOven("hand tossed", "white", "mozzarella", "garlic");
console.log(p3);

//function for pizza 4
var p4 = pizzaOven("thin", "traditional", "mozzarella", ["ham", "pineapple"]);
console.log(p4);


//pizza 2

// var pizza2 = {
//     crustType: "hand tossed",
//     sauceType:  "marinara",
//     cheeses:   ["mozzarella", "feta"],
//     toppings: ["mushrooms", "olives", "onions"]
// };

// console.log(pizza2);

