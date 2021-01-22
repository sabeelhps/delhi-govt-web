

function fun(){
    console.log("Hey Don't call me!!!");
    console.log("");
}

let x=setInterval(fun,1000); //miliseconds


setTimeout(function(){
    console.log("Called after 5 seconds")
    clearInterval(x);
},5000);
