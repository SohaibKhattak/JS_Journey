// For each

//Since For each loop takes a call back function so function name is not given.

let languages = ["js","ruby","java","python"]

// languages.forEach(element => {
//     console.log(element)
// });

// languages.forEach( (items) => {
//     console.log(items)
// })

// languages.forEach( function (items) {
//     console.log(items)
// })


// function printItems(items){
//     console.log(items)
// }

// we can pass a function as a reference to forEach loop....we are not () executing it...just passing the reference.

// languages.forEach(printItems)

//....Now we should know that forEach can take multiple parameters also...when we give one paramter and press comma it shows other parameters to give.

// languages.forEach((item,index,array)=>{
//     console.log(item,index,array)
// })

// We will have some cases like:
// [{},{},{}]

let coding = [
    {
        languagesName: "javaScript",
        languagesFileName: "js"
    },

    {
        languagesName: "java",
        languagesFileName: "java"
    },

    {
        languagesName: "python",
        languagesFileName: "py"
    }
]

coding.forEach(obj=>{
    console.log(obj)
})

coding.forEach(obj=>{
    console.log(obj.languagesName, ":", obj.languagesFileName)
})
