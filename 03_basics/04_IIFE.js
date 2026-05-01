//Normal function with func declaration and call
// function connectDB(){
//     console.log("DB Connected")
// }
// connectDB()

//-----------Important (IIFE)
// Immediately invoked function expression
// An IIFE is a technique where the function is executed automatically when written....lets say we wrote a function for database connection and we want that database is connected directly when the app is run. So in such situation we IIFE is useful

// IIFE benefits: 
//1. Automatically invoked
//2. remove the global variable pollution 
//IIFE syntax: (function declare)(call)....example--->>>

// Note : IIFE is run only once for a function...for running it again we need to rewrite the complete IIFE

(function connectDB(){ //this one is named IIFE
    console.log("DB Connected")
})();  
//Semicolon is a must after IIFE because we need to tell it that IIFE is invoked but it dont know where to stop its context...so ; is necassry here. 

(()=>{ //this dont have a name so normal IIFE (un-named IIFE)
    console.log("DB Connected")
})();

((name)=>{
    console.log(`Hello ${name}`)
})("Sohaib") // We can pass our arguments here