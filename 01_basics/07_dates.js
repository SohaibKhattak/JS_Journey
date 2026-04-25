const myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

const dateCreated = new Date("08-02-2002")
// console.log(dateCreated)
// console.log(dateCreated.toLocaleString())

const myTime= Date.now()
console.log(myTime) //this gives time in milliseconds uptill now from 1970s

//interview--->> how to get in seconds
console.log(Math.floor(myTime/1000))

// console.log(dateCreated.getTime())