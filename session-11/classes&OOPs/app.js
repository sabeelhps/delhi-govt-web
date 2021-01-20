
// class Person{

//     constructor(name,age){
//         console.log("Constructer Function Called")
//         this.name=name;
//         this.age=age;
//     }

//     // getter and setter 

//     get getAge(){
//         return this.age;
//     }

//     set setAge(newAge){
//         this.age=newAge;
//     }

//     get firstName(){
//         return this.name;
//     }

//     set firstName(newName){
//         this.name=newName;
//     }

//     sayHello(){
//         console.log(`Hello from ${this.name}`);
//     }

// }


// let p1 = new Person("Sabeel",21);
// let p2 = new Person("Kartik",22);
// console.log(p1);
// console.log(p2);


// -----------------------------------------------------

class Car{

    constructor(name,isDiscBrake,price){
        this.name=name;
        this.isDiscBrake=isDiscBrake;
        this.price=price;
    }

    get getPrice(){
        return this.price;
    }

    set setPrice(newPrice){

        if(newPrice<1000){
            this.price=1000;
        }else{
            this.price=newPrice;
        }  
    }

    startCar(){
        console.log(`${this.name} is getting Started`);
    }

}

class RacingCar extends Car{

    constructor(name,isDiscBrake,price,maxSpeed,color){
        super(name,isDiscBrake,price);
        this.maxSpeed=maxSpeed;
        this.color=color;
    }

    startRacingCar(){
        console.log(`${this.name} is a Racing car and it is getting Started`);
    }


}


let rc1 = new RacingCar("Scorpio",false,100000,300,"Black");


// let c1 = new Car("BMW",true,1000000);
// let c2 = new Car("Ferrari",false,9000000);
