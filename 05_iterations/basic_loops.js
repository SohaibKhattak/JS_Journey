//For loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element)
// }


//nested for loop : 

// for(let i=0; i<10; i++){
//      console.log(`outer loop value : ${i}`)
//     for (let j = 0; j < 10; j++) {
//         console.log(`inner loop value: ${j} and outer loop value: ${i}`)
        
//     }
// }

// Printing all tables

// for(let i=1; i<=10; i++){
//      console.log(`Table of : ${i}`)
//      console.log("\n")
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)

        
//     }
// }


// Now loop for arrays

let myArr = ["Sohaib", "Kamran", "Ali", "Sami"]

// console.log(myArr.length)

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element)
}

// break and continue keywords:
//break: It breaks all the next code iterations. when break is used the code is executed outside the block scope then

//continue: It only skips the current condition when met...after that it continues within that block scope if iterations exists

// for (let i = 1; i <= 20; i++) {
    
//     if(i==5){
//         console.log("Detected 5")
//         break;
//     }
//     console.log(`value of i is ${i}`)
// }
    
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("Detected 5")
        continue;
    }
    console.log(`value of i is ${i}`)
}
