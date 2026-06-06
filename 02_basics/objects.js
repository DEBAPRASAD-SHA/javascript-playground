// singleton

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "deba",
    "full name": "deba prasad", 
    [mySym]: "myKey1",
    age: 24,
    location: "kjr",
    email: "cndcjn@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monaday", "Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "cndcjn@chat.com"
// Object.freeze(JsUser) //Object.freeze is used for freeze or lock the value which can't change after every modfication try.
JsUser.email = "debap@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js User")
}
JsUser.greetingTwo = function(){
    console.log(`hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




