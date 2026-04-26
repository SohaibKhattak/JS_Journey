// ARRAY
// const myArr = [1,2,4,5,7,true,"sohaib"] //Array can take different types
//Also array is non-primitive 
const myArr=[1,2,3,4,5]
// console.log(myArr1)
// console.log(myArr[4])
// console.log(myArr.length)

const heros =["Abu Bakr", "Ali" ,"Umar"]
// console.log(heros)
// console.log(typeof heros) //check type of array, it returns an object. So we conclude that array is a type of object
// console.log(typeof(heros))

// now if we want to see if our array is really an array or not. so for that

// console.log(Array.isArray(heros))

//+++++++++Methods in Array ++++++++++++ //

// const myArr=[1,2,3,4,5]

// myArr.push(6)
// myArr.push(7,8) // push to add elements

// myArr.pop()
// myArr.pop()

// myArr.unshift(10)  // add value at start
// myArr.unshift(11,12)
// myArr.shift() //remove value from start
// myArr.shift()
// myArr.shift()

// console.log(myArr.includes(5)) //returns true or false that weather this element exists in array or not.

// console.log(myArr.indexOf(4))
// console.log(myArr)

// const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof myArr)
// console.log(newArr)
// console.log(typeof newArr)

//SLice and splice concept

console.log("A", myArr)
const sliceArr = myArr.slice(1,3)
console.log(myArr)
console.log(sliceArr)

console.log("____")

console.log("B", myArr)
const spliceArr = myArr.splice(1,3)
console.log(myArr)
console.log(spliceArr)

/*So difference b/w slice & splice is:
slice(1,3): it includes 1 but don't include 3. (1,3 ) are indexes

splice(1,3): first point= it starts from 1 index and also include 3

second point= it removes the elements which are spliced from array 
*/