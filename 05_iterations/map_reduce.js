// map():
// Map basically transform the array and returns a new array. 

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const returnValue = arr.map((item) => item * 2)
// console.log(returnValue)

// chaining concept:
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const result= arr
//             .map((element)=> element*10)
//             .map((element)=> element+1)
//             .filter((element)=> element>=40)
//         //  .reduce((res,cur)=> res+cur,0 ) //possible
// console.log(result)

//---------------reduce():-----------------------
// Reduce() returns a value by combining all the elements of array into a single value (e.g: sum, product etc)

const arr = [1,2,3,4,5]

// const result = arr.reduce((acc,curr)=> acc+curr,0)
// console.log(result)

// const result = arr.reduce((acc,curr)=> {
//     return acc+curr
// },0)
// console.log(result)


/* working:
 acc = accumalator : stores the result
 curr = current : stores the current value of array
 0 : initially sum starts from 0 like for sum=0 at start
 1: incase if we want to multiply like product=1 at start

 [1,2,3,4,5]
 acc+curr
 0+1 =1  // initially acc get 0 
 1+2 =3
 3+3 =6
 6+4= 10
 10+5= 15
*/

// Reduce() example

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const result = shoppingCart.reduce((acc,curItem)=>{
    return acc+curItem.price
},0)

console.log(result)