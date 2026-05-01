const user = {
    username : "Sohaib",
    price : 99,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the course`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username ="Ahmed"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
//     console.log(this);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
//     console.log(this);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username);
//     console.log(this);
// }
// chai()

//------explicit return (Arrow Function) return keyword is used
//Arrow Function
// const addNumber= (num1, num2) => {
//     return num1 + num2
// }

// console.log(addNumber(2,4))

//-----implecit return (Arrow Function) return keyword not used

// const addNumber= (num1, num2) => num1 + num2
const addNumber= (num1, num2) => (num1 + num2)
console.log(addNumber(2,4))

// rapping in curly braces {} requires return
// whereas in () or leaving it as it is dont require return