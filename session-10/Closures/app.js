//Closures

function Fun(){

    let x=0;

    function innerFun(){
        x++;
        console.log(x);
    }

    return innerFun;
}

let f=Fun();
// console.log(f);

f();
f();
f();
f();



