// How to declare object using constructor and singleton

// const user = new Object()  
//This is a singleton object...it displays an object object when printed

// const user = {}    
//This is not a singleton object...it also displays an object object when printed
//------------------------------------------------------------
// Imp: Object.create()  --->>> Object prototype

// const user = {
//   name: "Sohaib"
// };
// const obj = Object.create(user);  // Prototype
// console.log(obj.name); // Sohaib...it inherits user object

//--------------------------------Now lets do it--------

const user = {}

user.id = "123abc"
user.name = "sohaib"
user.isLoggedIn = false

// console.log ( user )

const regularUser = {
    email : "sohaib@gmail.com",
    fullName: {
        userFullName :{
            firstName : "Sohaib",
            lastName : "Akhtar"
        }
    }

}

// console.log(regularUser)
// console.log(regularUser.fullName.userFullName.firstName)

// Now we can also merge two objects like arrays

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} // ❌ Dont do like this, instead

// const obj3 = Object.assign({}, obj1,obj2) 
// {} is optional but good practice, this acts as target
//basically syntax is Object.assign(Target, Source). So if there are more then 2 object to merge...this empty target paranthesis helps

// Note: The best practice is to use Spread.
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

console.log(user)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty("name")) 
//checks key is there or not


