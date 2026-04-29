const course ={
    courseName : "JavaScript",
    price : 999,
    courseInstructor : "Hitesh"
}

//Now lets say i want to print the course instructor so i need to use the following code.
//But everytime i need to do this.

// console.log(course.courseInstructor)

//IMP: There is a concept as object destructing as follow

const {courseInstructor: instructor} = course
//Now we only write courseInstructor to point it.
//destructuring helps us to extract values from an object in easy way.
console.log(instructor)