//const user={
//    username:"sabasiddiqui",
//    logincount:"9",
//    email:"saba@gmail.com"
//}
//console.log(user.username);          //this whole is object literal



//const user={
//    username:"sabasiddiqui",
//    logincount:"9",
//    email:"saba@gmail.com",

 //   getuserdetails:function(){
       // console.log("got user deatails from database");
   //    console.log(` username: ${this.username}`);
       
 //   }
//}
//console.log(user.username);  
//console.log(user.getuserdetails());


function user(username,logincount,email){
    this.username=username
    this.logincount=logincount
    this.email=email

    this.greeting=function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this

}

const userone=user("saba","10","saba@gmail.com")
const usertwo=user("sharjel","8","shar@gmail.com")
console.log(userone.constructor);
//console.log(usertwo);



