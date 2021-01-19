// Higher Order Functions

function Fun(){

    function innerFun(){
        console.log("I am InnerFun..");
    }
   
    return innerFun;
}

let f=Fun();
// console.log(f);
f();
