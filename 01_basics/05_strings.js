const name = "sohaib";
const repoCount= 40;

// console.log(name + repoCount); Not a good way to cancatenate

//Now following is string interpolation

// console.log(`hey my name is ${name} and my repo count is ${repoCount}`);

// console.log(name.length);

const gameName = new String("haider");
// console.log(gameName.toUpperCase())
// console.log(gameName)

const newString = gameName.substring(0,4)
// console.log(newString)

const anotherString = "    sohaib    "
console.log(anotherString)
console.log(anotherString.trim()) // used to remove extra spaces

const url= "https://sohaib.com/sohaib%20khattak"
console.log(url.replace("%20","-"))

console.log(url.includes("haider")) //checks weather string includes this or not

const newCompanyName = "taishan-consultants-sohaib"
console.log(newCompanyName.split("-",3)) //with split we can choose any point from our string to split it and also we can define limit for it