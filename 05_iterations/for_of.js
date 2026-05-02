/* For array we have some special kind of loops:
for of, for in ,for each
It is not necessary that they can be used with arrays...we can use them for string, objects too.

Also normal for, while loops can be used but the above mentioned loops gave us ease */

// For of

// let arr = [1,2,3,4,5]
// for (const element of arr) {
//     console.log(element)
// }

// let greetings = "Hello world!"

// for (const greet of greetings) {
//     console.log(greet)
// }

//MAPS

// // for (const key of map) {
// //     console.log(key)
// // }

// for (const [key,value] of map) { 
//     //here we are destructuring array

//     console.log(key, ":-" , value)
// }

// For of loop on object: Objects in jS are not iteratable directly. So we need to converst them into keys, values or entries. We are talking about for of loop here.

const user = {
    name : "Sohaib",
    age : 24,
    location : "Karak"
}

// for (const [key, value] of Object.entries(user)) {
//     console.log(key, value)
// }

// for (const key of Object.keys(user)) {
//     console.log(key, user[key])
// }

for (const value of Object.values(user)) {
    console.log(value)
}