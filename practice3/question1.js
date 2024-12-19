let marks= {
    Aditya : 54,
    Shivam : 57,
    Parul : 43,
    Mayank : 67
}

for(let i=0;i<Object.keys(marks).length;i++){
    console.log("Marks of",Object.keys(marks)[i],"are",marks[Object.keys(marks)[i]])
}

//basically we can convert an object into an array using Object.keys(name of that object)