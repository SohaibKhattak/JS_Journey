// let languages = ["js","ruby","java","python"]

// const returnValues= languages.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(returnValues)

// So the point is forEach() loop does not return any value...if we tries to return anything it gives undefined.

// We can do it with some logic as:
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const newArr = []
// arr.forEach((num)=>{
//     if(num>4){
//         newArr.push(num)
//     }
// })

// console.log( newArr)

//--------------Filter ----------------

// const arr = [1,2,3,4,5,6,7,8,9,10]

// const returnValue = arr.filter( (item) => item > 4 )

// console.log(returnValue)

// const returnValue = arr.filter( (item) => {
//     return item > 4 
//     //if we use {}scope, then return is must
// } )

// console.log(returnValue)

//filter( ) returns a new array...it takes a callback function which iterates over the array and checks condition for every item. then if any item is true with the condition then it filters it out and returns it to the new array.
// filter () returns selected items based on some condition.

// last example on filters
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  // list all books that have genre of history
// let result = books.filter( (bk)=> bk.genre ==="History" )

 // list all books that have publish after 2000
// const result = books.filter((bk)=>{
//     return (bk.publish >2000)
// })

//list all books that has genre history and published in or after 1995
const result = books.filter((bk)=>{
    return (bk.genre==="History" && bk.publish>=1995)
})

console.log(result)

