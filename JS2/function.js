function saymyname (){
    console.log("s");
    console.log("a");
    console.log("b");
    console.log("a");   
}

//saymyname()         
 //saymyname   reference      , saymyname()    excute

//function addtwonumbers(number1,number2){
//    console.log(number1+number2);
//}
//const result = addtwonumbers(3,5)
//console.log(result);                //its give undefined

function addtwonumbers(number1,number2){
   // let result =number1+number2
   // return result

   return number1+number2
    
}
const result=addtwonumbers(3,5)
//console.log("result:",result);


//addtwonumbers()         //nan
//addtwonumbers(3,4)      //7 
//addtwonumbers(3,"4")     //34
//addtwonumbers(3,"a")    //3a
//addtwonumbers(3,null)    //3

function loginusermessage(username ){
    if(username===undefined ){                          //we can also use (!username )
        console.log("please enter a username ");
        return
    }
   return` ${username}    is logged in `
}
//console.log(loginusermessage("saba"));
//console.log(loginusermessage(""));  //is logged in 
//console.log(loginusermessage());     //undefined

//object in function


/*function calculatecartprice  (...num1){     //rest method
  return num1
}
console.log(calculatecartprice(4,9,78,980));*/

/*function calculatecartprice  (val1,val2,...num1){     //val1 is first value
    return num1
}
console.log(calculatecartprice(4,9,78,980));*/

/*const user={
    username : "saba",
    price:900
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username},and price is ${anyobject.price} `);
    return anyobject
    
}
handleobject(user)*/


//another method

/* function handleobject(anyobject){
    console.log(`username is ${anyobject.username},and price is ${anyobject.username}`);
    return anyobject
 }
 handleobject(
    {
        username:"wahid",
        price:"890"
    }
 )*/

//array in function 

/*const  user=[200,700,790]

function handlearray (anyarray){
    return anyarray[2]
}
console.log(handlearray(user))*/

//another method

function handlearray (anyarray){
    return anyarray[2]
}

console.log(handlearray(
    [200,300,568]
));

