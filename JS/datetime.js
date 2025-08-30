//let myDate  =  new Date ();
/*console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());*/


//let myCreatedDate = new Date (2004,9,18 )
//console.log(myCreatedDate.toString());

//let myCreatedDate = new Date(2004,10,21,5,3)
//console.log(myCreatedDate.toLocaleString());   //to also get time

let myCreatedDate = new Date ("2024-01-12");
//console.log(myCreatedDate.toString());   // for yyy/mm/dd
//console.log(myCreatedDate.getTime());




//use for in quiz /poll to get time into miliseconds to know who is fastest !!


//let myTimeStamp = Date.now()     // give current time in milli second
//console.log(myTimeStamp);        //give time into milisecond from jan 1970

//console.log(Date.now()/1000);    // to get in second 
//console.log(Math.floor(Date.now()/1000 );   //  to get in second but not to get  in decimal 

 
let newDate = new Date ()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());  //start from 0 
console.log(newDate.getMonth()+1); //start from 1

console.log(newDate.toLocaleString('default' ,{     /*to get as you want long , 
    weekday: "long"                                   numeric alphabetic,etc*/                        
}));




