// Object --- for in

// Object has key value pairs
//Array also has key: values...but array keys are not defined by us...array gets them directly starting from 0 and so on...o,1,2,....

const language = {
    js : "JavaScript",
    cpp : "C++",
    py : "Python",
    'c#' : "C Sharp"
}

// for (const key in language) {
//     console.log(`${key} shortcut is for ${language[key]}`)       
    
// }

// Can we use for in loop for array

// let arr =['js', 'ruby', 'java']

// for (const key in arr) {
//     console.log(arr[key])
// }


// Now lets see for map

// const map = new Map()

// map.set("PAK", "Pakistan")
// map.set("FR", "France")
// map.set("UK", "United Kingdom")

// for (const key in map) { 
//     console.log(key)
// }

// for in loop does not works for map...for map we use for of loop to iterate its values
