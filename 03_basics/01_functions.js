function printName(){
    console.log("S")
    console.log("o")
    console.log("h")
    console.log("a")
    console.log("i")
    console.log("b")
}

// printName()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2)
// }

// const result = addTwoNumbers(3,5)
// console.log(result) // This shows undefined because we haven't return any value from function...it is just printed inside function....so no value is stored in the result

function addTwoNumbers(num1,num2){
    return num1 + num2
}

const result = addTwoNumbers(3,5)
// console.log("Result: ", result)

function userLoggedInMessage(username){
    if(!username){ 
        //(username === undefined) is = (!username)
    //in JS undefined & "" are treated as false
        console.log("please enter your name")
        return 
    }
    return `${username} just logged in`
}

console.log(userLoggedInMessage()) 

// if we dont pass any value...print will be undefined just logged in...bcz we haven't passed on any value.