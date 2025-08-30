const Arr=[ 0,1,2,3,4,5]
//const heros =["salman","varun","sidharth"]      //Araay is an object that contain-
//console.log(Arr);                           // multiple element in one variable
                
//const Arr2 = new Array(1,2,3,4,5)    //also write this way sometime
//console.log(Arr2);

                                            
//array methods 

//Arr.push(7)    //to add elemnets in array
//Arr.pop()      //to remove last elements from array
//Arr.unshift(0)   //to add element in start 
//Arr.shift()        //to remove element in start

//console.log(Arr.includes(5));  //true if value is there and false if value is not there
//console.log(Arr.indexOf(5));    // show element position 
//console.log(Arr.indexOf(19));   // give -1 bcoz this element is not there 


//console.log(Arr);

//const newArr = Arr.join()   // change array into string 
//console.log(newArr);

//slice and splice 

// console.log("A", Arr);
// const myn1 = Arr.slice(1,3)   // start include , end exluded
// console.log(myn1);


console.log("B", Arr);
const myn2 = Arr.splice(2,2)  
console.log(Arr);
console.log(myn2);


let farr = ["shama","huma","babu","heena","afrin","tabbu","saba"]
const mar = farr.splice(0,5)
console.log(mar);

//console.log(farr);

// let myarr = ["red","green","yellow"]

// const newarr = myarr.splice(1,1)
// console.log('modify array',newarr);
// console.log('original array',myarr)









