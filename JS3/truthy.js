const userEmail = ""

//if(userEmail){
//    console.log("got a useremail");
//}else{
//    console.log("don't got useremail ");
//}


//falsy value                                   //truthy value


/*                                                                                      
   false                                         "0"
   0                                             'false'
   -0                                             " "
   bigint 0n                                      []
   ""                                             {}
   null                                           function(){}
   undefined
   NaN 
*/

//if(userEmail.length===0){
//    console.log("Array is empty ");    
//}

const emptyobj= {}

if(Object.keys(emptyobj).length===0){
    console.log("object is empty ");
}   


//false == 0 //true 
//false =='' //true 
//0==''    //true 

//nullish coalescing operator (??): null undefined

let val1
//val1= 5 ?? 10           //5
//val1=null ??10            //10
//val1 = undefined ?? 14     //14
val1 = null ?? 10 ?? 20     //  10


console.log(val1);


//terinary opearator 

//condition ? true : false 

const iceteaprice = 100
iceteaprice >= 80 ? console.log("less than 80") : console.log("more than 80");



