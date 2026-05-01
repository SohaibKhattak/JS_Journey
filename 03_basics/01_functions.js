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
        // console.log("please enter your name")
        // return 
    }
    // return `${username} just logged in`
}

// console.log(userLoggedInMessage()) 

// if we dont pass any value...print will be undefined just logged in...bcz we haven't passed on any value.

//------------------Rest Operator--------------------
//Suppose we are making an ecommerce website, in their we have a cart which is used to add products to add up at end. User added 1 element to the cart. Now till here it is fine...but what if he adds on more products to the cart?
//Here we use Rest operator.: One variable is passed as a parameter and we can add multiple values as argument when we call the function.

function calculateCartPrice(...num){
    return num
}

// console.log(calculateCartPrice(200,100))

//Object passing to function

const user = {
    username : "Sohaib",
    price : 199
}

function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
// we can also create object directly when calling the function

handleObject({
    username: "Sohaib Akhtar",
    price : 399
})

//---------------------array in functions-------

const arr = [1,2,4]

function handleArray(anyArray){
    return anyArray[1]
}

console.log(handleArray(arr))
console.log(handleArray([200,100,400]))