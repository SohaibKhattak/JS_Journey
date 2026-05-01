//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//- --------------------------------------------

function one(){
    const  username = "Sohaib";

    function two(){
        const website = "youtube";
        // console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if (true){
    const username = "Sohaib";
    if (username === "Sohaib"){
        const website = " Youtube ";
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

//+++++++Interesting +++++++++++++++++
console.log(addOne(5))
function addOne(num){
    return num + 1
}


const addTwo = function(num){
    return num+2
}
addTwo() 
//So when we declare the function normally then we can call it before initialization...but when we store the function inside a variable we cannot call the function before declaration.