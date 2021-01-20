//--------------------------- Arrow Functions---------------------------


// function add(x,y){
//     return x+y;
// }

// let res=add(2,3);
// console.log(res);

// Function Expression


// let add = function fun(x,y){
//     return x+y;
// }

// console.log(add);

// let res=add(4,5);
// console.log(res);

// let add = function(x,y){
//         return x+y;
//     }
    
//     console.log(add);
    
//     let res=add(4,5);
//     console.log(res);


// Arrow Function

// let add= (x,y) => {
//     console.log("Inside Arrow Functions....")
//     return x+y;
// }

// let squareRoot = (num) => {
//     return Math.sqrt(num);
// }

// let squareRoot = num => {
//     return Math.sqrt(num);
// }


////////////////////////////////////////////////////////////////////

// Implicit return from arrow function

let squareRoot = num => Math.sqrt(num)

// console.log(add(2,3));

// console.log(squareRoot(25));


let a=[1,2,3,4,5,6,7];

let b=a.map((value)=>{
    return value*value;
})

console.log(b);
    

