
console.log("hello from Codespaces!");
const AccountId=1234
let AccountEmail = "saba@saba.com"
var AccountPassword = "1234"
AccountCity = "jaipur"
let Accountstate;  // its give undefined

//AccountId=3456 //not allowed const can't be change

console.log(AccountId)
AccountEmail="wahid@wahid.com"    // this
AccountPassword="23356"          // can
AccountCity="Delhi"              // change

// for many variables 
console.table([AccountId, AccountEmail,AccountPassword,AccountCity])

/* prefer not to use var because of issue in block scope 
   and functional scope */
