const accountId = 13334
let accountEmail = "debaprasad@gogle.com"
var accountPassword = "12345"
accountCity = "jaipur"

//accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "bengaluru"
let accountState;
console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functionl scope
*/



console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
