

// const obj={
//     name:"sabeel",
//     age:21,
//     greet:function(){
//         console.log("Hello from sabeel");
//     },
//     favColor:["red","blue","green"]
// }

const a={
    name:"Sabeel",
    age:21,
    sayHello:function(){
        console.log("Hello EveryOne from Sabeel");
    }
}

let b = Object.create(a);
let c = Object.create(b);
b.name="Kartik";
b.age=25;
b.sayHello=function(){
    console.log("Hello from Kartik!!!");
}


let x=null;





