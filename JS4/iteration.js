//for loop 

for (let i = 1; i < 10; i++) {
    const element = i;
    //console.log(element);
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
      //  console.log("5 is a best number");
    }
    //console.log(element);
    
    
}


for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop value : ${i}`);
    for (let j = 0; j <= 10 ; j++) {
        const element = j;
      //  console.log(`inner loop value : ${j}`);
        
    }
    
}



for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop value : ${i}`);
    for (let j = 1; j <= 10 ; j++) {
        const element = j;
        //console.log(i +'*' + j  + '='  + i*j);
        
    }
    
}

let myarray =[ "flash ", "batman ", "superman"] 
//console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    //console.log(element);
    
    
}


// ++++++++++++++++++++++++++  break and continue +++++++++++++++++++++++++++++++++++++++++

for (let index = 1; index <= 20 ; index++) {
    //console.log(`value of i : ${index}`);
    if(index==8){
        //console.log("8 is detected ");
        break
        
    }
    
    
}

for (let index = 1; index <= 20 ; index++) {
    //console.log(`value of i : ${index}`);
    if(index==8){
      //  console.log("8 is detected ");
        continue   
    }
}

for (let index = 1; index <= 20 ; index++) {
    //console.log(`value of i : ${index}`);
    if(index==8){
        console.log("8 is detected ");
        continue
    }
    console.log(`value of i : ${index}`);  
}