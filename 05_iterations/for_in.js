// Object --- for in

const language = {
    js : "JavaScript",
    cpp : "C++",
    py : "Python",
    'c#' : "C Sharp"
}

for (const key in language) {
    console.log(`${key} shortcut is for ${language[key]}`)       
    
}