/* There are different ways to create an obj in JS
Object Literal: most common case.
    const person={ name: "Sohaib", age: 22}

Constructor: const obj = new person(parameters)
 
there is also a concept of singleton (object.create is se jo obj banta wahi singleton hota) which has only one obj...different instances of obj can't be created
Literal obj don't create singleton wheras object constructor makes it
*/

//Object Literals

const mySym = Symbol("key1")
const user = {
    name : "Sohaib",
    "full name" : "Sohaib Akhtar",
    [mySym] : "myKey1", // we pass symbol as a key in brackets
    age : 24,
    location : "Karak",
    email : "sohaib@google.com",
    isLoggedIn : false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(user.email)
// console.log(user["email"])
// console.log(user["full name"])
// console.log(user.mySym)

user.email = "sohaibktk.com"
// Object.freeze(user)
user.email = "sohaib@helo.com"
// console.log(user)

user.greetings = function(){
    console.log("Hello boy how are you doing")
}

// user.greetingsTwo = function(){
//     console.log(`Hello ${this["full name"]}, your age is ${this.age}`)
// }

user.greetingsTwo = function(){
    console.log(`Hello ${this.name}, your age is ${this.age}`)
}

console.log(user.greetingsTwo())





