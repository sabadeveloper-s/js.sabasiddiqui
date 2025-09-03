//singleton
//object.create

//object literals 

const sym = Symbol("key1")

const user={
    name:"saba",
    [sym]:" mykey1",     //syntax of symbol
    age : 20,
    email:"sabasiddiqui@google.com",
    isLoggedIn : false,
    location: "mumbai",
    lastLogindays :  ["monday","satursday"]
}

//console.log(user.name);     //don't ptefer this
//console.log(user["email"]);   //prefer this 
//console.log(user.sym);     // its change to string


console.log(user["sym"]);   // function is symbol


//to change the value

user.email="wahid@google,com"
//Object.freeze(user);       //when we used this changes nhi hoge
user.email="shar@.vcom"

//console.log(user);

user.greeting = function(){
    console.log("hello user");
}
user.greeting2 =function() {
    console.log(`hlo user,${this.name}`);      
}

console.log(user.greeting());
console.log(user.greeting2());


