
// Map

// let a = [1,2,3,4,5,6,7];

// let b=a.map(function(num){
//     return Math.sqrt(num);
// })

// function square(value){
//     return value*value;
// }


// let b=a.map(square);
// console.log(b);

// let b=a.map(function(num,idx){
//     console.log(idx);
//     return num*num;
// })

// console.log(b);


///////////////////////filter////////////////////////

let a = [1,2,3,4,5,6,7,9,10];

function isEven(num){
    if(num%2===0){
        return true;
    }
    return false;
}


// let b=a.filter(isEven);

let b=a.filter(function(num){
    // console.log("Called...");
    return num%2===0;
});

console.log(b);

// Join And Reverse

// [1,2,3].join("--");
// "1--2--3"
// [1,2,3].reverse()
// (3) [3, 2, 1]