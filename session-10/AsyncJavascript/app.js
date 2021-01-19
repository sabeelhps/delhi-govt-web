

// function delay(n){


//     for(let i=1;i<=n;i++){
//         let x=new Date().getTime();
//         while(new Date().getTime() < 1000+x){
        
//         }
//     }
   
// }


function say(){
    console.log("Image Loading Done..")
}

// delay(10);

// setTimeout(say,5000);

// console.log("After set timeout");

// function f(){
//     console.log("Loading Other Resources Completed")
// }

// f();

let id=setInterval(function (){
    console.log("Boosting a Car speed........");
},1000)

setTimeout(function(){
    console.log("Inside setTimeOut");
    clearInterval(id);
},10000);

console.log("After setTimeOut");