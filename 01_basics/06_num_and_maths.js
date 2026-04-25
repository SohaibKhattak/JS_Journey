const score = 50;
// console.log(score)

const balance = new Number(300);
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const anotherNumber = 12.49
// console.log(anotherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-Uk')) //add commas to number....also we can specify our own country number system

// ++++++++++++  Maths +++++++++++++//

// console.log(Math)
// console.log(Math.abs(-5))
// console.log(Math.round(4.6)) //Rounding off
// console.log(Math.ceil(4.1)) 
// console.log(Math.floor(4.9))
// console.log(Math.min(2,5,1,4))
// console.log(Math.max(2,5,1,4))
// console.log(Math.pow(2,3))
// console.log(Math.PI)
// console.log(Math.sqrt(25))

// console.log(Math.random())
// console.log(Math.random()*10+1)
// console.log(Math.floor(Math.random()*10+1))

min = 10
max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)
/* Math.floor(Math.random()*(max-min+1))+min >>summary
 Math.floor= Lowest single value
 Math.random= generates random values
 basically it generates some values it may be 0.912121, so we want our number to be at least 1 or we can say it should be a good number so we multiply it with 10 so that values shifts towards left.
 But what if generated value is 0.01 then we still gets 0 after multiplying by 10. So we add 1 to it that atleast 1 is produced. 
 If we have some range as above, we then add min value to it so we at least gets the minimum value asked for.
*/