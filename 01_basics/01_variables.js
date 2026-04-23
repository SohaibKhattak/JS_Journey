const accountId= 32145;
let accountEmail= "sohaib@gmail.com";
var accountPassword= "32432";    
/*  This var keyword is not used as it is now deprecated because it has no 
  control on the scope (block scope & functional scope) 
  so prefer not to use var, instead go for let.
  */

accountCity= "Peshawar";    // This is possible but not a good practice...possible because JS is a safe language

// Now what if someone say that i need account state but dont know the value yet then what?
let accountState;  //Likewise we can declare it without assigning value to it. Its value will be undefine until we assign it.

accountEmail= "hr@gmail.com";
accountPassword= "986578";
accountCity= "Pindi";

// accountId=121212;     // Assignment to a constant variable is not permissible.
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);