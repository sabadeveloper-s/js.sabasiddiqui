//if

const userisloggedin = true 
const tempearture = 41

//if(tempearture<50){
//  console.log("less than 50");
//}else{
//    console.log("is greater than 50");
//}

// < , > , <= , >= , == , !=  , === ,!==      // === is also check types 
//                                         // !== is check negative 

const score = 200

//if (score>100){
//    var power = "read mind "          // var is a global scope 
//}
//console.log(`user power : ${power}`);

/*if (score>100){
    const  power = "read mind " 
    console.log(`user power : ${power}`);      
}*/

//const balance = 1000

//if(balance>50) console.log("test"), console.log("test");     //implicit code
//don't use like this 


/*if(balance< 500){
    console.log("less than 500"); 
}else if(balance<750){
    console.log("less than 750");
}else if(balance<800){
    console.log("less than 800");
}else {
    console.log("greater than 900");
}*/


const UserisloggedIn = true 
const debitcard = true 
const loginfromGoogle = true 
const loginfromEmail = false 

if(UserisloggedIn && debitcard){                       //&& = and , both should be true 
    console.log("Allowed to take a course ");
}
if(loginfromGoogle|| loginfromEmail){                   //|| = or , one should  be true 
    console.log("user is logged in ");
}


