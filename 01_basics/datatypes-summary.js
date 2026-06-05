// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34567890656864n


// reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktimN", "naagraj", "doga"];
let myObj = {
    name: "deba",
    age: 24

}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);


//Stack(primitive), Heap(non-primitive)


let myProfilename = "pujaevent0"

let anothername = myProfilename
anothername = "pujaevent"

console.log(myProfilename);
console.log(anothername);

let userOne = {
    email: "user@google.com"
    
}

let userTwo = userOne

userTwo.email = "deba@google.com"

console.log(userOne.email);
console.log(userTwo.email);