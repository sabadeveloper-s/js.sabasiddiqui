//ES6

//class user {
//    constructor(username,email,password){
//        this.username=username;
//        this.email=email;
//        this.password=password;
//    }
//    encryptedpassword(){
//        return`${this.password}abc`
//    }
//    changeusername(){
 //       return`${this.username.toUpperCase()}`
 //   }
//}

//const chai = new user("saba","saba@gmail.com","123")
//console.log(chai.encryptedpassword());
//console.log(chai.changeusername());


//behind the scence 

function user (username,email,password){
    this.username=username;
    this.email=email;
    this.password=password
}

user.prototype.encryptedpassword=function(){
    return `${this.password}`
}
user.prototype.changeUsername=function(){
    console.log("DEBUG:",this.username,typeof this.username);
    return `${this.username.toUpperCase()}`
}

const tea= new user("adeeb","adeeb@gmail.com","890")
console.log(tea.encryptedpassword());
console.log(tea.changeUsername());

