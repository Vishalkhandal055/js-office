// Primitive (call by value) 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 12132432322343242n
console.log(typeof bigNumber)

// Is javascript is static type or dynamic type language?

// Reference (Non - Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Vishal",
    age: 22,
}

const myFunction = function() {
    console.log("Hello word")
}

console.log(typeof myFunction)
console.log(typeof outsideTemp)
// Objects and browser web events

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive), Heap (Non-Primitive)

// Stack you get copy of value and Heap you get reference (any update done in original also) of value


let myPetName = "Sheru"

let anotherPetName = myPetName
anotherPetName = "Kesu"

console.log(myPetName)
console.log(anotherPetName)

let userOne = {
    email : "user@gmail.com",
    upi : "user@sbi"
}

let userTwo = userOne
userTwo.email = "Vishal@gmail.com"

console.log(userOne.email)
console.log(userTwo.email);