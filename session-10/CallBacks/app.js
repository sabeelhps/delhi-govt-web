// Callback Function


// function sayHello(name){
//     console.log(`Hello ${name}`);
// }

// function greetUser(func){
//     let user=prompt("Enter Your Name");
//     func(user);
// }


// greetUser(sayHello);


function greetUser(func){
    let user=prompt("Enter Your Name");
    func(user);
}


greetUser(function(name){ //anonymous function passed as an argument
    console.log(`Hello ${name}`);
});


