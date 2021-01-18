//ARRAY METHODS
///////////// push and unshift Methods ////////////

// let fruits = ["mango","apple","orange"];
// undefined
// fruits
// (3) ["mango", "apple", "orange"]
// fruits[3]="grapes";
// "grapes"
// fruits
// (4) ["mango", "apple", "orange", "grapes"]
// fruits.push("banana");
// 5
// fruits
// (5) ["mango", "apple", "orange", "grapes", "banana"]
// fruits.unshift("pineapple");
// 6
// fruits
// (6) ["pineapple", "mango", "apple", "orange", "grapes", "banana"]


//////////////////////////pop and shift //////////////////

// fruits
// (3) ["mango", "apple", "orange"]
// fruits.pop();
// "orange"
// fruits
// (2) ["mango", "apple"]
// let someFruit = fruits.pop();
// undefined
// someFruit
// "apple"
// fruits
// ["mango"]

// fruits
// (3) ["mango", "apple", "orange"]
// fruits.shift();
// "mango"
// fruits
// (2) ["apple", "orange"]
// let fruit = fruits.shift();
// undefined
// fruit
// "apple"

///////////////////slice/////////////////////////

// colors
// (4) ["red", "green", "purple", "blue"]
// colors.slice(1);
// (3) ["green", "purple", "blue"]
// colors
// (4) ["red", "green", "purple", "blue"]
// colors.slice(0,3);
// (3) ["red", "green", "purple"]
// colors.slice(1,3);
// (2) ["green", "purple"]

// /////////////////splice////////////////////////
// colors
// (4) ["red", "green", "purple", "blue"]
// colors.splice(1,2);
// (2) ["green", "purple"]
// colors
// (2) ["red", "blue"]
// colors.splice(1,0,"mango");
// []
// colors
// (3) ["red", "mango", "blue"]
// colors.splice(1,0,"orange","apple");
// []
// colors
// (5) ["red", "orange", "apple", "mango", "blue"]
// colors.splice(1,0,1,2,3);
// []
// colors
// (8) ["red", 1, 2, 3, "orange", "apple", "mango", "blue"]


// //////////////////Arrays are reference type/////////////////

// 1 === 1
// true
// [1,2,3] === [1,2,3]
// false
// [1,2,3] == [1,2,3]
// false
// let vegetables = ["potato","tomato","carrot"];
// undefined
// let newVegetables = vegetables;
// undefined
// newVegetables
// (3) ["potato", "tomato", "carrot"]
// newVegetables.push("reddish","ladyfinger")
// 5
// newVegetables
// (5) ["potato", "tomato", "carrot", "reddish", "ladyfinger"]
// vegetables
// (5) ["potato", "tomato", "carrot", "reddish", "ladyfinger"]
// vegetables === newVegetables
// true
// vegetables
// (5) ["potato", "tomato", "carrot", "reddish", "ladyfinger"]
