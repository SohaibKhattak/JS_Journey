/* Stack and Heap
 Stack: Primitive data types (number, string, boolean, null, undefined, symbol)

 The primitive data types are stored in the stack. The stack is a simple data structure 
that follows the Last In First Out (LIFO) principle. When a variable is declared and assigned
  a primitive value, it is stored in the stack. The stack is fast and efficient for storing 
 and accessing primitive data types. */

 let city = "Peshawar";
 let anotherCity = city;

//  console.log(city);
//  console.log(anotherCity);

anotherCity = "Karak";
/* When we assign the value of city to anotherCity, a copy of the value is created in the stack. 
Therefore, when we change the value of anotherCity, it does not affect the value of city. 
 This is because they are stored in different memory locations in the stack.
 In simple terms, primitive values are copied when assigned to another variable. */

// console.log(city);
// console.log(anotherCity);

// Heap: Non-primitive data types (objects, arrays, functions)  

let sohaib = {
    name: "sohaib",
    age: 22,
}

let anotherPerson = sohaib;

// console.log(sohaib);
// console.log(anotherPerson);

anotherPerson.name = "sohaib khan";

console.log(sohaib);
console.log(anotherPerson);

/* When we assign the value of sohaib to anotherPerson, we are not creating a copy of the object. 
Instead, both variables point to the same object in the heap. Therefore, when we 
change the name property of anotherPerson, it also changes the name property of sohaib
because they reference the same object in memory. 
In simple terms, non-primitive values are not copied when assigned to another variable;
instead, they reference the same memory location in the heap. */    