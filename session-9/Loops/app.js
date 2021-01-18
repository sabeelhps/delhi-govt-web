
// LOOPS - Repeating Stuff with LOOPS 

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for(let i = 1 ; i <= 10 ; i++){
//     console.log(i);
// }

// let num = 1;

// for( ; num <= 10 ; ){
//     console.log(num);
//     num+=1
// }

// for(let num=100 ; num >= 10 ; num-=10){
//     console.log(num);
// }


// let i;

// for(i=100;i>=10;i-=10){
//     console.log(i);
// }

////////////////////////////////////
// print odd number

// for(let i=2;i<=10;i+=2){
//     console.log(i);
// }


// ////////////////////////////////////Iterating over arrays

// let animals = ["dog","horse","cat","rat"];
// for(let i=0;i<animals.length;i++){
//     console.log(`Animal at index ${i} is : ${animals[i]}`);
// }

// for(let i=100 ; i<200 ;i--){  //Infinite Loop
//     console.log(`Value of i is ${i}`);
// }

// console.log("After Loop");

// 2D array //////////////////////////////////////////////////////////

// let arr = [[1,2,3],["Cat","rat","bat"],["mango","apple","grapes","oranges"]];

// console.log(arr[1][1]);
// console.log(arr[2][2]);

/////////////////////////////////////////////////

// Nested Loops 

// for(let i=1;i<=5;i++){
//     console.log(`For i = ${i}`)
//     for(let j=1;j<=3;j++){
//         console.log(`      value of j is ${j}`);
//     }
// }

// let arr = [[1,2,3],["Cat","rat","bat"],["mango","apple","grapes","oranges"]];

// for(let i=0 ;i<arr.length ;i++){
//     // console.log(arr[i]);
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
//     console.log("");
// }

///////////////////////Pattern Star

// *
// * *
// * * *
// * * * *
// * * * * *

// let n=5;

// for(let i=1 ;i<=n;i++){
//     let str="";
//     for(let j=1 ;j<=i;j++){
//         str+="* ";
//     }
//     console.log(str);
// }

// /////////////////////while loops


// while(condition){
    // do something
// }

// let i=1; //initilisation step

// while(i<=10){ //conditions check
//     console.log(i);
//     i=i+1; //updation condition
// }

// let num=100;

// while(num>=10){
//     console.log(num);
//     num-=10;
// }



//////////////////////////Annoying Program//////////

// let SECRET = "coding";

// let str=prompt("Enter the Secret");

// while(str!==SECRET){
//     console.log(str);
//     alert("Please Enter the secret again...");
//     alert("Please Enter the secret again...");
//     alert("Please Enter the secret again...");
//     alert("Please Enter the secret again...");

//     str=prompt("Enter the Secret");
// }

// console.log("After");


// break and continue

// for(let i=1;i<=10;i++){ //Loop 1

//     for(let j=1;j<=10;j++){ //Loop 2
//         if(j===5){
//             break;
//         }
//     }

//     console.log(i);
// }


// for(let i=1;i<=10;i++){

//     if(i===5){
//         continue;
//     }
//     console.log(i);
// }

//////////////////////////////// for of loops////////////

let colors=["red","green","blue","yellow","skyblue"];

// for(let i=0;i<colors.length;i++){
//     console.log(`Color at index ${i} is ${colors[i]}`);
// }

// Better for iterating over arrays

// for(let val of colors){
//     console.log(val);
// }

////////////////////////---for in --//////////////////////////

const x={
    red:10,
    green:9,
    purple:5,
    yellow:4,
    blue:15
}

for(let i in x){
    console.log(`${i} got : ${x[i]}`);
}

