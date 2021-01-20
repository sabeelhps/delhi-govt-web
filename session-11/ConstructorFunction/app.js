

// var x=97; //global scope

// let num=100; //script scope

// function Fun(name){ 
//     this.name=name;
//     // console.log(this);
// }

// Fun("Kartik");


// function add(x,y){
//     this.x=x;
//     this.y=y;
// }

// add(2,3);




// Constructor Functions in JS and new keyword



function Fun(name,age){ //constructor Function
    this.name=name;
    this.age=age;
    // this.greet=function(){
    //     console.log(`hello from ${this.name}`)
    // }
}

Fun.prototype.greet=function(){
    console.log(`hello from ${this.name}`);
}


let p1 = new Fun("Prateek",21);

let p2 = new Fun("Monu",22);

let p3 = new Fun("Sabeel",22);


// console.log(p1);



// Binding of - this

// 1.Implicit
// 2.Explicit
// 3.new keyword
// 4.default(or window)


// 1.Implicit

const person = {
    name:"John",
    age:15,
    isAdult:function(){
       return this.age>18;
    }
}

y="Hello from coding blocks";
