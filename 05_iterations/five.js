const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, indexx, arr)=> {
//     console.log(item, indexx, arr);
// } )

const myCoding = [
    {
        languageName: "jvascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "jv"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    // console.log(item.languageFileName);
} )