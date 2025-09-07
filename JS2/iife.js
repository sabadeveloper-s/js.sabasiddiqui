//immediatelty invoked function expression IIFE

(function data (){
    //named iife
    console.log("DB CONNECTED");
})();                               // use demi colon to end the code 

 ( (name)=>{
    //simple iife 
    console.log(`db connected,${name}`);
 })("saba")