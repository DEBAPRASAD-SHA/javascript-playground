
function sayMyName(){
     console.log("D");
     console.log("E");
     console.log("B");
     console.log("A");
}

// sayMyName()

// function addTwoNumbers(num1, num2){ //in this which comes under function definition that is parameters ex:-num1, num2

// console.log(num1 + num2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) //where the passing the calling value for that function that is arguments. ex:- 3, null

// console.log("Result", result);


function loginUserMessage(username = "deb"){
    if(!username){
console.log("Please enter a username");
return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("deba"))
// console.log(loginUserMessage("deba"))

function calculateCartPrice(val1, val2, ...num1){  //this "..." 3dot known as rest operator
 return num1
}

// console.log(calculateCartPrice(200, 400, 500, 446))

const user = {
    username: "deba",
    prices: 299
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "deba",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));